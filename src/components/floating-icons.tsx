"use client"

import { motion } from "framer-motion"
import { Brain, Laptop, Zap, Code, Lightbulb, Sparkles } from "lucide-react"

const icons = [
  { Icon: Brain, emoji: "🧠" },
  { Icon: Laptop, emoji: "💻" },
  { Icon: Zap, emoji: "⚡" },
  { Icon: Code, emoji: "👨‍💻" },
  { Icon: Lightbulb, emoji: "💡" },
  { Icon: Sparkles, emoji: "✨" },
]

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20 dark:opacity-10"
          initial={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          animate={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
            rotate: 360,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <span className="block">{item.emoji}</span>
        </motion.div>
      ))}
    </div>
  )
}
