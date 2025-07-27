import React from 'react';
import { motion } from 'framer-motion';

const GoogleAmbassadorSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Smooth animated background */}
      <div className="absolute inset-0">
        {/* Gentle floating gradients */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(66, 133, 244, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(234, 67, 53, 0.06) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 20%, rgba(251, 188, 5, 0.08) 0%, transparent 60%), radial-gradient(circle at 30% 80%, rgba(52, 168, 83, 0.06) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.08) 0%, transparent 60%), radial-gradient(circle at 20% 20%, rgba(234, 67, 53, 0.06) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 30%, rgba(66, 133, 244, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(234, 67, 53, 0.06) 0%, transparent 60%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        />
        
        {/* Subtle floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-30 ${
              i % 4 === 0 ? 'bg-blue-400' : 
              i % 4 === 1 ? 'bg-red-400' : 
              i % 4 === 2 ? 'bg-yellow-400' : 'bg-green-400'
            }`}
            style={{
              left: `${15 + (i * 20)}%`,
              top: `${20 + (i * 15)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Responsive modern title */}
          <div className="mb-12 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6">
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="bg-gradient-to-r from-blue-600 via-red-500 via-yellow-500 to-green-600 bg-200% bg-clip-text text-transparent block"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Why Google
                </motion.span>
                <motion.span
                  initial={{ backgroundPosition: "100% 50%" }}
                  animate={{ backgroundPosition: "0% 50%" }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 2 }}
                  className="bg-gradient-to-r from-green-600 via-blue-600 via-red-500 to-yellow-500 bg-200% bg-clip-text text-transparent block"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Student Ambassador?
                </motion.span>
              </h2>
              
              {/* Smooth animated line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 mx-auto rounded-full transform origin-center w-32 sm:w-48 md:w-64"
              />
            </motion.div>
          </div>

          {/* Responsive content container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Modern glassmorphism card */}
            <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 shadow-xl">
              {/* Subtle corner accents - hidden on mobile */}
              <div className="hidden md:block absolute top-0 left-0 w-12 h-12 lg:w-16 lg:h-16 border-t-3 border-l-3 border-blue-500 rounded-tl-3xl opacity-60" />
              <div className="hidden md:block absolute top-0 right-0 w-12 h-12 lg:w-16 lg:h-16 border-t-3 border-r-3 border-red-500 rounded-tr-3xl opacity-60" />
              <div className="hidden md:block absolute bottom-0 left-0 w-12 h-12 lg:w-16 lg:h-16 border-b-3 border-l-3 border-yellow-500 rounded-bl-3xl opacity-60" />
              <div className="hidden md:block absolute bottom-0 right-0 w-12 h-12 lg:w-16 lg:h-16 border-b-3 border-r-3 border-green-500 rounded-br-3xl opacity-60" />
              
              {/* Floating quote - responsive */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-6xl sm:text-7xl lg:text-8xl font-serif text-gray-300/60"
              >
                "
              </motion.div>
              
              {/* Main quote - fully responsive */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight mb-8 lg:mb-12"
              >
                Because I don't just want to use tech —{' '}
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent cursor-default inline-block"
                >
                  I want to ignite it.
                </motion.span>
              </motion.p>
              
              {/* Content paragraphs - responsive text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6 lg:space-y-8 max-w-4xl mx-auto"
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Being a Google Student Ambassador isn't just about events or swag — it's about creating{' '}
                  <span className="font-semibold text-blue-600">ripples of curiosity</span>,{' '}
                  <span className="font-semibold text-red-600">collaboration</span>, and{' '}
                  <span className="font-semibold text-green-600">community impact</span>.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-gray-600"
                >
                  I've seen how a single workshop can spark someone's career path, how a well-timed resource 
                  can save hours of struggle, and how building with others often teaches more than building alone.
                </motion.p>
              </motion.div>

              {/* Interactive brand elements - responsive grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-12 lg:mt-16"
              >
                {[
                  { color: '#4285F4', name: 'blue', label: 'Innovation' },
                  { color: '#EA4335', name: 'red', label: 'Passion' },
                  { color: '#FBBC05', name: 'yellow', label: 'Growth' },
                  { color: '#34A853', name: 'green', label: 'Impact' }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center cursor-pointer group shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 border-2 border-white rounded-full border-t-transparent opacity-80"
                    />
                    
                    {/* Tooltip - hidden on mobile */}
                    <div className="hidden sm:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs lg:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                      {item.label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom floating elements - responsive */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-12 lg:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8"
          >
            {['Innovate', 'Connect', 'Transform'].map((word, index) => (
              <motion.div
                key={word}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/60 backdrop-blur-sm border border-white/40 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg">
                  <span className="text-gray-700 font-semibold text-base sm:text-lg block text-center">{word}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleAmbassadorSection;