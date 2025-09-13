'use client';

import { useState, useEffect } from 'react';

export default function CeoSection() {
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

    const element = document.querySelector('.ceo-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-gray-400 transform rotate-45"></div>
        <div className="absolute top-60 right-40 w-32 h-32 border border-yellow-600 transform -rotate-12"></div>
        <div className="absolute bottom-40 left-1/3 w-28 h-28 border border-gray-400 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-yellow-600 transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`ceo-container transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header with Yellow Banner */}
          <div className="mb-16">
            <div className="relative inline-block">
              <div className="bg-yellow-600 text-black px-8 py-4 transform -skew-x-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold transform skew-x-12">
                  Leadership
                </h2>
              </div>
            </div>
          </div>

          {/* CEO Card */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            
            <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* CEO Photo/Avatar Section */}
                <div className="bg-gray-900 p-12 flex flex-col justify-center items-center text-center relative">
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-2 border-yellow-600 transform rotate-45"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-yellow-600 transform rotate-45"></div>
                  
                  {/* CEO Avatar */}
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-4xl font-bold text-white">FS</span>
                  </div>
                  
                  {/* CEO Name and Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Furqan Ali Soomro
                  </h3>
                  <div className="text-yellow-600 font-medium text-lg mb-4">
                    Director - CEO
                  </div>
                  <div className="w-16 h-1 bg-yellow-600"></div>
                </div>

                {/* CEO Information Section */}
                <div className="p-12 bg-white">
                  <div className="space-y-8">
                    
                    {/* Leadership Message */}
                    <div className={`transform transition-all duration-700 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`} style={{ transitionDelay: '0.5s' }}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Leading Excellence in Construction Consturction</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Under the visionary leadership of <strong className="text-gray-900">Furqan Ali Soomro</strong>, 
                        our Company continues to set new standards in construction and engineering Developer services. 
                        Building upon our founder's legacy, we deliver innovative solutions for complex government 
                        projects and infrastructure developments.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        With unwavering commitment to excellence and professional integrity, we ensure that every 
                        client receives personalized attention and expert Developer guidance tailored to their unique needs.
                      </p>
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Vision Section */}
          <div className={`mt-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.6s' }}>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Vision Card */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the most trusted construction and engineering Developer partner for government projects in Pakistan.
                </p>
              </div>

              {/* Innovation Card */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pioneering modern Developer solutions for complex construction and infrastructure challenges.
                </p>
              </div>

              {/* Commitment Card */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Unwavering dedication to client success through professional excellence and integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1s' }}>
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gray-400"></div>
              <span className="text-gray-600 font-medium">Ready to Connect with Our Leadership?</span>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
            <button className="inline-flex items-center bg-gray-900 text-white px-8 py-4 text-sm font-bold hover:bg-yellow-600 transition-all duration-300 group mr-4">
              SCHEDULE A MEETING
              <svg 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="inline-flex items-center bg-yellow-600 text-black px-8 py-4 text-sm font-bold hover:bg-yellow-700 transition-all duration-300 group">
              CONTACT US
              <svg 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}