'use client';

import { useEffect, useState } from 'react';

export default function HeroPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/mainbanner.jpg')",
  }}
></div>

      
      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className={`space-y-8 ${mounted ? 'animate-slide-in-up' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
                  <span className="block">CONSTRUCTION &</span>
                  <span className="block">ENGINEERING</span>
                  <span className="block text-yellow-400 font-medium">WORKERS</span>
                </h1>
              </div>

              <div className="pt-4">
                <button className="inline-flex items-center border-2 border-white text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 group">
                  BOOK A CONSULTATION
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Tagline */}
          
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-900" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-900 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-yellow-600 transform rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-gray-900 transform -rotate-12"></div>
      </div>
    </div>
  );
}