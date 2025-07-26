"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"

interface SkitFrame {
  id: number
  title: string
  tool: string
  toolIcon: string
  toolColor: string
  frames: Array<{
    character: string
    emoji: string
    dialogue: string
    position: "left" | "right"
    isYou?: boolean
  }>
  punchline: string
  background: string
}

const developerSkits: SkitFrame[] = [
  {
    id: 1,
    title: "The Hacker Who Forgot Auth",
    tool: "Firebase Auth",
    toolIcon: "🔥",
    toolColor: "from-orange-500 to-red-500",
    frames: [
      {
        character: "Teammate",
        emoji: "😅",
        dialogue: "Let's skip login, it's just a demo.",
        position: "left",
      },
      {
        character: "You",
        emoji: "😌",
        dialogue: "Firebase Auth would like a word...",
        position: "right",
        isYou: true,
      },
    ],
    punchline: "Secure, fast, production-ready — just like a GDSA project should be.",
    background: "from-gray-900 via-orange-900/20 to-red-900/20",
  },
  {
    id: 2,
    title: "Gemini vs Deadline",
    tool: "Gemini AI",
    toolIcon: "✨",
    toolColor: "from-blue-400 to-purple-500",
    frames: [
      {
        character: "Friend",
        emoji: "😰",
        dialogue: "I have 2 hours left and 0 ideas!",
        position: "left",
      },
      {
        character: "You",
        emoji: "🧠",
        dialogue: "Hey Gemini, give 3 hackathon ideas using AI + sustainability.",
        position: "right",
        isYou: true,
      },
    ],
    punchline: "Deadlines fear me. Gemini feeds me.",
    background: "from-gray-900 via-blue-900/20 to-purple-900/20",
  },
  {
    id: 3,
    title: "Crash? I Deploy.",
    tool: "Firebase Hosting",
    toolIcon: "🚀",
    toolColor: "from-green-500 to-blue-500",
    frames: [
      {
        character: "Panicked Dev",
        emoji: "😱",
        dialogue: "Server crashed mid-demo?!",
        position: "left",
      },
      {
        character: "You",
        emoji: "😎",
        dialogue: "I don't deploy panic. I deploy with Firebase Hosting.",
        position: "right",
        isYou: true,
      },
    ],
    punchline: "And GCP logs say it was never even down. Boom.",
    background: "from-gray-900 via-green-900/20 to-blue-900/20",
  },
  {
    id: 4,
    title: "Debug Detective",
    tool: "GCP Logging",
    toolIcon: "🔍",
    toolColor: "from-yellow-500 to-orange-500",
    frames: [
      {
        character: "Friend",
        emoji: "🤔",
        dialogue: "There's a bug. I can feel it. But WHERE?!",
        position: "left",
      },
      {
        character: "You",
        emoji: "🕵️",
        dialogue: "Let's ask Firebase Crashlytics.",
        position: "right",
        isYou: true,
      },
    ],
    punchline: "Detect bugs like Batman. Fix them like a GDSA.",
    background: "from-gray-900 via-yellow-900/20 to-orange-900/20",
  },
  {
    id: 5,
    title: "The Global App",
    tool: "Firebase + GCP",
    toolIcon: "🌐",
    toolColor: "from-cyan-500 to-blue-500",
    frames: [
      {
        character: "You",
        emoji: "🌍",
        dialogue: "One app. Many languages.",
        position: "left",
        isYou: true,
      },
      {
        character: "System",
        emoji: "⚡",
        dialogue: "Auto-translations kick in, backend scales per region",
        position: "right",
      },
    ],
    punchline: "From Delhi to Denmark — scale with Firebase & GCP.",
    background: "from-gray-900 via-cyan-900/20 to-blue-900/20",
  },
  {
    id: 6,
    title: "Project Analytics Level: Pro",
    tool: "Firebase Analytics",
    toolIcon: "📈",
    toolColor: "from-pink-500 to-red-500",
    frames: [
      {
        character: "Student",
        emoji: "🤷",
        dialogue: "Yeah, I just launch and hope for the best.",
        position: "left",
      },
      {
        character: "You",
        emoji: "📊",
        dialogue: "I measure user retention, latency, even device heat maps.",
        position: "right",
        isYou: true,
      },
    ],
    punchline: "Real devs check Firebase Analytics. Not vibes.",
    background: "from-gray-900 via-pink-900/20 to-red-900/20",
  },
  {
    id: 7,
    title: "Gemini Writes Code. I Make It Magic.",
    tool: "Gemini + Flutter",
    toolIcon: "🤖",
    toolColor: "from-indigo-500 to-purple-500",
    frames: [
      {
        character: "You",
        emoji: "🎨",
        dialogue: "Gemini, build me a Flutter app with Firebase backend.",
        position: "left",
        isYou: true,
      },
      {
        character: "Gemini",
        emoji: "✨",
        dialogue: "Code generates live → you tweak UI → deploy.",
        position: "right",
      },
    ],
    punchline: "AI doesn't replace devs. It levels them up.",
    background: "from-gray-900 via-indigo-900/20 to-purple-900/20",
  },
]

