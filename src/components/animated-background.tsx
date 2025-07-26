"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #a7f3d0 0%, #6ee7b7 25%, #34d399 50%, #10b981 75%, #059669 100%)",
            "linear-gradient(135deg, #6ee7b7 0%, #34d399 25%, #10b981 50%, #059669 75%, #047857 100%)",
            "linear-gradient(225deg, #34d399 0%, #10b981 25%, #059669 50%, #047857 75%, #065f46 100%)",
            "linear-gradient(315deg, #10b981 0%, #059669 25%, #047857 50%, #065f46 75%, #064e3b 100%)",
            "linear-gradient(45deg, #a7f3d0 0%, #6ee7b7 25%, #34d399 50%, #10b981 75%, #059669 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Moving Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(167, 243, 208, 0.8) 0%, rgba(110, 231, 183, 0.4) 50%, transparent 100%)",
        }}
        animate={{
          x: [-100, window.innerWidth + 100],
          y: [100, 200, 50, 150],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(52, 211, 153, 0.6) 0%, rgba(16, 185, 129, 0.3) 50%, transparent 100%)",
        }}
        animate={{
          x: [window.innerWidth + 100, -100],
          y: [300, 100, 400, 200],
          scale: [0.8, 1.3, 0.9, 1.1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(5, 150, 105, 0.4) 50%, transparent 100%)",
        }}
        animate={{
          x: [200, window.innerWidth - 200, 100],
          y: [500, 100, 600, 300],
          scale: [1.1, 0.7, 1.4, 1],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 10,
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute w-32 h-32 opacity-15"
        style={{
          background: "linear-gradient(45deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
        animate={{
          x: [50, window.innerWidth - 50],
          y: [150, 400, 100],
          rotate: [0, 360],
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 opacity-10"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
        animate={{
          x: [window.innerWidth - 100, 100],
          y: [250, 500, 200],
          rotate: [360, 0],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 70% 30% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 45,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 15,
        }}
      />

      {/* Subtle Wave Patterns */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3e%3cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23ffffff'/%3e%3cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23ffffff'/%3e%3cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff'/%3e%3c/svg%3e")`,
          backgroundSize: "1200px 120px",
          backgroundRepeat: "repeat-x",
        }}
        animate={{
          backgroundPositionX: ["0px", "1200px"],
        }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Particle-like dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Mesh Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(167, 243, 208, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `
              radial-gradient(circle at 20% 80%, rgba(167, 243, 208, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
            `
              radial-gradient(circle at 80% 20%, rgba(167, 243, 208, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(52, 211, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
            `
              radial-gradient(circle at 60% 60%, rgba(167, 243, 208, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(52, 211, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
            `
              radial-gradient(circle at 20% 80%, rgba(167, 243, 208, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
          ],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
