import React, { useState, useEffect } from 'react';

const PragyaLoader = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const words = ['meet', 'Pragya', 'Singh'];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => prev >= 100 ? 0 : prev + 2);
    }, 50);

    // Word animation
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        } else {
          setTimeout(() => setCurrentWord(0), 1500);
          return prev;
        }
      });
    }, 1000);

    // Auto-hide after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              #667eea 0%, 
              #4285f4 25%, 
              #ea4335 50%, 
              #fbbc04 75%, 
              #34a853 100%
            )
          `,
          backgroundSize: '400% 400%',
          animation: 'gradientMove 8s ease infinite'
        }}
      />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#4285f4', '#ea4335', '#fbbc04', '#34a853'][Math.floor(Math.random() * 4)],
              borderRadius: Math.random() > 0.5 ? '50%' : '8px',
              animation: `floatShape ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-full px-4 sm:px-6 lg:px-8">
        
        {/* Modern spinner */}
        <div className="relative mb-8 sm:mb-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
            {/* Outer ring */}
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="31.416"
                style={{ animation: 'draw 2s ease-in-out infinite alternate' }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4285f4" />
                  <stop offset="50%" stopColor="#ea4335" />
                  <stop offset="100%" stopColor="#34a853" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Inner ring */}
            <svg className="absolute inset-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#fbbc04"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="20"
                strokeDashoffset="20"
                opacity="0.7"
              />
            </svg>
          </div>
        </div>

        {/* Text display */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-wider mb-2 sm:mb-4 h-12 sm:h-16 md:h-20 lg:h-24 flex items-center justify-center min-w-0">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-out mx-1 sm:mx-2 ${
                  index <= currentWord 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-4 scale-95 blur-sm'
                }`}
                style={{
                  color: '#ffffff',
                  fontWeight: index === 1 ? '600' : '200',
                  textShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  letterSpacing: index === 1 ? '0.05em' : '0.1em'
                }}
              >
                {word}
              </span>
            ))}
          </div>
          
          {/* Subtitle */}
          <div className="text-xs sm:text-sm md:text-base text-white/70 font-light tracking-[0.2em] uppercase">
            Loading Experience
          </div>
        </div>

        {/* Modern progress indicator */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          {/* Progress bar */}
          <div className="relative h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden mb-3 sm:mb-4">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-red-400 to-green-400 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="text-center text-xs sm:text-sm text-white/60 font-mono">
            {progress}%
          </div>
        </div>

        {/* Minimal dots indicator */}
        <div className="flex space-x-1 sm:space-x-2 mt-6 sm:mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                i <= currentWord ? 'bg-white scale-110' : 'bg-white/30 scale-100'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes floatShape {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.2; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(1.1); 
            opacity: 0.4; 
          }
        }
        
        @keyframes draw {
          from { stroke-dashoffset: 31.416; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

export default PragyaLoader;