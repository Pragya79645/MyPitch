"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Moon,
  Sun,
  Play,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Code,
  Lightbulb,
  Zap,
  Brain,
  Laptop,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FloatingAvatar from "@/components/floating-avatar"
import FloatingIcons from "@/components/floating-icons"
import LoadingScreen from "@/components/loading-screen"

import DeveloperSkitsShowcase from "@/components/developer-skits-showcase"
import SwipeCards from "@/components/swipe-cards"
import AnimatedBackground from "@/components/animated-background"

export default function PitchWebsite() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-xl border-b border-gray-800/20 dark:border-gray-700/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-lg"
          >
            Pragya&apos;s Pitch
          </motion.h1>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full bg-gray-900/10 dark:bg-gray-100/10 hover:bg-gray-900/20 dark:hover:bg-gray-100/20 text-gray-900 dark:text-white border border-gray-800/20 dark:border-gray-200/20"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section with Floating Avatar */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-sm text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-800/30 dark:border-gray-200/30"
              >
                <Sparkles className="h-4 w-4" />
                Google Student Ambassador Candidate
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white drop-shadow-lg">Hey Google,</span>
                <br />
                <span className="text-gray-900 dark:text-white drop-shadow-lg">I&apos;m Pragya</span>
              </h1>

              <p className="text-xl text-gray-800 dark:text-gray-100 max-w-lg drop-shadow-md">
                A passionate developer ready to bridge the gap between Google&apos;s innovation and student communities
                worldwide.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gray-900/20 dark:bg-gray-100/20 hover:bg-gray-900/30 dark:hover:bg-gray-100/30 text-gray-900 dark:text-white px-8 py-3 rounded-full backdrop-blur-sm border border-gray-800/30 dark:border-gray-200/30"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch My Pitch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full border-2 border-gray-800/30 dark:border-gray-200/30 bg-gray-900/10 dark:bg-gray-100/10 hover:bg-gray-900/20 dark:hover:bg-gray-100/20 text-gray-900 dark:text-white backdrop-blur-sm"
              >
                Explore My Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center min-h-[600px]"
          >
            <FloatingAvatar />
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">My Personal Pitch</h2>
            <p className="text-xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto drop-shadow-md">
              Watch why I believe I&apos;m the perfect candidate to represent Google in student communities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800/20 dark:border-gray-200/20 backdrop-blur-sm">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                poster="/placeholder.svg?height=600&width=1200&text=Video+Pitch+Thumbnail"
              >
                <source src="/path/to/your/pitch-video.mp4" type="video/mp4" />
                <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-gray-900/15 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">Who I Am</h2>
            <div className="w-24 h-1 bg-gray-800/50 dark:bg-gray-200/50 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Problem Solver",
                description:
                  "I thrive on turning complex challenges into elegant solutions through code and creativity.",
              },
              {
                icon: <Laptop className="h-8 w-8" />,
                title: "Tech Enthusiast",
                description: "Always exploring the latest technologies and sharing knowledge with fellow developers.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Community Builder",
                description:
                  "Passionate about bringing people together and fostering collaborative learning environments.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900/20 dark:bg-gray-100/20 backdrop-blur-sm text-gray-900 dark:text-white rounded-full mb-6 border border-gray-800/30 dark:border-gray-200/30">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-md">{item.title}</h3>
                <p className="text-gray-800 dark:text-gray-100 leading-relaxed drop-shadow-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Swipe Cards Section */}
      <SwipeCards />

      {/* Why GDSA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-900 dark:text-white"
          >
            <h2 className="text-5xl font-bold mb-8 drop-shadow-lg">Why Google Student Ambassador?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed mb-8 drop-shadow-md text-gray-800 dark:text-gray-100">
                Google&apos;s mission to organize the world&apos;s information and make it universally accessible
                resonates deeply with my passion for democratizing technology education. As a GDSA, I want to bridge the
                gap between Google&apos;s cutting-edge innovations and student communities, fostering the next
                generation of tech leaders.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: "500+", label: "Students Mentored" },
                  { number: "15+", label: "Tech Events Organized" },
                  { number: "3", label: "Years of Community Building" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/20 dark:border-gray-200/20"
                  >
                    <div className="text-4xl font-bold mb-2 drop-shadow-lg text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-lg drop-shadow-md text-gray-800 dark:text-gray-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-gray-900/15 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">My Projects</h2>
            <p className="text-xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto drop-shadow-md">
              Here are some projects that showcase my technical skills and passion for innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EduConnect Platform",
                description: "A comprehensive learning management system connecting students and educators globally.",
                tech: ["React", "Node.js", "MongoDB"],
                color: "from-blue-600 to-blue-800",
              },
              {
                title: "AI Study Assistant",
                description: "Machine learning-powered tool that helps students optimize their study schedules.",
                tech: ["Python", "TensorFlow", "Flask"],
                color: "from-red-500 to-red-700",
              },
              {
                title: "Community Hub",
                description: "Social platform for tech enthusiasts to share knowledge and collaborate on projects.",
                tech: ["Next.js", "Supabase", "Tailwind"],
                color: "from-green-500 to-green-700",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-2xl bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm border border-gray-800/20 dark:border-gray-200/20">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Code className="h-8 w-8 text-gray-900 dark:text-white" />
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-900 dark:text-white hover:bg-gray-900/20 dark:hover:bg-gray-100/20"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-900 dark:text-white hover:bg-gray-900/20 dark:hover:bg-gray-100/20"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-100 mb-4 leading-relaxed drop-shadow-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-900/20 dark:bg-gray-100/20 text-gray-900 dark:text-white rounded-full text-sm backdrop-blur-sm border border-gray-800/30 dark:border-gray-200/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">My Vision</h2>
            <div className="w-24 h-1 bg-gray-800/50 dark:bg-gray-200/50 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gray-900/20 dark:bg-gray-100/20 rounded-full blur-lg"></div>
                <div className="relative bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm p-8 rounded-full border border-gray-800/30 dark:border-gray-200/30">
                  <Lightbulb className="h-16 w-16 text-yellow-600 dark:text-yellow-400 mx-auto drop-shadow-lg" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl text-gray-900 dark:text-white leading-relaxed mb-8 drop-shadow-md">
                &quot;To create a world where every student has access to cutting-edge technology education and the
                opportunity to build solutions that matter.&quot;
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed drop-shadow-sm">
                As a Google Student Ambassador, I envision organizing workshops that demystify AI and machine learning,
                hosting hackathons that solve real-world problems, and building a community where innovation thrives.
                Together, we can shape the future of technology, one student at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Skits Showcase */}
      <DeveloperSkitsShowcase />

      {/* Mission: Code Possible Skit */}


      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 drop-shadow-lg">
              Let&apos;s Build the Future with Google
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-100 mb-12 max-w-2xl mx-auto drop-shadow-md">
              Ready to embark on this incredible journey together? Let&apos;s connect and make a difference in the world
              of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gray-900/20 dark:bg-gray-100/20 hover:bg-gray-900/30 dark:hover:bg-gray-100/30 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm border border-gray-800/30 dark:border-gray-200/30"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-800/30 dark:border-gray-200/30 text-gray-900 dark:text-white hover:bg-gray-900/20 dark:hover:bg-gray-100/20 px-8 py-4 rounded-full text-lg font-semibold bg-gray-900/10 dark:bg-gray-100/10 backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-gray-900/15 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-gray-800 dark:text-gray-100 mb-4 drop-shadow-md">Made with ❤️ and lots of ☕ by Pragya</p>
            <p className="text-sm text-gray-700 dark:text-gray-200 drop-shadow-sm">
              © 2024 Pragya&apos;s Pitch. Designed for Google Student Ambassador Application.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
