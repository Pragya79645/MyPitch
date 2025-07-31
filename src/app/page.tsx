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

      {/* Modern Glassmorphic Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className="mx-auto mt-4 w-[95%] max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between shadow-xl border border-white/30 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            border: '1.5px solid rgba(255,255,255,0.18)',
          }}
        >
          {/* Logo/Avatar */}
          <div className="flex items-center gap-3">
            <img
              src="/avatar.jpg"
              alt="Pragya Avatar"
              className="h-10 w-10 rounded-full border-2 border-blue-500 shadow-md object-cover bg-white"
              style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #f87171 100%)' }}
            />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent select-none"
            >
              Pragya&apos;s Pitch
            </motion.span>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-8 items-center text-base font-medium relative">
            {[
              { label: '', href: '#' },
              { label: '', href: '#' },
              { label: '', href: '#' },
              { label: '', href: '#' },
              { label: '', href: '#' },
            ].map((item, idx) => (
              <li key={item.label || idx} className="relative group">
                <a
                  href={item.href}
                  className="px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                  <span className="block h-[2.5px] mt-1 rounded-full bg-gradient-to-r from-blue-600 via-red-500 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Socials & Theme Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://github.com/Pragya79645" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </a>
            <a href="https://www.linkedin.com/in/pragya-singh-71884b30b" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5 text-blue-700 dark:text-blue-400" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pragya220898@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Mail className="h-5 w-5 text-pink-500 dark:text-pink-400" />
            </a>
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full ml-2">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl shadow-lg border border-white/60 dark:border-gray-800/60 bg-gradient-to-r from-blue-50 via-white to-green-50 dark:from-blue-900/40 dark:via-gray-800/60 dark:to-green-900/40 text-base font-semibold tracking-tight text-blue-700 dark:text-blue-200"
                  style={{ boxShadow: '0 4px 24px 0 rgba(66,133,244,0.10)', borderWidth: 1.5 }}
                >
                  <Sparkles className="h-5 w-5 text-yellow-400 drop-shadow" />
                  <span className="bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent font-extrabold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                    Google Student Ambassador Candidate
                  </span>
                </motion.div>
              
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
                <source src="/vdo.mp4" type="video/mp4" />
                <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Parallax/animated background shapes */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/30 via-green-300/20 to-pink-400/20 blur-3xl animate-pulse-slow" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-400/20 via-blue-400/20 to-green-400/20 blur-3xl animate-pulse-slow" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-lg">Who I Am</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-red-500 to-green-500 mx-auto mb-8 rounded-full animate-gradient-x" />
            <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-2 font-medium">A glimpse into my personality and passions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Brain className="h-10 w-10 animate-float" />, // floating icon
                title: "Problem Solver",
                description:
                  "I thrive on turning complex challenges into elegant solutions through code and creativity.",
                color: "from-blue-400 via-blue-600 to-green-400",
                border: "border-blue-400/60",
              },
              {
                icon: <Laptop className="h-10 w-10 animate-float-delay" />, // floating icon with delay
                title: "Tech Enthusiast",
                description: "Always exploring the latest technologies and sharing knowledge with fellow developers.",
                color: "from-pink-400 via-red-400 to-yellow-300",
                border: "border-pink-400/60",
              },
              {
                icon: <Zap className="h-10 w-10 animate-float" />,
                title: "Community Builder",
                description:
                  "Passionate about bringing people together and fostering collaborative learning environments.",
                color: "from-green-400 via-blue-400 to-purple-400",
                border: "border-green-400/60",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.18, type: 'spring', stiffness: 120, damping: 14 }}
                whileHover={{ y: -16, scale: 1.06, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)" }}
                className="relative group"
              >
                {/* Animated Gradient Border Card */}
                <div
                  className={
                    `flex flex-col items-center justify-center p-10 rounded-3xl shadow-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border-2 ${item.border} transition-all duration-300 hover:shadow-2xl hover:bg-white/80 dark:hover:bg-gray-900/80` +
                    ` before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:opacity-0 group-hover:before:opacity-40 before:transition-opacity before:duration-300 before:pointer-events-none before:z-0`
                  }
                  style={{ zIndex: 1 }}
                >
                  <div className={`relative z-10 flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${item.color} text-white rounded-full shadow-lg border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                  <h3 className="relative z-10 text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight drop-shadow-sm">{item.title}</h3>
                  <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed text-center font-medium">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom keyframes for floating and gradient animation */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-float { animation: float 3.2s ease-in-out infinite; }
          .animate-float-delay { animation: float 3.2s ease-in-out infinite; animation-delay: 1.2s; }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </section>

      {/* Swipe Cards Section */}
      <SwipeCards />

      {/* Why GDSA Section */}
     <div><GoogleAmbassadorSection /></div>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Glassmorphic floating shapes for extra depth */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/30 via-green-300/20 to-pink-400/20 blur-3xl animate-pulse-slow z-0" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-400/20 via-blue-400/20 to-green-400/20 blur-3xl animate-pulse-slow z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-lg">My Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-red-500 to-green-500 mx-auto mb-8 rounded-full animate-gradient-x" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Here are some projects that showcase my technical skills and passion for innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                whileHover={{ y: -16, scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)" }}
                className="group"
              >
                <div className="relative h-full flex flex-col rounded-3xl shadow-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border-2 border-white/40 dark:border-gray-800/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-white/80 dark:hover:bg-gray-900/80">
                  {/* Animated gradient border top */}
                  <div className={`h-2 bg-gradient-to-r ${project.color} animate-gradient-x`} />

                  {/* Project Image with glass overlay */}
                  <div className="relative h-52 overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[1.5px]"
                        onError={(e) => {
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
                    {/* Glass overlay for shine */}
                    <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="sm" className="opacity-90 shadow-md">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Button>
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="sm" className="opacity-90 shadow-md">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="flex-1 flex flex-col p-7">
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight drop-shadow-sm">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 via-green-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold shadow-sm border border-white/40 dark:border-gray-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Custom keyframes for gradient and glassmorphic animation */}
        <style jsx global>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Vision Section */}
      <section className="relative py-22 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
        {/* Glassmorphic floating shapes for extra depth */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/30 via-green-300/20 to-pink-400/20 blur-3xl animate-pulse-slow z-0" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-400/20 via-blue-400/20 to-green-400/20 blur-3xl animate-pulse-slow z-0" />
        {/* Sparkle effect */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 z-10">
          <span className="block w-32 h-32 bg-gradient-to-tr from-yellow-300 via-pink-400 to-blue-400 opacity-30 rounded-full blur-2xl animate-sparkle" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4 tracking-tight drop-shadow-2xl bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent animate-gradient-x font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>My Vision</h2>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-600 via-red-500 to-green-500 mx-auto mb-8 rounded-full animate-gradient-x shadow-lg" />
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-2 font-normal italic font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>A glimpse into my mission and dreams</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center mb-14"
            >
              <div className="relative inline-block">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-red-500 to-green-500 blur-2xl opacity-50 animate-gradient-x" style={{ filter: 'blur(36px)' }} />
                {/* Glassmorphic card with floating lightbulb and sparkles */}
                <div className="relative bg-white/80 dark:bg-gray-800/80 p-12 rounded-full shadow-2xl border-4 border-white/40 dark:border-gray-900/40 backdrop-blur-2xl flex items-center justify-center animate-float" style={{ minWidth: 200, minHeight: 200 }}>
                  <Lightbulb className="h-24 w-24 text-yellow-400 drop-shadow-2xl animate-pulse" />
                  {/* Sparkle icon */}
                  <span className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-tr from-yellow-300 via-pink-400 to-blue-400 opacity-60 rounded-full blur-md animate-sparkle" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl font-semibold dark:text-white leading-relaxed mb-8 drop-shadow-xl italic bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent animate-gradient-x font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                &quot;To create a world where every student has access to cutting-edge technology education and the opportunity to build solutions that matter.&quot;
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-normal max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/70 rounded-3xl px-8 py-6 shadow-2xl backdrop-blur-2xl border border-white/40 dark:border-gray-800/40 font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                As a <span className="font-semibold text-blue-600 dark:text-blue-400">Google Student Ambassador</span>, I envision organizing <span className="font-semibold text-green-600 dark:text-green-400">workshops</span> that demystify AI and machine learning, hosting <span className="font-semibold text-pink-600 dark:text-pink-400">hackathons</span> that solve real-world problems, and building a <span className="font-semibold text-yellow-600 dark:text-yellow-400">community</span> where innovation thrives.<br className="hidden md:block" />
                <span className="block mt-4">Together, we can shape the future of technology, one student at a time.</span>
              </p>
            </motion.div>
          </div>
        </div>
        {/* Custom keyframes for floating, gradient, and sparkle animation */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-22px); }
          }
          .animate-float { animation: float 3.2s ease-in-out infinite; }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(20deg); }
          }
          .animate-sparkle {
            animation: sparkle 2.8s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
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