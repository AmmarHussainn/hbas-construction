'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    const element = document.querySelector('.footer-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [mounted]);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Expertise', href: '/ExpertisePage' },
    { name: 'Our Story', href: '/StoryPage' },
    { name: 'Contact', href: '/ContactPage' },
  ];

  const services = [
    'Contract Preparation',
    'Contract Negotiation',
    'Dispute Resolution',
    'Litigation Support',
    'Risk Management',
    'Developer Consultation',
  ];

  return (
    <footer className='bg-gray-900 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-32 h-32 border border-yellow-600 transform rotate-45'></div>
        <div className='absolute top-60 right-40 w-24 h-24 border border-gray-600 transform -rotate-12'></div>
        <div className='absolute bottom-40 left-1/3 w-20 h-20 border border-yellow-600 transform rotate-12'></div>
        <div className='absolute bottom-20 right-20 w-28 h-28 border border-gray-600 transform -rotate-45'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Main Footer Content */}
        <div
          className={`footer-container pt-16 pb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
            {/* Company Info Column */}
            <div
              className={`lg:col-span-1 transform transition-all duration-700 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {/* Company Logo/Name */}
              <div className='mb-6'>
                <div className='flex items-center space-x-3 mb-4'>
                  
                  <a href='/' className='flex flex-col items-start gap-0.5'>
                 
                               <Image src="/assets/logo.png" width={70} height={60} alt=' M/S HBAS & CO'/>
                               <span className={`pt-2 text-xl font-semibold tracking-wider `}>
                                 M/S HBAS & CO
                               </span>
                               </a>
                </div>
               
              </div>

              {/* Company Description */}
              <p className='text-gray-300 leading-relaxed mb-6'>
                Pakistan's premier construction and engineering Developer
                Company, specializing in government projects and infrastructure
                developments with over 30 years of excellence.
              </p>

              {/* Certifications */}
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <svg
                    className='w-4 h-4 text-yellow-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='text-gray-300 text-sm'>
                    Pakistan Registered
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <svg
                    className='w-4 h-4 text-yellow-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='text-gray-300 text-sm'>
                    Specialized Construction Consturction Company
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <h4 className='text-lg font-semibold text-white mb-6'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className='text-gray-300 hover:text-yellow-600 transition-colors duration-200 flex items-center group'
                    >
                      <svg
                        className='w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform duration-200'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <h4 className='text-lg font-semibold text-white mb-6'>
                Our Services
              </h4>
              <ul className='space-y-3'>
                {services.map((service, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-gray-300 text-sm'>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <h4 className='text-lg font-semibold text-white mb-6'>
                Contact Information
              </h4>

              <div className='space-y-4'>
                {/* CEO Contact */}
                <div className='bg-gray-800 p-4 rounded-lg border border-gray-700'>
                  <h5 className='text-yellow-600 font-semibold mb-2'>
                    Director - CEO
                  </h5>
                  <p className='text-white font-medium mb-2'>
                    Furqan Ali Soomro
                  </p>

                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <svg
                        className='w-4 h-4 text-yellow-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                      <span className='text-gray-300 text-sm'>
                        0300-9317148
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <svg
                        className='w-4 h-4 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                      <span className='text-gray-300 text-sm'>
                        0333-3628812
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <svg
                        className='w-4 h-4 text-yellow-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                      <span className='text-gray-300 text-sm'>
                        hbas.and.co@gmail.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h5 className='text-white font-medium mb-2 flex items-center'>
                    <svg
                      className='w-4 h-4 text-yellow-600 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Business Hours
                  </h5>
                  <p className='text-gray-300 text-sm'>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className='text-gray-300 text-sm'>
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                  <p className='text-gray-300 text-sm'>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-gray-700 pt-8 pb-8 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className='flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'>
            {/* Copyright */}
            <div className='text-gray-400 text-sm text-center lg:text-left'>
              <p>
                © {currentYear} M/S HBAS & CO. All rights reserved. |
                Construction & Engineering Consturction Specialists
              </p>
            </div>

            {/* Social Links & Developer */}
          </div>
        </div>

        {/* Back to Top Button */}
        <div
          className={`absolute top-8 right-8 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='bg-yellow-600 hover:bg-yellow-700 text-black p-3 rounded-full shadow-lg transition-all duration-300 group'
          >
            <svg
              className='w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 15l7-7 7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