export default function DeveloperSkitsShowcase() {
  const [activeSkitIndex, setActiveSkitIndex] = useState(0)
  const [geminiGlow, setGeminiGlow] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // })

  // Check for Gemini-related skits
  useEffect(() => {
    const currentSkit = developerSkits[activeSkitIndex]
    if (currentSkit?.tool.includes("Gemini")) {
      setGeminiGlow(true)
      const timer = setTimeout(() => setGeminiGlow(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [activeSkitIndex])

  return (
    <section ref={containerRef} className="py-20 bg-gray-900 overflow-hidden relative">
      {/* Floating Gemini Assistant */}
      <motion.div
        className={`fixed top-1/2 right-8 z-50 ${geminiGlow ? "animate-bounce" : ""}`}
        animate={{
          scale: geminiGlow ? [1, 1.2, 1] : 1,
          rotate: geminiGlow ? [0, 10, -10, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center shadow-lg ${geminiGlow ? "shadow-blue-400/50 shadow-2xl" : ""}`}
        >
          <Sparkles className="h-8 w-8 text-white" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Developer{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Skits
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real dev problems. Google-powered solutions. Told through fun, scroll-triggered comic strips.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Scroll Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {developerSkits.map((skit, index) => (
              <SkitCard
                key={skit.id}
                skit={skit}
                index={index}
                isActive={activeSkitIndex === index}
                onInView={() => setActiveSkitIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Stack Layout */}
        <div className="lg:hidden space-y-8">
          {developerSkits.map((skit, index) => (
            <MobileSkitCard key={skit.id} skit={skit} index={index} />
          ))}
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 space-x-2"
        >
          {developerSkits.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSkitIndex === index ? "bg-blue-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkitCard({
  skit,
  index,
  isActive,
  onInView,
}: {
  skit: SkitFrame
  index: number
  isActive: boolean
  onInView: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    if (inView) {
      onInView()
    }
  }, [inView, onInView])

  return (
    <motion.div
      ref={ref}
      className="sticky top-20 mb-8"
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div
        className={`relative max-w-4xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 ${
          isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
        }`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skit.background}`} />

        {/* Tool Badge */}
        <motion.div
          className={`absolute top-4 right-4 bg-gradient-to-r ${skit.toolColor} rounded-full px-4 py-2 flex items-center gap-2 shadow-lg`}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <span className="text-2xl">{skit.toolIcon}</span>
          <span className="text-white font-semibold text-sm">{skit.tool}</span>
        </motion.div>

        <div className="relative p-8">
          {/* Title */}
          <motion.h3
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : -20 }}
            transition={{ delay: 0.2 }}
          >
            {skit.title}
          </motion.h3>

          {/* Comic Frames */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {skit.frames.map((frame, frameIndex) => (
              <motion.div
                key={frameIndex}
                className={`flex ${frame.position === "right" ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, x: frame.position === "left" ? -50 : 50 }}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  x: isActive ? 0 : frame.position === "left" ? -50 : 50,
                }}
                transition={{ delay: 0.4 + frameIndex * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div
                  className={`relative max-w-sm ${frame.isYou ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-800"} rounded-2xl p-6 shadow-xl`}
                >
                  {/* Character */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span
                      className="text-3xl"
                      animate={{ rotate: isActive ? [0, 10, -10, 0] : 0 }}
                      transition={{ duration: 0.5, delay: frameIndex * 0.1 }}
                    >
                      {frame.emoji}
                    </motion.span>
                    <span className={`font-semibold ${frame.isYou ? "text-white" : "text-gray-300"}`}>
                      {frame.character}
                    </span>
                  </div>

                  {/* Speech Bubble */}
                  <div className={`${frame.isYou ? "text-white" : "text-gray-100"} leading-relaxed`}>
                    {frame.dialogue}
                  </div>

                  {/* Speech Bubble Tail */}
                  <div
                    className={`absolute ${frame.position === "left" ? "-right-2" : "-left-2"} top-8 w-4 h-4 ${frame.isYou ? "bg-purple-600" : "bg-gray-800"} rotate-45`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Punchline */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 20 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 inline-block shadow-lg">
              <p className="text-gray-900 font-bold text-lg">{skit.punchline}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function MobileSkitCard({ skit, index }: { skit: SkitFrame; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden"
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skit.background}`} />

      {/* Tool Badge */}
      <div
        className={`absolute top-4 right-4 bg-gradient-to-r ${skit.toolColor} rounded-full px-3 py-1 flex items-center gap-1 shadow-lg z-10`}
      >
        <span className="text-lg">{skit.toolIcon}</span>
        <span className="text-white font-semibold text-xs">{skit.tool}</span>
      </div>

      <div className="relative p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center pr-20">{skit.title}</h3>

        {/* Frames - Vertical Stack on Mobile */}
        <div className="space-y-4 mb-6">
          {skit.frames.map((frame, frameIndex) => (
            <motion.div
              key={frameIndex}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: frameIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`relative ${frame.isYou ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-800"} rounded-xl p-4 max-w-xs shadow-lg`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{frame.emoji}</span>
                  <span className={`font-semibold text-sm ${frame.isYou ? "text-white" : "text-gray-300"}`}>
                    {frame.character}
                  </span>
                </div>
                <p className={`${frame.isYou ? "text-white" : "text-gray-100"} text-sm leading-relaxed`}>
                  {frame.dialogue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4 inline-block shadow-lg">
            <p className="text-gray-900 font-bold text-sm">{skit.punchline}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
