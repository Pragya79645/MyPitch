"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  const [interactionMode, setInteractionMode] = useState<"auto" | "manual">("auto")
  const [currentEmotion, setCurrentEmotion] = useState<"neutral" | "excited" | "confident" | "passionate">("neutral")
  const containerRef = useRef<HTMLDivElement>(null)
  const [showPauseMessage, setShowPauseMessage] = useState(false)
  const [conversationProgress, setConversationProgress] = useState(0)
  const messageTimerRef = useRef<NodeJS.Timeout | null>(null)

  const messages: Message[] = [
    {
      id: 1,
      text: "Hi! I'm Pragya, a passionate developer and community builder.",
      duration: 3000,
      type: "intro",
      emotion: "excited",
    },
    {
      id: 2,
      text: "I believe technology should empower everyone, especially students.",
      duration: 3000,
      type: "passion",
      emotion: "passionate",
    },
    {
      id: 3,
      text: "As a Google Student Ambassador, I want to bridge innovation with education.",
      duration: 3000,
      type: "vision",
      emotion: "confident",
    },
    {
      id: 4,
      text: "Ready to explore my journey? Let's build the future together!",
      duration: 3000,
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

  // Fixed message sequence with proper timing
  useEffect(() => {
    // Clear any existing timer
    if (messageTimerRef.current) {
      clearTimeout(messageTimerRef.current)
    }

    if (!isActive || interactionMode === "manual") {
      if (!isActive && !showMessage && !showPauseMessage) {
        setShowPauseMessage(true)
        setConversationProgress(0)
      }
      return
    }

    setShowPauseMessage(false)

    const startMessageSequence = () => {
      let messageIndex = 0

      const showNextMessage = () => {
        if (messageIndex >= messages.length) {
          // Reset to beginning
          messageIndex = 0
        }

        const message = messages[messageIndex]
        
        // Update state for new message
        setCurrentMessageIndex(messageIndex)
        setCurrentEmotion(message.emotion)
        setConversationProgress((messageIndex + 1) / messages.length)
        setShowMessage(true)

        // Schedule hiding this message and showing next
        messageTimerRef.current = setTimeout(() => {
          setShowMessage(false)
          
          // Brief pause before next message
          messageTimerRef.current = setTimeout(() => {
            messageIndex++
            showNextMessage()
          }, 300)
        }, 3000) // Show each message for exactly 3 seconds
      }

      // Start the sequence
      showNextMessage()
    }

    // Start with a small delay
    messageTimerRef.current = setTimeout(startMessageSequence, 500)

    // Cleanup function
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current)
      }
    }
  }, [isActive, interactionMode, messages])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current)
      }
    }
  }, [])

  const handleAvatarClick = () => {
    if (!isActive) {
      // If paused, start playback
      setShowPauseMessage(false)
      setIsActive(true)
      setInteractionMode("auto")
      setCurrentMessageIndex(0)
      setCurrentEmotion("neutral")
      return
    }

    if (interactionMode === "auto") {
      setInteractionMode("manual")
    }

    // Show next message manually
    const nextIndex = (currentMessageIndex + 1) % messages.length
    const nextMessage = messages[nextIndex]

    setCurrentMessageIndex(nextIndex)
    setCurrentEmotion(nextMessage.emotion)
    setShowMessage(true)
    setConversationProgress((nextIndex + 1) / messages.length)

    // Hide after 3 seconds
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  const togglePlayback = () => {
    if (!isActive) {
      // Starting playback
      setShowPauseMessage(false)
      setIsActive(true)
      setInteractionMode("auto")
      setCurrentMessageIndex(0)
      setCurrentEmotion("neutral")
    } else {
      // Pausing
      setIsActive(false)
      setShowMessage(false)
      setShowPauseMessage(true)
      setCurrentEmotion("neutral")
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
      {/* Simplified Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute opacity-20"
            animate={{
              x: [0, 50, -25, 0],
              y: [0, -40, 25, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
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

      {/* Message Bubble */}
      <AnimatePresence mode="wait">
        {(showMessage || showPauseMessage) && (
          <motion.div
            key={showPauseMessage ? "pause" : `message-${currentMessageIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-8 relative z-20"
          >
            <div
              className={`
                relative backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20
                bg-gradient-to-br ${getMessageTypeGradient(showPauseMessage ? pauseMessage.type : messages[currentMessageIndex]?.type)}
                max-w-sm text-center
              `}
            >
              <p className="relative text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-sm">
                {showPauseMessage ? pauseMessage.text : messages[currentMessageIndex]?.text}
              </p>

              {/* Conversation progress indicator */}
              {!showPauseMessage && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {messages.map((_, index) => (
                    <div
                      key={index}
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor:
                          index === currentMessageIndex
                            ? "#3b82f6"
                            : index < currentMessageIndex
                              ? "#10b981"
                              : "#d1d5db",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Emotion indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${getEmotionGradient(showPauseMessage ? pauseMessage.emotion : currentEmotion)} transition-all duration-500`}
                />
              </div>

              {/* Speech tail */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rotate-45 border-l border-t border-white/20" />
              </div>

              {/* Pause message indicator */}
              {showPauseMessage && (
                <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simplified Avatar - No movement or hover effects */}
      <div className="relative cursor-pointer" onClick={handleAvatarClick}>
        {/* Main Avatar Container */}
        <div
          className="relative w-36 h-36 rounded-full p-1 shadow-xl transition-all duration-500"
          style={{
            background: `conic-gradient(from 0deg, ${getEmotionGradient(currentEmotion).replace("from-", "").replace(" via-", ", ").replace(" to-", ", ")})`,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden relative">
                {/* Avatar Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Profile Image */}
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-inner relative border-2 border-white/20">
                    <img
                      src="/avatar.jpg"
                      alt="Pragya's Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Status Indicator */}
                  <div
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 shadow-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${isActive ? "#10b981, #34d399" : "#6b7280, #9ca3af"})`,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 flex flex-col items-center gap-4"
      >
        {/* Conversation Progress Bar */}
        {interactionMode === "auto" && isActive && (
          <div className="relative h-1 w-48 bg-white/10 dark:bg-gray-700/30 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
              animate={{ width: `${conversationProgress * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        )}

        {/* Control buttons */}
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayback}
            className="p-4 rounded-2xl bg-white/8 dark:bg-gray-800/25 backdrop-blur-xl border border-white/15 dark:border-gray-700/30 shadow-xl hover:bg-white/12 dark:hover:bg-gray-700/35 transition-all duration-300"
          >
            {isActive ? (
              <Pause className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Play className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Status Display */}
          <div className="px-6 py-3 rounded-2xl bg-white/8 dark:bg-gray-800/25 backdrop-blur-xl border border-white/15 dark:border-gray-700/30 shadow-xl">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: isActive ? "#10b981" : "#6b7280" }}
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
              <Zap className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* Chat Button */}
          <button
            onClick={handleAvatarClick}
            className="p-4 rounded-2xl bg-white/8 dark:bg-gray-800/25 backdrop-blur-xl border border-white/15 dark:border-gray-700/30 shadow-xl hover:bg-white/12 dark:hover:bg-gray-700/35 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </motion.div>

        {/* Progress Indicators */}
        {interactionMode === "auto" && isActive && (
          <div className="mt-6 flex gap-2">
            {messages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    index === currentMessageIndex ? "#3b82f6" : index < currentMessageIndex ? "#10b981" : "#6b7280",
                }}
              />
            ))}
          </div>
        )}

      {/* Simple Interaction Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 5 }}
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm text-black dark:text-black bg-white/80 dark:bg-black px-4 py-4 rounded-full  border border-black dark:border-black">
          ✨ Click to interact
        </p>
      </motion.div>
    </div>
  )
}