"use client"

import { type Dispatch, type SetStateAction, useState } from "react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { RotateCcw, Heart, X } from "lucide-react"
import DottedButton from "./btn"

type Card = {
  id: number
  url: string
  title: string
  description: string
  category: string
  details: string
  achievement: string
}

const cardData: Card[] = [
  {
    id: 1,
    url: "/tank.jpg",
    title: "Leading My Team to Build a Prototype",
    category: "Leadership . Solve",
    description: "Guiding Vision Into Execution",
    details:
      "As team lead, mentored and guided peers to build a solution prototype, ensuring design thinking and task delegation.",
    achievement: "Successfully delivered a working prototype through cross-functional coordination, reflecting leadership potential.",
  },

  {
    id: 4,
    url: "port.jpg",
    title: "2nd Place at Debug Quest & 1st Place Portfolio Contest",
    category: "Development",
    description: "Attention to Detail + Creative Storytelling",
    details:
      "Secured second place in a dual contest testing debugging accuracy and portfolio presentation, hosted by GDG RCCIIT.",
    achievement: "Demonstrated precision in debugging and creativity in showcasing personal projects effectively.",
  },
  {
    id: 5,
    url: "softw.jpg",
    title: "Website Development Program",
    category: "Web . Build",
    description: "Full-Stack Skill Building",
    details:
      "Participated in a website-building contest as part of a software development program, focusing on frontend design, backend logic, and UI/UX principles.",
    achievement: "Developed a fully functional web application, honing technical and collaboration skills.",
  },
  {
    id: 6,
    url: "bin.jpg",
    title: "2nd Place – Hackathon @ KGEC",
    category: "Hack . 2nd",
    description: "Innovating Under Pressure",
    details:
      "Secured 2nd place in a 24-hour hackathon hosted by Kalyani Government Engineering College, tackling real-world challenges with creative prototyping.",
    achievement: "Recognized for effective teamwork, time management, and turning ideas into action.",
  },
  {
    id: 7,
    url: "gdg.jpg",
    title: "GDG DevFest Kolkata",
    category: "Learn . Network",
    description: "Exploring the Larger Developer Ecosystem",
    details:
      "Participated in GDG DevFest Kolkata, gaining insights from top-tier developers and understanding Google's broader developer ecosystem.",
    achievement: "Built valuable connections and returned with practical inspiration to implement in student-led tech initiatives.",
  },
  {
    id: 8,
    url: "chain.jpg",
    title: "Organizing Blockchain Day",
    category: "Organize . Web3",
    description: "Community Building in Web3",
    details:
      "Played a core role in the organizing team for Blockchain Day, facilitating awareness and learning around decentralized technologies.",
    achievement: "Helped streamline event coordination and session planning, contributing to a successful turnout and learning experience.",
  },
  {
    id: 9,
    url: "hwh.jpg",
    title: "Promoting Hello World Hacks",
    category: "Outreach.Team",
    description: "Tech Team Outreach & Engagement",
    details:
      "As part of the Tech team, led the college-wide promotion campaign for Hello World Hacks, fostering collaboration between institutions.",
    achievement: "Successfully engaged multiple colleges, boosting hackathon participation and enhancing community engagement.",
  },
  {
    id: 10,
    url: "ign.jpg",
    title: "Tech-Preneur Pitch Presentation",
    category: "Tech . Pitch",
    description: "Real-World Impact Through Innovation",
    details:
      "Presented a tech-driven entrepreneurial solution addressing a real-world issue, combining analytical problem-solving with public speaking and leadership.",
    achievement: "Initiated a practical, scalable solution – demonstrating my readiness to lead tech communities and inspire innovation.",
  },
]

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData)
  const [lastDirection, setLastDirection] = useState<"left" | "right" | null>(null)

  const resetCards = () => {
    setCards(cardData)
    setLastDirection(null)
  }

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' strokeWidth='2' stroke='%236366f1'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
          
            <div><DottedButton /></div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Swipe through the key moments and experiences that shaped my path as a developer, community builder, and
            future Google Student Ambassador
          </p>

          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Swipe Cards Container */}
          <div className="w-full lg:flex-1 flex justify-center order-1">
            <div className="relative">
              {/* Cards Stack */}
              <div className="relative w-72 sm:w-80 lg:w-96 perspective-1000" style={{ height: 'clamp(400px, 60vw, 500px)' }}>
                {cards.length === 0 ? (
                  // Modern Journey Complete State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative max-w-md w-full px-4">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
                        <svg className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] opacity-20 blur-[1.5px]" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="trophyGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#6366f1" />
                              <stop offset="0.5" stopColor="#a21caf" />
                              <stop offset="1" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                          <circle cx="40" cy="40" r="36" fill="url(#trophyGrad)" opacity="0.15" />
                          <path d="M40 60c-7 0-12-5-12-12V28h24v20c0 7-5 12-12 12Z" fill="url(#trophyGrad)" />
                          <rect x="32" y="62" width="16" height="6" rx="2" fill="url(#trophyGrad)" />
                          <path d="M28 28c-6 0-10 4-10 10 0 5 4 9 9 10M52 28c6 0 10 4 10 10 0 5-4 9-9 10" stroke="#a21caf" strokeWidth="2" />
                          <circle cx="20" cy="20" r="2" fill="#facc15" />
                          <circle cx="60" cy="18" r="1.5" fill="#f472b6" />
                          <circle cx="65" cy="35" r="1.2" fill="#06b6d4" />
                        </svg>
                      </div>
                      <div className="relative z-10 rounded-3xl bg-white/70 dark:bg-gray-900/80 backdrop-blur-2xl border-2 border-transparent bg-clip-padding p-8 sm:p-10 shadow-2xl flex flex-col items-center text-center overflow-hidden" style={{ borderImage: 'linear-gradient(90deg, #6366f1 0%, #a21caf 50%, #06b6d4 100%) 1' }}>
                        <div className="mb-2 flex items-center justify-center">
                          <svg className="w-12 h-12 sm:w-16 sm:h-16 animate-bounce-slow" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="trophyGrad2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366f1" />
                                <stop offset="0.5" stopColor="#a21caf" />
                                <stop offset="1" stopColor="#06b6d4" />
                              </linearGradient>
                            </defs>
                            <circle cx="24" cy="24" r="22" fill="url(#trophyGrad2)" opacity="0.13" />
                            <path d="M24 36c-4.2 0-7.2-3-7.2-7.2V16h14.4v12.8c0 4.2-3 7.2-7.2 7.2Z" fill="url(#trophyGrad2)" />
                            <rect x="19.2" y="37.2" width="9.6" height="3.6" rx="1.5" fill="url(#trophyGrad2)" />
                            <path d="M16 16c-3.6 0-6 2.4-6 6 0 3 2.4 5.4 5.4 6M32 16c3.6 0 6 2.4 6 6 0 3-2.4 5.4-5.4 6" stroke="#a21caf" strokeWidth="1.2" />
                            <circle cx="10" cy="10" r="1.2" fill="#facc15" />
                            <circle cx="36" cy="9" r="1" fill="#f472b6" />
                            <circle cx="39" cy="19" r="0.8" fill="#06b6d4" />
                          </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-lg">Journey Complete!</h3>
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 font-medium mb-6 leading-relaxed drop-shadow">
                          You've explored my entire journey.<br />Ready to build something amazing together?
                        </p>
                        <button
                          onClick={resetCards}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-base sm:text-lg"
                        >
                          <RotateCcw className="w-5 h-5" />
                          Restart Journey
                        </button>
                        {/* Decorative confetti dots */}
                        <div className="absolute bottom-2 left-4 flex gap-1 opacity-60">
                          <span className="w-2 h-2 rounded-full bg-indigo-400" />
                          <span className="w-2 h-2 rounded-full bg-purple-400" />
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        </div>
                        <div className="absolute bottom-2 right-4 flex gap-1 opacity-60">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="w-2 h-2 rounded-full bg-indigo-400" />
                          <span className="w-2 h-2 rounded-full bg-purple-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  cards.map((card, index) => (
                    <Card
                      key={card.id}
                      card={card}
                      index={index}
                      cards={cards}
                      setCards={setCards}
                      setLastDirection={setLastDirection}
                      isTop={index === cards.length - 1}
                    />
                  ))
                )}
              </div>

              {/* Swipe Instructions */}
              {cards.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-12 sm:-bottom-14 left-1/2 transform -translate-x-1/2 text-center z-20"
                >
                  <div className="relative inline-block">
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853] blur-[2px] opacity-60 animate-pulse" style={{ filter: 'blur(4px)' }} />
                    <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-1.5 sm:py-2.5 shadow-xl border-2 border-transparent bg-clip-padding" style={{ borderImage: 'linear-gradient(90deg, #4285F4 0%, #FBBC05 50%, #34A853 100%) 1' }}>
                      <div className="flex items-center justify-center gap-2">
                        <span className="hidden sm:inline text-sm sm:text-base font-extrabold text-[#4285F4] drop-shadow">Swipe</span>
                        <span className="inline-flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce-x" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="arrowGrad" x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4285F4" />
                                <stop offset="0.5" stopColor="#FBBC05" />
                                <stop offset="1" stopColor="#34A853" />
                              </linearGradient>
                            </defs>
                            <path d="M6 16h18M20 10l6 6-6 6" stroke="url(#arrowGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="hidden sm:inline text-sm sm:text-base font-extrabold text-[#34A853] drop-shadow">to explore</span>
                      </div>
                      <span className="block sm:hidden text-xs font-bold text-[#4285F4] mt-1">Swipe <span className="text-[#34A853]">→</span></span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Information Panel */}
          <div className="w-full lg:flex-1 lg:max-w-lg space-y-4 sm:space-y-6 order-2">
            {/* Current Card Info */}
            {cards.length > 0 && (
              <motion.div
                key={cards[cards.length - 1]?.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative rounded-3xl bg-white/70 dark:bg-gray-900/80 backdrop-blur-2xl border-2 border-transparent bg-clip-padding p-7 sm:p-10 shadow-2xl flex flex-col gap-4 sm:gap-6 overflow-hidden" style={{ borderImage: 'linear-gradient(90deg, #6366f1 0%, #a21caf 50%, #06b6d4 100%) 1' }}
              >
                {/* Gradient accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1.5 rounded-full bg-gradient-to-b from-[#4285F4] via-[#EA4335] to-[#34A853] blur-[1px] opacity-80" />
                {/* Category and Title */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#EA4335] shadow-md"></div>
                  <span className="text-xs sm:text-sm font-bold text-[#4285F4] dark:text-[#8AB4F8] uppercase tracking-wider drop-shadow">{cards[cards.length - 1]?.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853] bg-clip-text text-transparent mb-1 tracking-tight drop-shadow-lg">{cards[cards.length - 1]?.title}</h3>
                {/* Details */}
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-2 drop-shadow">
                  {cards[cards.length - 1]?.details}
                </p>
                {/* Achievement */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#E3F2FD]/80 via-[#FFFDE7]/80 to-[#E8F5E9]/80 dark:from-[#1A237E]/30 dark:via-[#263238]/30 dark:to-[#1B5E20]/30 rounded-2xl p-4 border border-[#4285F4]/20 dark:border-[#4285F4]/30 shadow-inner">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" fill="#4285F4" opacity=".13" />
                    <path d="M16 24c-4 0-7-3-7-7V10h14v7c0 4-3 7-7 7Z" fill="#FBBC05" />
                    <rect x="12" y="25" width="8" height="3" rx="1.2" fill="#34A853" />
                    <path d="M9 10c-2.5 0-4 1.5-4 4 0 2 1.5 3.5 3.5 4M23 10c2.5 0 4 1.5 4 4 0 2-1.5 3.5-3.5 4" stroke="#EA4335" strokeWidth="1.2" />
                  </svg>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#EA4335] dark:text-[#EA4335] mb-1 uppercase tracking-wider">Achievement</div>
                    <div className="text-xs sm:text-base text-[#4285F4] dark:text-[#8AB4F8] font-medium leading-relaxed">{cards[cards.length - 1]?.achievement}</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Progress & Stats - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <div className="relative w-full flex justify-center">
                <div className="relative w-64 max-w-full">
                  <div className="absolute inset-0 rounded-full bg-white/30 dark:bg-gray-900/40 backdrop-blur-md border border-white/30 dark:border-gray-800/60 shadow-lg" style={{ filter: 'blur(2px)' }} />
                  <motion.div
                    className="relative h-3 rounded-full overflow-hidden shadow-xl"
                    style={{
                      background: "linear-gradient(90deg, #6366f1 0%, #a21caf 50%, #06b6d4 100%)",
                      width: `${((cardData.length - cards.length) / cardData.length) * 100}%`,
                      transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${((cardData.length - cards.length) / cardData.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="block w-full h-full animate-gradient-x rounded-full opacity-60" />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-between px-3">
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 drop-shadow">{cardData.length - cards.length} Explored</span>
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-300 drop-shadow">{cards.length} Left</span>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 tracking-wide">Progress: {cardData.length - cards.length} / {cardData.length}</span>
            </motion.div>

            {/* Why This Matters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative flex justify-center items-center py-2"
            >
              <div className="relative w-full max-w-xl mx-auto flex items-stretch rounded-3xl overflow-visible shadow-2xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-2xl border border-white/30 dark:border-gray-800/60">
                {/* Vertical gradient bar */}
                <div className="hidden sm:block absolute left-0 top-6 bottom-6 w-2 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 blur-[1px] opacity-80" />
                {/* Large blurred icon background */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none">
                  <span className="text-[6rem] sm:text-[7rem] opacity-10 blur-[2px]">💡</span>
                </div>
                {/* Content */}
                <div className="relative flex-1 px-6 sm:px-12 py-7 sm:py-10 z-10">
                  <h4 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 mb-3 tracking-tight drop-shadow-lg">Why This Interactive Experience?</h4>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium drop-shadow">
                    To turn my journey into an interactive experience — letting viewers swipe through real moments that shaped who I am. It reflects how I engage, grow, and contribute across tech, design, and community
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Last Action Feedback */}
            {lastDirection && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex justify-center"
              >
                {lastDirection === "right" ? (
                  <div className="rounded-2xl bg-green-50/80 dark:bg-green-900/40 backdrop-blur-xl border-2 border-transparent bg-clip-padding px-6 py-4 shadow-xl flex flex-col items-center text-center overflow-hidden" style={{ borderImage: 'linear-gradient(90deg, #22c55e 0%, #06b6d4 100%) 1' }}>
                    <svg className="w-8 h-8 mb-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="15" fill="#22c55e" opacity="0.15" />
                      <path d="M10 17l4 4 8-8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-bold text-green-700 dark:text-green-300 text-base sm:text-lg mb-1">Thanks for the interest!</p>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-transparent bg-clip-padding px-6 py-4 shadow-xl flex flex-col items-center text-center overflow-hidden" style={{ borderImage: 'linear-gradient(90deg, #f43f5e 0%, #6366f1 100%) 1' }}>
                    <svg className="w-8 h-8 mb-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="15" fill="#f43f5e" opacity="0.13" />
                      <path d="M10 14c1.5 2 3.5 4 6 4s4.5-2 6-4" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 12h.01M20 12h.01" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <p className="font-bold text-rose-600 dark:text-rose-300 text-base sm:text-lg mb-1">No worries, keep exploring!</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const Card = ({
  card,
  index,
  cards,
  setCards,
  setLastDirection,
  isTop,
}: {
  card: Card
  index: number
  cards: Card[]
  setCards: Dispatch<SetStateAction<Card[]>>
  setLastDirection: Dispatch<SetStateAction<"left" | "right" | null>>
  isTop: boolean
}) => {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100
    const velocity = info.velocity.x
    const movement = info.offset.x

    if (Math.abs(movement) > threshold || Math.abs(velocity) > 500) {
      const direction = movement > 0 ? "right" : "left"
      setLastDirection(direction)

      // Remove card with animation
      setCards((prev) => prev.filter((c) => c.id !== card.id))
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
        zIndex: isTop ? 10 : 5 - index,
      }}
      animate={{
        scale: isTop ? 1 : 0.95 - index * 0.02,
        y: isTop ? 0 : index * 4,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
    >
      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/30">
        {/* Image Only - Full Card */}
        <div className="h-full w-full overflow-hidden relative">
          <img
            src={card.url || "/placeholder.svg"}
            alt={card.title}
            className="h-full w-full object-contain"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              {card.category}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 line-clamp-2 drop-shadow">
              {card.description}
            </p>
          </div>
        </div>

        {/* Swipe Indicators */}
        <motion.div
          className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center opacity-0"
          style={{
            opacity: useTransform(x, [-100, -50], [1, 0]),
          }}
        >
          <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        {/* Removed green heart swipe indicator */}
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </motion.div>

        {/* Drag hint for top card */}
        {isTop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 sm:px-3 py-1 rounded-full"
          >
            Drag me! 👆
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default SwipeCards