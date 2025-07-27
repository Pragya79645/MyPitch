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
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FloatingAvatar from "@/components/floating-avatar"
import FloatingIcons from "@/components/floating-icons"
import LoadingScreen from "@/components/loading-screen"
import SwipeCards from "@/components/swipe-cards"
import { Example } from "@/components/footer"
import GoogleAmbassadorSection from "@/components/cta"

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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <FloatingIcons />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent"
          >
            Pragya&apos;s Pitch
          </motion.h1>

          <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section with Floating Avatar */}
      <section className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="h-4 w-4" />
                Google Student Ambassador Candidate
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hey Google,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent">
                  I&apos;m Pragya
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                A passionate developer ready to bridge the gap between Google&apos;s innovation and student communities
                worldwide.
              </p>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                <Play className="h-5 w-5 mr-2" />
                Watch My Pitch
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-2 bg-transparent">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Personal Pitch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch why I believe I&apos;m the perfect candidate to represent Google in student communities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-8"></div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Swipe Cards Section */}
      <SwipeCards />

      {/* Why GDSA Section */}
     <div><GoogleAmbassadorSection /></div>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">My Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some projects that showcase my technical skills and passion for innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
{
  title: "PathPILOT",
  description: `It is an AI-powered platform with a personalized chatbot, tailored interview prep, career
counselor section, and a resume analyzer that identifies skill gaps, suggests optimal career roadmaps, and highlights
improvement areas. It delivers customized guidance helping users confidently plan and grow their careers with personalized support.`,
  tech: ["Next.js", "Firebase", "Google Gemini API"],
  color: "from-blue-600 to-blue-800",
  image: "/pp..png",
  imageAlt: "EduConnect Platform Dashboard Screenshot",
  github: "https://github.com/Pragya79645/careerpathnavigator.git",
  demo: "https://careerpathnavigator-fufd.vercel.app/"
},
{
  title: "Syncora",
  description: `Syncora is a structured collaboration platform that bridges this gap by streamlining communication, automating insights, and enhancing productivity. It combines real-time messaging, AI-powered assistance, and smart role-based interactions to create a seamless workplace experience.`,
  tech: ["Next.js", "Supabase"],
                color: "from-red-500 to-red-700",
                image: "/syn.jpg",
                imageAlt: "AI Study Assistant Interface Screenshot",
                github: "https://github.com/Pragya79645/syncora.git",
                
              },
              {
                title: "InfoScope",
                description: "A personalized content platform built with Next.js that delivers trending news and movie recommendations using TMDB and News APIs, allowing users to customize their profiles and filter content based on preferences.",
                tech: ["Next.js", "Google Gemini API"],
                color: "from-green-500 to-green-700",
                image: "/info.png",
                imageAlt: "Community Hub Platform Screenshot",
                github: "https://github.com/Pragya79645/dashboard.git",
                demo: "https://dashboard-nine-delta-10.vercel.app/"
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
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          const nextElem = img.nextElementSibling as HTMLElement | null;
                          if (nextElem) nextElem.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback placeholder */}
                    <div className={`${project.image ? 'hidden' : 'flex'} w-full h-full items-center justify-center bg-gradient-to-br ${project.color}`}>
                      <div className="text-center text-white">
                        <Camera className="h-12 w-12 mx-auto mb-2 opacity-70" />
                        <p className="text-sm font-medium">{project.title}</p>
                      </div>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="sm" className="opacity-90">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Button>
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="sm" className="opacity-90">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Code className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Github className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">My Vision</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-500 to-green-500 rounded-full blur-lg opacity-30"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-full">
                  <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                &quot;To create a world where every student has access to cutting-edge technology education and the
                opportunity to build solutions that matter.&quot;
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                As a Google Student Ambassador, I envision organizing workshops that demystify AI and machine learning,
                hosting hackathons that solve real-world problems, and building a community where innovation thrives.
                Together, we can shape the future of technology, one student at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <div><Example /></div>

      {/* Footer */}
      <footer className="py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          
            <p className="text-sm text-gray-500">
              © 2025 Pragya&apos;s Pitch. Designed for Google Student Ambassador Application.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}