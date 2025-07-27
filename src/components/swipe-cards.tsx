"use client"

import { type Dispatch, type SetStateAction, useState } from "react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { RotateCcw, Heart, X } from "lucide-react"

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
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovation in Tech",
    category: "Leadership",
    description: "Leading tech innovation initiatives in student communities",
    details:
      "Spearheaded multiple technology innovation workshops, introducing students to cutting-edge tools like AI/ML, cloud computing, and modern web development frameworks. Organized hackathons that resulted in 15+ innovative projects addressing real-world problems.",
    achievement: "500+ students impacted across 10 universities",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Community Building",
    category: "Networking",
    description: "Fostering connections and collaboration in tech communities",
    details:
      "Built and managed vibrant tech communities where students collaborate, learn, and grow together. Created mentorship programs connecting senior developers with beginners, established study groups, and organized regular tech talks featuring industry experts.",
    achievement: "Founded 3 active tech communities with 1000+ members",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Learning & Growth",
    category: "Education",
    description: "Continuous learning and skill development in technology",
    details:
      "Developed comprehensive learning pathways for students transitioning into tech. Created interactive workshops covering everything from basic programming to advanced topics like machine learning and cloud architecture. Mentored 100+ students in their coding journey.",
    achievement: "95% of mentees secured tech internships or jobs",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Problem Solving",
    category: "Development",
    description: "Tackling complex challenges with creative solutions",
    details:
      "Led development teams in creating innovative solutions for social impact. Built applications addressing education accessibility, environmental sustainability, and community health. Specialized in full-stack development with modern frameworks and cloud technologies.",
    achievement: "Developed 8 production-ready applications",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Digital Transformation",
    category: "Strategy",
    description: "Leading change through technology and innovation",
    details:
      "Consulted with educational institutions on digital transformation strategies. Implemented modern learning management systems, automated administrative processes, and introduced collaborative tools that improved efficiency by 40%. Trained faculty on emerging technologies.",
    achievement: "Transformed digital infrastructure for 5 institutions",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Future Vision",
    category: "Innovation",
    description: "Envisioning the future of technology and education",
    details:
      "Research and development in emerging technologies like AI, blockchain, and IoT for educational applications. Published papers on technology adoption in education, spoke at conferences about the future of learning, and prototyped next-generation educational tools.",
    achievement: "3 research publications, 10+ conference talks",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Collaborative Leadership",
    category: "Teamwork",
    description: "Building and leading high-performing tech teams",
    details:
      "Led cross-functional teams in developing innovative software solutions. Established agile development practices, implemented code review processes, and fostered a culture of continuous learning. Mentored junior developers and coordinated multiple concurrent projects.",
    achievement: "Successfully delivered 12+ projects with zero critical bugs",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Data Analytics",
    category: "Analysis",
    description: "Transforming data into actionable insights",
    details:
      "Developed comprehensive analytics dashboards for educational institutions. Implemented machine learning models for student performance prediction, created automated reporting systems, and provided data-driven recommendations that improved academic outcomes by 25%.",
    achievement: "Analyzed data for 15,000+ students across multiple institutions",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mobile Development",
    category: "Technology",
    description: "Creating mobile experiences that matter",
    details:
      "Developed native and cross-platform mobile applications for educational purposes. Built apps that gamify learning, enable offline access to educational content, and facilitate peer-to-peer learning. Focused on accessibility and user experience design.",
    achievement: "Created 5 mobile apps with 50,000+ combined downloads",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Global Impact",
    category: "Outreach",
    description: "Making technology accessible worldwide",
    details:
      "Participated in international tech conferences and workshops. Collaborated with global student organizations to promote digital literacy. Developed open-source educational tools used by universities across different continents and contributed to global tech initiatives.",
    achievement: "Reached students in 25+ countries through various initiatives",
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
            <span className="text-base sm:text-lg">🎯</span>
            Interactive Journey
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
                  // Empty State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 text-center max-w-sm mx-4">
                      <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🎉</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Journey Complete!</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        You've explored my entire journey. Ready to build something amazing together?
                      </p>
                      <button
                        onClick={resetCards}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                      >
                        <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                        Restart Journey
                      </button>
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
                  className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 text-center"
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-4 shadow-lg border border-white/20 dark:border-gray-700/30">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      <span className="hidden sm:inline">Swipe </span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">→</span>
                      <span className="hidden sm:inline"> to explore</span>
                    </p>
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
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/30"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                  <span className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {cards[cards.length - 1]?.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {cards[cards.length - 1]?.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {cards[cards.length - 1]?.details}
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-indigo-200/30 dark:border-indigo-700/30">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="text-base sm:text-lg">🏆</span>
                    <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">Achievement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-200 font-medium leading-relaxed">
                    {cards[cards.length - 1]?.achievement}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Progress & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 dark:border-gray-700/30"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Journey Progress</h4>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {cardData.length - cards.length} / {cardData.length}
                </span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 mb-3 sm:mb-4 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 h-2 sm:h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((cardData.length - cards.length) / cardData.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="bg-white/50 dark:bg-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {cardData.length - cards.length}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Explored</div>
                </div>
                <div className="bg-white/50 dark:bg-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3">
                  <div className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400">{cards.length}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Remaining</div>
                </div>
              </div>
            </motion.div>

            {/* Why This Matters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-indigo-200/30 dark:border-indigo-700/30"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">💡</span>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Why This Interactive Experience?</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                To turn my journey into an interactive experience — letting viewers swipe through real moments that shaped who I am. It reflects how I engage, grow, and contribute across tech, design, and community
              </p>
            </motion.div>

            {/* Last Action Feedback */}
            {lastDirection && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center ${
                  lastDirection === "right"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                }`}
              >
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{lastDirection === "right" ? "💚" : "👋"}</div>
                <p className="font-medium text-sm sm:text-base">
                  {lastDirection === "right" ? "Thanks for the interest!" : "No worries, keep exploring!"}
                </p>
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
            className="h-full w-full object-cover"
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
        </motion.div>

        <motion.div
          className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center opacity-0"
          style={{
            opacity: useTransform(x, [50, 100], [1, 0]),
          }}
        >
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