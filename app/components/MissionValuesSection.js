'use client';

import { useState, useEffect } from 'react';

export default function MissionValuesSection() {
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.mission-item');
    elements.forEach(el => observer.observe(el));

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
        
        {/* Our Mission Section */}
        <div className={`mission-item mb-20 transform transition-all duration-1000 ${
          visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} data-index="0">
          
          {/* Mission Header */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="bg-yellow-600 text-black px-8 py-4 transform -skew-x-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold transform skew-x-12">
                  Our Mission
                </h2>
              </div>
            </div>
          </div>

          {/* Mission Content */}
          <div className="max-w-5xl">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              Our mission is to deliver comprehensive and innovative  solutions in construction, 
              engineering, and infrastructure law. We are committed to excellence by combining technical 
              expertise,  innovation, and unwavering integrity to provide reliable, cost-effective, 
              and high-quality  services. With a focus on protecting our clients' interests and 
              ensuring project success, we aim to contribute to industry development while upholding 
              the highest standards of professional responsibility and ethical practice.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className={`mission-item mb-20 transform transition-all duration-1000 ${
          visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} data-index="1" style={{ transitionDelay: '0.3s' }}>
          
          {/* Core Values Header */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="bg-yellow-600 text-black px-8 py-4 transform -skew-x-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold transform skew-x-12">
                  Core Values
                </h2>
              </div>
            </div>
          </div>

          {/* Core Values Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Our work is guided by <strong className="text-gray-900">integrity</strong>, <strong className="text-gray-900">excellence</strong>, 
                and <strong className="text-gray-900">innovation</strong>. We are committed to ethical  practices and 
                professionally responsible representation while ensuring the highest standards of client service in all our cases.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Through <strong className="text-gray-900">teamwork</strong>, <strong className="text-gray-900">respect</strong>, 
                and <strong className="text-gray-900">dedication</strong>, we strive to deliver reliable, cost-effective, 
                and timely  solutions that contribute to our clients' success and industry development.
              </p>
            </div>

            {/* Values Icons Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-semibold">Integrity</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-semibold">Excellence</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-semibold">Innovation</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-semibold">Teamwork</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className={`mission-item transform transition-all duration-1000 ${
          visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} data-index="2" style={{ transitionDelay: '0.6s' }}>
          
          {/* Who We Are Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-none">
              WHO WE <span className="text-yellow-600">ARE</span> !
            </h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mt-6"></div>
          </div>

          {/* Stats and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Stats Column 1 */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-yellow-600 mb-2">30+</div>
                <div className="text-gray-700 font-medium">Years of  Excellence</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Cases Successfully Handled</div>
              </div>
            </div>

            {/* Center Description */}
            <div className="text-center">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                We are <strong className="text-yellow-600">M/S HBAS & CO</strong> - Pakistan's premier construction 
                and engineering Developer, specializing in complex  matters across the infrastructure, 
                construction, and engineering sectors.
              </p>
              
              <button className="inline-flex items-center bg-yellow-600 text-white px-8 py-4 text-sm font-bold hover:bg-yellow-700 transition-all duration-300 group">
                DISCOVER OUR EXPERTISE
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

            {/* Stats Column 2 */}
            <div className="space-y-8 text-center lg:text-right">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Client Satisfaction Rate</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium"> Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-700 ${
          visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '1s' }}>
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gray-400"></div>
            <span className="text-gray-600 font-medium">Ready to Work With Us?</span>
            <div className="w-12 h-px bg-gray-400"></div>
          </div>
          <button className="inline-flex items-center bg-gray-900 text-white px-8 py-4 text-sm font-bold hover:bg-gray-800 transition-all duration-300 group">
            GET  CONSULTATION
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
    </section>
  );
}