'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <a href='/' className="flex items-center">

              <Image src="/assets/logo.png" width={70} height={60} alt=' M/S HBAS & CO'/>
              <span className={`ml-3 text-xl font-semibold tracking-wider `}>
                M/S HBAS & CO
              </span>
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
             
              <Link
                href="/ExpertisePage"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-yellow-600 `}
              >
                OUR EXPERTISE
              </Link>
              <div className="relative group">
                <Link
                  href="/StoryPage"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-yellow-600 flex items-center `}
                >
                  OUR STORY
                  
                </Link>
              </div>
              <div className="relative group">
                <a
                  href="#"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-yellow-600 flex items-center `}
                >
                  LEADERSHIP
                 
                </a>
              </div>
              <a
                href="#"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-yellow-600 `}
              >
                CAREERS
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/ContactPage" className="bg-gray-800 text-white px-6 py-2 text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
              TALK TO US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
            >
              OUR PEOPLE
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
            >
              OUR EXPERTISE
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
            >
              SECTORS
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
            >
              RESOURCES
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
            >
              CAREERS
            </a>
            <div className="px-3 py-2">
              <button className="w-full bg-gray-800 text-white px-4 py-2 text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
                TALK TO US
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}