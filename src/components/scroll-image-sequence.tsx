"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface ScrollImageSequenceProps {
  imageArray: string[]
  frameHeight: number
}

export default function ScrollImageSequence({ imageArray, frameHeight }: ScrollImageSequenceProps) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageArray.map((src, index) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new window.Image()
          img.crossOrigin = "anonymous"
          img.onload = () => resolve(img)
          img.onerror = (error: any) => {
            console.error(`Failed to load image ${index}:`, src, error)
            // Create a fallback image instead of rejecting
            const fallbackImg = new window.Image()
            fallbackImg.src = `data:image/svg+xml;base64,${btoa(`
              <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#f3f4f6"/>
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontFamily="Arial" fontSize="24" fill="#6b7280">
                  Frame ${index + 1}
                </text>
              </svg>
            `)}`
            fallbackImg.onload = () => resolve(fallbackImg)
          }
          img.src = src
        })
      })

      try {
        const images = await Promise.all(imagePromises)
        setLoadedImages(images)
        setImagesLoaded(true)
      } catch (error) {
        console.error("Error loading images:", error)
        // Even if some images fail, we should still try to render
        setImagesLoaded(true)
      }
    }

    if (imageArray.length > 0) {
      loadImages()
    }
  }, [imageArray])

  // Handle scroll to update frame
  const handleScroll = useCallback(() => {
    if (!containerRef.current || !imagesLoaded || imageArray.length === 0) return

    const container = containerRef.current
    const scrollTop = container.scrollTop
    const scrollHeight = container.scrollHeight - container.clientHeight

    if (scrollHeight <= 0) return

    // Calculate scroll progress but ensure we don't reach 100% until we're truly at the bottom
    const scrollProgress = Math.min(scrollTop / scrollHeight, 1)
    
    // Add buffer to ensure last frame is shown when fully scrolled
    const adjustedProgress = scrollProgress === 1 ? 1 : scrollProgress * 0.98
    
    // Calculate frame index with better distribution
    const frameIndex = Math.floor(adjustedProgress * imageArray.length)
    
    // Ensure we show the last frame when scroll progress is 100%
    const finalFrameIndex = scrollProgress === 1 ? imageArray.length - 1 : frameIndex

    setCurrentFrame(Math.min(Math.max(finalFrameIndex, 0), imageArray.length - 1))
  }, [imageArray.length, imagesLoaded])

  // Draw current frame on canvas
  useEffect(() => {
    if (!canvasRef.current || !loadedImages[currentFrame] || !containerRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = loadedImages[currentFrame]

    // Set canvas size to match the fixed container dimensions
    const containerWidth = canvas.parentElement?.clientWidth || 800
    const containerHeight = frameHeight

    // Set canvas resolution
    canvas.width = containerWidth
    canvas.height = containerHeight

    // Clear and draw image
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw image to fill the entire canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }, [currentFrame, loadedImages, frameHeight])

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Canvas for displaying frames - Fixed height container */}
        <div className="relative bg-gray-100 dark:bg-gray-700" style={{ height: frameHeight }}>
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover block"
            style={{ height: frameHeight, display: "block" }}
          />

          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Loading animation...</p>
              </div>
            </div>
          )}

          {/* Overlay content that stays on top of canvas */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full flex flex-col justify-between p-6">
              <div className="text-center bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Scroll to Explore</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Frame {currentFrame + 1} of {imageArray.length}
                </p>
              </div>

              <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-3 backdrop-blur-sm">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full transition-all duration-150"
                    style={{ width: `${((currentFrame + 1) / imageArray.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable area - Increased height to provide more scroll buffer */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 bg-gray-50 dark:bg-gray-800"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#2563eb #e5e7eb",
          }}
        >
          {/* Increased scroll content height to provide more buffer */}
          <div style={{ height: `${imageArray.length * 80}px` }} className="w-full">
            {/* Invisible content to enable scrolling */}
            <div className="p-6 text-center text-gray-500 dark:text-gray-400 text-sm">
              <p className="mb-4">Continue scrolling to see all {imageArray.length} frames</p>
              <div className="space-y-2 opacity-50">
                <p>↓ Keep scrolling ↓</p>
                <p>Frame animation updates as you scroll</p>
                <p>Reach the bottom to see the final frame</p>
              </div>
            </div>
            {/* Additional buffer content at the bottom */}
            <div className="h-32 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs">
              <p>End of animation sequence</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Frame indicator - Positioned outside the main container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-600"
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentFrame + 1} / {imageArray.length}
        </span>
      </motion.div>
    </div>
  )
}