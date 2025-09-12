'use client';

import { useState, useEffect } from 'react';

export default function StorySection() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const element = document.querySelector('.story-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-400 transform rotate-45"></div>
        <div className="absolute top-60 right-20 w-24 h-24 border border-yellow-600 transform -rotate-12"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-gray-400 transform rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-yellow-600 transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`story-container transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header with Yellow Banner */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="bg-yellow-600 text-black px-8 py-4 transform -skew-x-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold transform skew-x-12">
                  Our Story
                </h2>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <div className={`transform transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '0.3s' }}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our firm was founded in 1990 by <strong className="text-gray-900">Mr. Basheer Ahmed Soomro</strong>, 
                  who laid the foundation with a vision to contribute in the field of construction and engineering law. 
                  Through his dedication, hard work, and professional commitment, the firm earned recognition for 
                  delivering quality legal services, especially in the construction and infrastructure sector.
                </p>
              </div>

              <div className={`transform transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '0.5s' }}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In continuation of his legacy, the firm is now being led by <strong className="text-gray-900">Mr. Furqan Ali Soomro</strong>, 
                  who has expanded the scope of services and strengthened the firm's reputation. Under his leadership, 
                  the firm has undertaken major projects in construction law, contract disputes, and large-scale 
                  legal matters, ensuring timely delivery with quality and professionalism.
                </p>
              </div>

              <div className={`transform transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '0.7s' }}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we are proudly registered with the <strong className="text-gray-900">Pakistan Bar Council</strong> as a 
                  specialized Construction & Engineering Law Firm, reflecting our capacity to handle legal matters 
                  of any scale with excellence and expertise.
                </p>
              </div>

              {/* Decorative Quote */}
              <div className={`mt-8 pl-6 border-l-4 border-yellow-600 transform transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '0.9s' }}>
                <p className="text-xl italic text-gray-600 font-light">
                  "Building legal foundations as strong as the structures we represent"
                </p>
              </div>
            </div>

            {/* Visual Element / Stats */}
            <div className={`transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`} style={{ transitionDelay: '0.4s' }}>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                {/* Timeline */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                      1990
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Foundation</h3>
                      <p className="text-sm text-gray-600">Established by Mr. Basheer Ahmed Soomro</p>
                    </div>
                  </div>
                  
                  <div className="ml-6 w-px h-12 bg-gray-300"></div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                      2020+
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Current Leadership</h3>
                      <p className="text-sm text-gray-600">Led by Mr. Furqan Ali Soomro</p>
                    </div>
                  </div>
                  
                  <div className="ml-6 w-px h-12 bg-gray-300"></div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      PBC
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Recognition</h3>
                      <p className="text-sm text-gray-600">Pakistan Bar Council Registration</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">30+</div>
                    <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Projects Handled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className={`mt-16 text-center transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1s' }}>
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gray-400"></div>
              <span className="text-gray-600 font-medium">Our Legacy Continues</span>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
            <button className="inline-flex items-center bg-yellow-600 text-black px-8 py-4 text-sm font-bold hover:bg-yellow-700 transition-all duration-300 group">
              LEARN MORE ABOUT US
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
      </div>
    </section>
  );
}