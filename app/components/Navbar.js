'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Building, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Irrigation Systems',
    'Water Management', 
    'Infrastructure Development',
    'Construction Projects',
    'Engineering Consultation'
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className={`w-full bg-slate-800 text-slate-300 transition-all duration-500 ${scrollY > 100 ? 'h-0 overflow-hidden' : 'h-auto'}`}>
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>0300-9317148</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>hbas.and.co@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Hyderabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Building className="w-7 h-7 text-white" />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-slate-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  scrollY > 50 ? 'text-slate-800' : 'text-white drop-shadow-lg'
                }`}>
                  M/S HBAS & CO
                </h1>
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  scrollY > 50 ? 'text-slate-600' : 'text-blue-100'
                }`}>
                  Engineering Excellence Since 1990
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="#home" 
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  scrollY > 50 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  scrollY > 50 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                About
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center space-x-1 font-semibold transition-all duration-300 hover:scale-105 ${
                    scrollY > 50 
                      ? 'text-slate-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden opacity-0 animate-fade-in-up">
                    <div className="py-2">
                      {services.map((service, index) => (
                        <a 
                          key={index}
                          href="#services" 
                          className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#projects" 
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  scrollY > 50 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  scrollY > 50 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Contact
              </a>
              
              {/* CTA Button */}
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-slate-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-slate-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Free Quote
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                scrollY > 50 
                  ? 'hover:bg-slate-100 text-slate-700' 
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200">
            <div className="px-6 py-6 space-y-4">
              <a href="#home" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Home</a>
              <a href="#about" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">About</a>
              
              <div className="space-y-2">
                <p className="text-slate-800 font-semibold py-2">Services</p>
                {services.map((service, index) => (
                  <a key={index} href="#services" className="block text-slate-600 hover:text-blue-600 transition-colors pl-4 py-1">
                    {service}
                  </a>
                ))}
              </div>
              
              <a href="#projects" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Projects</a>
              <a href="#contact" className="block text-slate-700 hover:text-blue-600 transition-colors font-semibold py-2">Contact</a>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-slate-700 transition-all duration-300 shadow-lg">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;