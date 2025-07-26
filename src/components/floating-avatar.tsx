"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion"
import { Play, Pause, MessageSquare, Zap, Heart, Code2, Sparkles } from "lucide-react"

interface Message {
  id: number
  text: string
  duration: number
  type: "intro" | "passion" | "vision" | "cta"
  emotion: "neutral" | "excited" | "confident" | "passionate"
}

interface FloatingElement {
  id: number
  icon: React.ReactNode
  color: string
  delay: number
  duration: number
}

export default function FloatingAvatar() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [interactionMode, setInteractionMode] = useState<"auto" | "manual">("auto")
  const [currentEmotion, setCurrentEmotion] = useState<"neutral" | "excited" | "confident" | "passionate">("neutral")
  const [energyLevel, setEnergyLevel] = useState(0.5)
  const [mouseDistance, setMouseDistance] = useState(1)
  const [isNearMouse, setIsNearMouse] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showPauseMessage, setShowPauseMessage] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [nextMessagePreview, setNextMessagePreview] = useState<Message | null>(null)
  const [conversationProgress, setConversationProgress] = useState(0)
  const [messageOpacity, setMessageOpacity] = useState(1)

  // Advanced motion values for 3D effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-400, 400], [15, -15])
  const rotateY = useTransform(mouseX, [-400, 400], [-15, 15])
  const scale = useSpring(1, { stiffness: 400, damping: 30 })

  // Enhanced mouse tracking
  const avatarX = useSpring(0, { stiffness: 200, damping: 30 })
  const avatarY = useSpring(0, { stiffness: 200, damping: 30 })
  const glowIntensity = useSpring(0.3, { stiffness: 300, damping: 40 })

  const messages: Message[] = [
    {
      id: 1,
      text: "Hi! I'm Pragya, a passionate developer and community builder.",
      duration: 3000, // Fixed to 3 seconds
      type: "intro",
      emotion: "excited",
    },
    {
      id: 2,
      text: "I believe technology should empower everyone, especially students.",
      duration: 3000, // Fixed to 3 seconds
      type: "passion",
      emotion: "passionate",
    },
    {
      id: 3,
      text: "As a Google Student Ambassador, I want to bridge innovation with education.",
      duration: 3000, // Fixed to 3 seconds
      type: "vision",
      emotion: "confident",
    },
    {
      id: 4,
      text: "Ready to explore my journey? Let's build the future together!",
      duration: 3000, // Fixed to 3 seconds
      type: "cta",
      emotion: "excited",
    },
  ]

  const pauseMessage = {
    text: "Click play to get to know about me! 👋",
    type: "pause" as const,
    emotion: "neutral" as "neutral" | "excited" | "confident" | "passionate",
  }

  const floatingElements: FloatingElement[] = [
    { id: 1, icon: <Code2 className="w-4 h-4" />, color: "#3b82f6", delay: 0, duration: 8 },
    { id: 2, icon: <Sparkles className="w-3 h-3" />, color: "#8b5cf6", delay: 1, duration: 6 },
    { id: 3, icon: <Zap className="w-3 h-3" />, color: "#f59e0b", delay: 2, duration: 7 },
    { id: 4, icon: <Heart className="w-3 h-3" />, color: "#ef4444", delay: 3, duration: 9 },
  ]

  // Enhanced mouse tracking for 3D effect and magnetic attraction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      // Calculate normalized distance (0 = at center, 1 = far away)
      const normalizedDistance = Math.min(distance / 300, 1)
      setMouseDistance(normalizedDistance)
      setIsNearMouse(distance < 200)

      // 3D rotation based on mouse position
      mouseX.set(deltaX)
      mouseY.set(deltaY)

      // Magnetic attraction effect
      if (distance < 150) {
        const attractionStrength = (150 - distance) / 150
        avatarX.set(deltaX * attractionStrength * 0.08)
        avatarY.set(deltaY * attractionStrength * 0.08)
        glowIntensity.set(0.8 + attractionStrength * 0.4)
      } else {
        avatarX.set(0)
        avatarY.set(0)
        glowIntensity.set(0.3)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, avatarX, avatarY, glowIntensity])

  // Enhanced message sequence with smooth transitions
  useEffect(() => {
    if (!isActive || interactionMode === "manual") {
      if (!isActive && !showMessage && !showPauseMessage) {
        const timer = setTimeout(() => {
          setShowPauseMessage(true)
          setConversationProgress(0)
        }, 200)
        return () => clearTimeout(timer)
      }
      return
    }

    setShowPauseMessage(false)

    const showMessageSequence = (index: number) => {
      if (index >= messages.length) {
        // Smooth restart sequence
        setIsTransitioning(true)
        setMessageOpacity(0)

        setTimeout(() => {
          setCurrentMessageIndex(0)
          setCurrentEmotion("neutral")
          setEnergyLevel(0.3)
          setConversationProgress(0)
          setIsTransitioning(false)

          setTimeout(() => {
            showMessageSequence(0)
          }, 300)
        }, 800)
        return
      }

      const message = messages[index]
      const isFirstMessage = index === 0

      // Pre-transition setup
      if (!isFirstMessage) {
        setIsTransitioning(true)
        setMessageOpacity(0)
      }

      // Initial delay for first message or transition delay for others
      const initialDelay = isFirstMessage ? 300 : 400

      setTimeout(() => {
        // Set up the message with smooth emotion transition
        setCurrentMessageIndex(index)
        setConversationProgress((index + 1) / messages.length)

        // Smooth emotion transition
        setTimeout(() => {
          setCurrentEmotion(message.emotion)
          setEnergyLevel(
            message.emotion === "excited"
              ? 0.9
              : message.emotion === "passionate"
                ? 0.85
                : message.emotion === "confident"
                  ? 0.8
                  : 0.6,
          )
        }, 100)

        // Show message with fade in
        setTimeout(() => {
          setShowMessage(true)
          setMessageOpacity(1)
          setIsTransitioning(false)
        }, 200)

        // Hide message with smooth fade out before next
        setTimeout(() => {
          setMessageOpacity(0)

          setTimeout(() => {
            setShowMessage(false)
            setEnergyLevel(0.4)

            // Brief pause before next message
            setTimeout(() => {
              showMessageSequence(index + 1)
            }, 300)
          }, 400)
        }, 3200) // Show for 3.2 seconds
      }, initialDelay)
    }

    showMessageSequence(0)
  }, [isActive, interactionMode])

  const handleAvatarClick = () => {
    if (!isActive) {
      // If paused, start playback with smooth transition
      setShowPauseMessage(false)
      setTimeout(() => {
        setIsActive(true)
        setInteractionMode("auto")
        setCurrentMessageIndex(0)
        setCurrentEmotion("neutral")
      }, 300)
      return
    }

    if (interactionMode === "auto") {
      setInteractionMode("manual")
    }

    const nextIndex = (currentMessageIndex + 1) % messages.length
    const nextMessage = messages[nextIndex]

    setCurrentMessageIndex(nextIndex)
    setCurrentEmotion(nextMessage.emotion)
    setShowMessage(true)
    setEnergyLevel(1)

    // Enhanced haptic feedback with smoother animation
    scale.set(0.9)
    setTimeout(() => scale.set(1.1), 80)
    setTimeout(() => scale.set(0.98), 160)
    setTimeout(() => scale.set(1.02), 240)
    setTimeout(() => scale.set(1), 320)

    setTimeout(() => {
      setShowMessage(false)
      setEnergyLevel(0.5)
    }, 3000) // Manual clicks also show for 3 seconds
  }

  const togglePlayback = () => {
    const wasActive = isActive

    if (!wasActive) {
      // Starting playback - smooth transition
      setShowPauseMessage(false)
      setTimeout(() => {
        setIsActive(true)
        setInteractionMode("auto")
        setCurrentMessageIndex(0)
        setCurrentEmotion("neutral")
      }, 200)
    } else {
      // Pausing - smooth transition
      setIsActive(false)
      setShowMessage(false)
      setTimeout(() => {
        setShowPauseMessage(true)
        setCurrentEmotion("neutral")
        setEnergyLevel(0.5)
      }, 200)
    }
  }

  const getEmotionGradient = (emotion: string) => {
    switch (emotion) {
      case "excited":
        return "from-yellow-400 via-orange-500 to-red-500"
      case "passionate":
        return "from-pink-500 via-purple-500 to-indigo-500"
      case "confident":
        return "from-green-400 via-blue-500 to-purple-500"
      default:
        return "from-blue-400 via-cyan-500 to-teal-500"
    }
  }

  const getMessageTypeGradient = (type: string) => {
    switch (type) {
      case "intro":
        return "from-blue-500/15 to-cyan-500/15"
      case "passion":
        return "from-purple-500/15 to-pink-500/15"
      case "vision":
        return "from-green-500/15 to-emerald-500/15"
      case "cta":
        return "from-orange-500/15 to-red-500/15"
      case "pause":
        return "from-indigo-500/15 to-blue-500/15"
      default:
        return "from-blue-500/15 to-purple-500/15"
    }
  }

  return (
    <div className="relative flex flex-col items-center min-h-[400px]" ref={containerRef}>
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1],
              opacity: isNearMouse ? [0.2, 0.6, 0.2] : [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + element.id * 20}%`,
              top: `${10 + element.id * 15}%`,
              color: element.color,
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      {/* Mouse Proximity Indicator */}
      <AnimatePresence>
        {isNearMouse && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-blue-400/30 pointer-events-none"
            style={{
              width: "200px",
              height: "200px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Message Bubble with Smooth Transitions */}
      <AnimatePresence mode="wait">
        {(showMessage || showPauseMessage) && (
          <motion.div
            key={showPauseMessage ? "pause" : `message-${currentMessageIndex}`}
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.95,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: showPauseMessage ? 1 : messageOpacity,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
              filter: "blur(2px)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
              opacity: { duration: 0.4, ease: "easeOut" },
              filter: { duration: 0.3 },
            }}
            className="mb-8 relative z-20"
          >
            <motion.div
              className={`
                relative backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20
                bg-gradient-to-br ${getMessageTypeGradient(showPauseMessage ? pauseMessage.type : messages[currentMessageIndex]?.type)}
                max-w-sm text-center overflow-hidden
              `}
              animate={{
                boxShadow: showPauseMessage
                  ? [
                      "0 20px 40px rgba(79, 70, 229, 0.15)",
                      "0 25px 50px rgba(99, 102, 241, 0.2)",
                      "0 20px 40px rgba(79, 70, 229, 0.15)",
                    ]
                  : [
                      "0 20px 40px rgba(59, 130, 246, 0.15)",
                      "0 25px 50px rgba(139, 92, 246, 0.2)",
                      "0 20px 40px rgba(59, 130, 246, 0.15)",
                    ],
                scale: isTransitioning ? [1, 0.98, 1] : [1, 1.01, 1],
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                scale: { duration: isTransitioning ? 0.6 : 2, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              {/* Smooth background transition */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  background: showPauseMessage
                    ? [
                        "radial-gradient(circle at 50% 50%, #4f46e5 0%, transparent 70%)",
                        "radial-gradient(circle at 30% 70%, #6366f1 0%, transparent 70%)",
                        "radial-gradient(circle at 70% 30%, #4f46e5 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 50%, #4f46e5 0%, transparent 70%)",
                      ]
                    : [
                        "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 70%)",
                        "radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 20%, #ef4444 0%, transparent 70%)",
                        "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 70%)",
                      ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.p
                className="relative text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-sm"
                initial={{ opacity: 0, y: 3 }}
                animate={{
                  opacity: showPauseMessage ? 1 : messageOpacity,
                  y: 0,
                  scale: isTransitioning ? [1, 0.99, 1] : 1,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  scale: { duration: 0.4 },
                }}
              >
                {showPauseMessage ? pauseMessage.text : messages[currentMessageIndex]?.text}
              </motion.p>

              {/* Enhanced conversation progress indicator */}
              {!showPauseMessage && (
                <motion.div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {messages.map((_, index) => (
                    <motion.div
                      key={index}
                      className="w-1.5 h-1.5 rounded-full"
                      animate={{
                        backgroundColor:
                          index === currentMessageIndex
                            ? "#3b82f6"
                            : index < currentMessageIndex
                              ? "#10b981"
                              : "#d1d5db",
                        scale: index === currentMessageIndex ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 0.3,
                        scale: { duration: 1, repeat: index === currentMessageIndex ? Number.POSITIVE_INFINITY : 0 },
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {/* Enhanced floating message indicator */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-white/90 to-gray-100/90 shadow-lg flex items-center justify-center backdrop-blur-sm"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${getEmotionGradient(showPauseMessage ? pauseMessage.emotion : currentEmotion)}`}
                />
              </motion.div>

              {/* Enhanced speech tail with glow */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="w-6 h-6 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rotate-45 border-l border-t border-white/20"
                  animate={{
                    boxShadow: showPauseMessage
                      ? [
                          "0 0 15px rgba(79, 70, 229, 0.3)",
                          "0 0 25px rgba(99, 102, 241, 0.4)",
                          "0 0 15px rgba(79, 70, 229, 0.3)",
                        ]
                      : [
                          "0 0 15px rgba(59, 130, 246, 0.3)",
                          "0 0 25px rgba(139, 92, 246, 0.4)",
                          "0 0 15px rgba(59, 130, 246, 0.3)",
                        ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              {/* Enhanced pause message indicator */}
              {showPauseMessage && (
                <motion.div
                  className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl flex items-center justify-center"
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      "0 0 20px rgba(79, 70, 229, 0.4)",
                      "0 0 30px rgba(99, 102, 241, 0.6)",
                      "0 0 20px rgba(79, 70, 229, 0.4)",
                    ],
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                >
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Avatar with Smoother Emotion Transitions */}
      <motion.div
        className="relative cursor-pointer group"
        style={{
          scale,
          rotateX,
          rotateY,
          x: avatarX,
          y: avatarY,
          transformStyle: "preserve-3d",
        }}
        onClick={handleAvatarClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: isHovered ? [-20, -30, -20] : [0, -15, 0],
          rotateZ: isHovered ? [0, 3, -3, 0] : [0, 1, -1, 0],
        }}
        transition={{
          y: {
            duration: isHovered ? 2.5 : 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotateZ: {
            duration: isHovered ? 4 : 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      >
        {/* Enhanced Dynamic Energy Field */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: isHovered ? [1, 1.3, 1] : [1, 1.15, 1],
            opacity: isHovered ? [0.3, 0.7, 0.3] : [0.15, energyLevel * 0.6, 0.15],
          }}
          transition={{
            duration: isHovered ? 2 : 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            background: `conic-gradient(from 0deg, 
              ${
                currentEmotion === "excited"
                  ? "#f59e0b, #ef4444, #f59e0b"
                  : currentEmotion === "passionate"
                    ? "#ec4899, #8b5cf6, #ec4899"
                    : currentEmotion === "confident"
                      ? "#10b981, #3b82f6, #10b981"
                      : "#3b82f6, #8b5cf6, #3b82f6"
              })`,
            filter: isHovered ? "blur(20px)" : "blur(15px)",
          }}
        />

        {/* Enhanced Orbital Rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 rounded-full border border-white/8"
            style={{
              width: `${100 + ring * 20}%`,
              height: `${100 + ring * 20}%`,
              left: `${-ring * 10}%`,
              top: `${-ring * 10}%`,
            }}
            animate={{
              rotate: ring % 2 === 0 ? [0, 360] : [360, 0],
              opacity: isHovered ? [0.15, 0.4, 0.15] : [0.08, 0.25, 0.08],
              scale: isHovered ? [1, 1.03, 1] : 1,
            }}
            transition={{
              rotate: {
                duration: isHovered ? 12 + ring * 2 : 15 + ring * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY },
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
            }}
          />
        ))}

        {/* Main Avatar Container with Enhanced Effects */}
        <motion.div
          className="relative w-36 h-36 rounded-full p-1 shadow-2xl"
          style={{
            background: `conic-gradient(from 0deg, ${getEmotionGradient(currentEmotion).replace("from-", "").replace(" via-", ", ").replace(" to-", ", ")})`,
          }}
          animate={{
            boxShadow: isHovered
              ? [
                  "0 0 40px rgba(59, 130, 246, 0.4)",
                  "0 0 60px rgba(139, 92, 246, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.4)",
                ]
              : [
                  "0 0 30px rgba(59, 130, 246, 0.25)",
                  "0 0 45px rgba(139, 92, 246, 0.35)",
                  "0 0 30px rgba(59, 130, 246, 0.25)",
                ],
            scale: isTransitioning ? [1, 0.98, 1] : [1, 1.005, 1],
          }}
          transition={{
            boxShadow: { duration: isHovered ? 2.5 : 4, repeat: Number.POSITIVE_INFINITY },
            scale: { duration: isTransitioning ? 0.8 : 3, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden relative">
                {/* Avatar Content with Enhanced Hover Effects */}
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  animate={{
                    scale: isHovered ? [1, 1.06, 1] : showMessage || showPauseMessage ? [1, 1.03, 1] : [1, 1.01, 1],
                  }}
                  transition={{
                    duration: isHovered ? 1.5 : showMessage || showPauseMessage ? 1 : 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {/* Profile Image with Enhanced Effects */}
                  <motion.div
                    className="w-28 h-28 rounded-full overflow-hidden shadow-inner relative border-2 border-white/20"
                    animate={{
                      boxShadow: isHovered
                        ? [
                            "0 0 30px rgba(59, 130, 246, 0.5)",
                            "0 0 40px rgba(139, 92, 246, 0.6)",
                            "0 0 30px rgba(59, 130, 246, 0.5)",
                          ]
                        : currentEmotion === "excited"
                          ? [
                              "0 0 20px rgba(245, 158, 11, 0.4)",
                              "0 0 30px rgba(239, 68, 68, 0.5)",
                              "0 0 20px rgba(245, 158, 11, 0.4)",
                            ]
                          : currentEmotion === "passionate"
                            ? [
                                "0 0 20px rgba(236, 72, 153, 0.4)",
                                "0 0 30px rgba(139, 92, 246, 0.5)",
                                "0 0 20px rgba(236, 72, 153, 0.4)",
                              ]
                            : currentEmotion === "confident"
                              ? [
                                  "0 0 20px rgba(16, 185, 129, 0.4)",
                                  "0 0 30px rgba(59, 130, 246, 0.5)",
                                  "0 0 20px rgba(16, 185, 129, 0.4)",
                                ]
                              : [
                                  "0 0 15px rgba(59, 130, 246, 0.3)",
                                  "0 0 25px rgba(139, 92, 246, 0.4)",
                                  "0 0 15px rgba(59, 130, 246, 0.3)",
                                ],
                    }}
                    transition={{ duration: isHovered ? 2 : 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <motion.img
                      src="/avatar.jpg"
                      alt="Pragya's Avatar"
                      className="w-full h-full object-cover"
                      animate={{
                        scale: isHovered
                          ? [1, 1.08, 1]
                          : showMessage || showPauseMessage
                            ? [1, 1.04, 1]
                            : [1, 1.015, 1],
                        filter: isHovered
                          ? "brightness(1.1) saturate(1.3) contrast(1.05)"
                          : currentEmotion === "excited"
                            ? "brightness(1.08) saturate(1.15)"
                            : currentEmotion === "passionate"
                              ? "brightness(1.05) saturate(1.25) hue-rotate(8deg)"
                              : currentEmotion === "confident"
                                ? "brightness(1.08) saturate(1.1) hue-rotate(-3deg)"
                                : "brightness(1) saturate(1)",
                      }}
                      transition={{
                        scale: {
                          duration: isHovered ? 1.5 : showMessage || showPauseMessage ? 1 : 3,
                          repeat: Number.POSITIVE_INFINITY,
                        },
                        filter: { duration: 0.6, ease: "easeOut" },
                      }}
                    />

                    {/* Enhanced animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                        opacity: isHovered
                          ? [0, 0.4, 0]
                          : showMessage || showPauseMessage
                            ? [0, 0.25, 0]
                            : [0, 0.08, 0],
                      }}
                      transition={{
                        x: {
                          duration: isHovered ? 2.5 : 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: isHovered ? 1.5 : 2,
                          repeat: Number.POSITIVE_INFINITY,
                        },
                      }}
                    />

                    {/* Enhanced emotion-based color overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-full mix-blend-overlay"
                      animate={{
                        background: isHovered
                          ? "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)"
                          : currentEmotion === "excited"
                            ? "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)"
                            : currentEmotion === "passionate"
                              ? "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)"
                              : currentEmotion === "confident"
                                ? "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)"
                                : "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
                        opacity: isHovered ? 0.8 : showMessage || showPauseMessage ? 0.6 : 0.25,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Hover-specific effects */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            rotate: [0, 360],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                          }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            background:
                              "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.15), transparent)",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Enhanced Status Indicator */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 shadow-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${isActive ? "#10b981, #34d399" : "#6b7280, #9ca3af"})`,
                    }}
                    animate={{
                      scale: isHovered ? [1, 1.3, 1] : isActive ? [1, 1.15, 1] : 1,
                      boxShadow: isHovered
                        ? [
                            "0 0 20px rgba(16, 185, 129, 0.6)",
                            "0 0 30px rgba(16, 185, 129, 0.8)",
                            "0 0 20px rgba(16, 185, 129, 0.6)",
                          ]
                        : isActive
                          ? [
                              "0 0 15px rgba(16, 185, 129, 0.4)",
                              "0 0 25px rgba(16, 185, 129, 0.6)",
                              "0 0 15px rgba(16, 185, 129, 0.4)",
                            ]
                          : "0 0 8px rgba(107, 114, 128, 0.3)",
                    }}
                    transition={{
                      scale: {
                        duration: isHovered ? 1 : 1.5,
                        repeat: isHovered || isActive ? Number.POSITIVE_INFINITY : 0,
                      },
                      boxShadow: {
                        duration: isHovered ? 2 : 2.5,
                        repeat: isHovered || isActive ? Number.POSITIVE_INFINITY : 0,
                      },
                    }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full bg-white"
                      animate={{
                        opacity: isHovered ? [0.4, 1, 0.4] : isActive ? [0.6, 1, 0.6] : 0.8,
                      }}
                      transition={{
                        duration: isHovered ? 1 : 1.5,
                        repeat: isHovered || isActive ? Number.POSITIVE_INFINITY : 0,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Interactive Particles */}
        <AnimatePresence>
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: `hsl(${(i * 30) % 360}, 75%, 65%)`,
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.2, 0],
                    x: Math.cos((i * 30 * Math.PI) / 180) * (50 + Math.random() * 30),
                    y: Math.sin((i * 30 * Math.PI) / 180) * (50 + Math.random() * 30),
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Magnetic Field Visualization */}
        <AnimatePresence>
          {isNearMouse && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-blue-400/20"
                  style={{
                    width: `${130 + i * 25}%`,
                    height: `${130 + i * 25}%`,
                    left: `${-15 - i * 12.5}%`,
                    top: `${-15 - i * 12.5}%`,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Control Panel with Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 flex flex-col items-center gap-4"
      >
        {/* Conversation Progress Bar */}
        {interactionMode === "auto" && isActive && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="relative h-1 bg-white/10 dark:bg-gray-700/30 rounded-full overflow-hidden backdrop-blur-sm"
          >
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
              animate={{
                width: `${conversationProgress * 100}%`,
                boxShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.3)",
                  "0 0 20px rgba(16, 185, 129, 0.4)",
                  "0 0 10px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{
                width: { duration: 0.6, ease: "easeOut" },
                boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
            />
          </motion.div>
        )}

        {/* Control buttons row */}
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlayback}
            className="group relative p-4 rounded-2xl bg-white/8 dark:bg-gray-800/25 backdrop-blur-xl border border-white/15 dark:border-gray-700/30 shadow-xl hover:bg-white/12 dark:hover:bg-gray-700/35 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: ["0 8px 25px rgba(0,0,0,0.08)", "0 12px 35px rgba(0,0,0,0.12)", "0 8px 25px rgba(0,0,0,0.08)"],
            }}
            transition={{
              boxShadow: { duration: 4, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <motion.div animate={{ rotate: isActive ? 0 : 180 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              {isActive ? (
                <Pause className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Play className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.div>

            {/* Tooltip */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              initial={{ y: 5 }}
              whileHover={{ y: 0 }}
            >
              {isActive ? "Pause" : "Play"}
            </motion.div>
          </motion.button>

          {/* Status Display */}
          <motion.div
            className="px-6 py-3 rounded-2xl bg-white/8 dark:bg-gray-800/25 backdrop-blur-xl border border-white/15 dark:border-gray-700/30 shadow-xl"
            animate={{
              background: isActive
                ? "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(59, 130, 246, 0.08))"
                : "linear-gradient(135deg, rgba(107, 114, 128, 0.08), rgba(156, 163, 175, 0.08))",
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-3 h-3 rounded-full"
                animate={{
                  backgroundColor: isActive ? "#10b981" : "#6b7280",
                  scale: isActive ? [1, 1.2, 1] : 1,
                  boxShadow: isActive
                    ? [
                        "0 0 8px rgba(16, 185, 129, 0.4)",
                        "0 0 15px rgba(16, 185, 129, 0.6)",
                        "0 0 8px rgba(16, 185, 129, 0.4)",
                      ]
                    : "0 0 4px rgba(107, 114, 128, 0.3)",
                }}
                transition={{
                  scale: { duration: 1.5, repeat: isActive ? Number.POSITIVE_INFINITY : 0 },
                  boxShadow: { duration: 2.5, repeat: isActive ? Number.POSITIVE_INFINITY : 0 },
                }}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {showPauseMessage
                  ? "Ready to start!"
                  : interactionMode === "manual"
                    ? "Interactive Mode"
                    : isActive
                      ? "Speaking..."
                      : "Paused"}
              </span>
              <motion.div
                animate={{ rotate: isActive ? 360 : 0 }}
                transition={{ duration: 3, repeat: isActive ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Chat Button */}
          <motion.button
            onClick={handleAvatarClick}
            className="group relative p-4 rounded-2xl bg-white/8 dark:bg-gray-800/25 backdrop-blur-xl border border-white/15 dark:border-gray-700/30 shadow-xl hover:bg-white/12 dark:hover:bg-gray-700/35 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: ["0 8px 25px rgba(0,0,0,0.08)", "0 12px 35px rgba(0,0,0,0.12)", "0 8px 25px rgba(0,0,0,0.08)"],
            }}
            transition={{
              boxShadow: { duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1.5 },
            }}
          >
            <MessageSquare className="w-5 h-5 text-gray-700 dark:text-gray-300" />

            {/* Tooltip */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              initial={{ y: 5 }}
              whileHover={{ y: 0 }}
            >
              Chat
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Progress Indicators */}
      {interactionMode === "auto" && isActive && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-6 flex gap-2"
        >
          {messages.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor:
                  index === currentMessageIndex ? "#3b82f6" : index < currentMessageIndex ? "#10b981" : "#6b7280",
                scale: index === currentMessageIndex ? [1, 1.2, 1] : 1,
                boxShadow:
                  index === currentMessageIndex
                    ? [
                        "0 0 8px rgba(59, 130, 246, 0.4)",
                        "0 0 15px rgba(59, 130, 246, 0.6)",
                        "0 0 8px rgba(59, 130, 246, 0.4)",
                      ]
                    : "none",
              }}
              transition={{
                duration: 0.4,
                scale: { duration: 1.5, repeat: index === currentMessageIndex ? Number.POSITIVE_INFINITY : 0 },
                boxShadow: { duration: 2.5, repeat: index === currentMessageIndex ? Number.POSITIVE_INFINITY : 0 },
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Enhanced Interaction Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          delay: 5,
        }}
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
          animate={{
            boxShadow: ["0 4px 12px rgba(0,0,0,0.08)", "0 6px 20px rgba(0,0,0,0.12)", "0 4px 12px rgba(0,0,0,0.08)"],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          ✨ Hover for magic • Click to interact • Move mouse around
        </motion.p>
      </motion.div>
    </div>
  )
}
