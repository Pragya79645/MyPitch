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
]

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData)
  const [lastDirection, setLastDirection] = useState<"left" | "right" | null>(null)

  const resetCards = () => {
    setCards(cardData)
    setLastDirection(null)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section Background Overlay */}
      <div className="absolute inset-0 bg-gray-900/5 dark:bg-gray-900/15 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-sm text-gray-900 dark:text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-gray-800/30 dark:border-gray-200/30"
          >
            <span className="text-lg">🎯</span>
            Interactive Journey
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
            My <span className="text-gray-900 dark:text-white drop-shadow-lg">Journey</span>
          </h2>

          <p className="text-xl text-gray-800 dark:text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            Swipe through the key moments and experiences that shaped my path as a developer, community builder, and
            future Google Student Ambassador
          </p>

          <div className="w-32 h-1 bg-gray-800/50 dark:bg-gray-200/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col xl:flex-row items-start justify-center gap-12 max-w-7xl mx-auto">
          {/* Swipe Cards Container */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Cards Stack */}
              <div className="relative w-80 h-[500px] perspective-1000">
                {cards.length === 0 ? (
                  // Empty State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-800/30 dark:border-gray-200/30 text-center max-w-sm">
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-md">
                        Journey Complete!
                      </h3>
                      <p className="text-gray-800 dark:text-gray-100 mb-6 leading-relaxed drop-shadow-sm">
                        You've explored my entire journey. Ready to build something amazing together?
                      </p>
                      <button
                        onClick={resetCards}
                        className="inline-flex items-center gap-2 bg-gray-900/20 dark:bg-gray-100/20 hover:bg-gray-900/30 dark:hover:bg-gray-100/30 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-800/30 dark:border-gray-200/30"
                      >
                        <RotateCcw className="w-4 h-4" />
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
                  className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
                >
                  <div className="bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-800/30 dark:border-gray-200/30">
                    <div className="flex items-center gap-4 text-sm text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center border border-red-400/30">
                          <X className="w-4 h-4 text-red-600 dark:text-red-400" />
                        </div>
                        <span>Swipe left to skip</span>
                      </div>
                      <div className="w-px h-6 bg-gray-800/30 dark:bg-gray-200/30"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center border border-green-400/30">
                          <Heart className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span>Swipe right to like</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Information Panel */}
          <div className="flex-1 max-w-lg space-y-6">
            {/* Current Card Info */}
            {cards.length > 0 && (
              <motion.div
                key={cards[cards.length - 1]?.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-800/30 dark:border-gray-200/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gray-800/50 dark:bg-gray-200/50"></div>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider">
                    {cards[cards.length - 1]?.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 drop-shadow-md">
                  {cards[cards.length - 1]?.title}
                </h3>

                <p className="text-gray-800 dark:text-gray-100 mb-6 leading-relaxed drop-shadow-sm">
                  {cards[cards.length - 1]?.details}
                </p>

                <div className="bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm rounded-2xl p-4 border border-gray-800/20 dark:border-gray-200/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🏆</span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Achievement</span>
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium drop-shadow-sm">
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
              className="bg-gray-900/15 dark:bg-gray-100/15 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-800/30 dark:border-gray-200/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white drop-shadow-md">Journey Progress</h4>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {cardData.length - cards.length} / {cardData.length}
                </span>
              </div>

              <div className="w-full bg-gray-800/20 dark:bg-gray-200/20 rounded-full h-3 mb-4 overflow-hidden">
                <motion.div
                  className="bg-gray-800/60 dark:bg-gray-200/60 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((cardData.length - cards.length) / cardData.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm rounded-xl p-3 border border-gray-800/20 dark:border-gray-200/20">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-md">
                    {cardData.length - cards.length}
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-200">Explored</div>
                </div>
                <div className="bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm rounded-xl p-3 border border-gray-800/20 dark:border-gray-200/20">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-md">{cards.length}</div>
                  <div className="text-xs text-gray-700 dark:text-gray-200">Remaining</div>
                </div>
              </div>
            </motion.div>

            {/* Why This Matters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm rounded-3xl p-6 border border-gray-800/20 dark:border-gray-200/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white drop-shadow-md">
                  Why This Interactive Experience?
                </h4>
              </div>
              <p className="text-gray-800 dark:text-gray-100 leading-relaxed drop-shadow-sm">
                As a Google Student Ambassador, I believe in making technology accessible and engaging. This interactive
                journey reflects my approach to education - hands-on, intuitive, and memorable.
              </p>
            </motion.div>

            {/* Last Action Feedback */}
            {lastDirection && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`p-4 rounded-2xl text-center backdrop-blur-sm border ${
                  lastDirection === "right"
                    ? "bg-green-500/20 text-green-800 dark:text-green-200 border-green-400/30"
                    : "bg-red-500/20 text-red-800 dark:text-red-200 border-red-400/30"
                }`}
              >
                <div className="text-2xl mb-2">{lastDirection === "right" ? "💚" : "👋"}</div>
                <p className="font-medium drop-shadow-sm">
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
      <div className="w-80 h-[500px] bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-800/30 dark:border-gray-200/30">
        {/* Image */}
        <div className="h-64 w-full overflow-hidden relative">
          <img
            src={card.url || "/placeholder.svg"}
            alt={card.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-800/30 dark:border-gray-200/30">
            <span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {card.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 h-[236px] flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 drop-shadow-md">
            {card.title}
          </h3>

          <p className="text-gray-800 dark:text-gray-100 text-sm leading-relaxed mb-4 flex-1 line-clamp-4 drop-shadow-sm">
            {card.description}
          </p>

          <div className="bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm rounded-xl p-3 border border-gray-800/20 dark:border-gray-200/20">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🎯</span>
              <span className="text-xs font-semibold text-gray-800 dark:text-gray-100">Impact</span>
            </div>
            <p className="text-xs text-gray-900 dark:text-white font-medium line-clamp-2 drop-shadow-sm">
              {card.achievement}
            </p>
          </div>
        </div>

        {/* Swipe Indicators */}
        <motion.div
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 border border-red-400/50"
          style={{
            opacity: useTransform(x, [-100, -50], [1, 0]),
          }}
        >
          <X className="w-8 h-8 text-white" />
        </motion.div>

        <motion.div
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 border border-green-400/50"
          style={{
            opacity: useTransform(x, [50, 100], [1, 0]),
          }}
        >
          <Heart className="w-8 h-8 text-white" />
        </motion.div>

        {/* Drag hint for top card */}
        {isTop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20"
          >
            Drag me! 👆
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default SwipeCards
