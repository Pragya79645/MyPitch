"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("Initializing...")

  useEffect(() => {
    const loadingTexts = [
      "Initializing...",
      "Loading Google magic...",
      "Preparing pitch deck...",
      "Booting Pragya&apos;s Pitch...",
      "Almost ready!",
    ];
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2

        // Update text based on progress
        if (newProgress < 20) setCurrentText(loadingTexts[0])
        else if (newProgress < 40) setCurrentText(loadingTexts[1])
        else if (newProgress < 60) setCurrentText(loadingTexts[2])
        else if (newProgress < 80) setCurrentText(loadingTexts[3])
        else setCurrentText(loadingTexts[4])

        return newProgress > 100 ? 100 : newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-600 via-red-500 to-green-500 flex items-center justify-center z-50"
    >
      <div className="text-center text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full mx-auto mb-6"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold mb-4"
          >
            Pragya&apos;s Pitch
          </motion.h1>

          <motion.p key={currentText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl mb-8">
            {currentText.replace(/'/g, `&apos;`)}
          </motion.p>
        </motion.div>

        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4">
            <motion.div
              className="bg-white rounded-full h-2"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-sm opacity-80">{progress}% Complete</p>
        </div>
      </div>
    </motion.div>
  )
}
