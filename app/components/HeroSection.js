'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Phone, Award, Building2, Shield, Droplets, CheckCircle2, Star, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Building Excellence in",
      highlight: "Infrastructure Development",
      subtitle: "Trusted construction and engineering solutions since 1990, delivering quality projects across irrigation, water management, and infrastructure sectors."
    },
    {
      title: "Engineering Solutions for",
      highlight: "Water Management",
      subtitle: "Comprehensive irrigation systems and water management solutions designed to enhance agricultural productivity and community development."
    },
    {
      title: "Your Partner in",
      highlight: "Construction Excellence",
      subtitle: "From small dams to large-scale structures, we deliver projects with quality, professionalism, and timely completion guaranteed."
    }
  ];

  const stats = [
    { 
      number: "35+", 
      label: "Years of Experience", 
      icon: Calendar,
      description: "Serving since 1990"
    },
    { 
      number: "500+", 
      label: "Projects Delivered", 
      icon: Building2,
      description: "Successfully completed"
    },
    { 
      number: "100%", 
      label: "Client Satisfaction", 
      icon: Star,
      description: "Quality guaranteed"
    },
    { 
      number: "PEC", 
      label: "Registered Company", 
      icon: Award,
      description: "No limit construction"
    }
  ];

  const services = [
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Advanced water distribution solutions"
    },
    {
      icon: Building2,
      title: "Infrastructure Projects",
      description: "Large-scale construction and development"
    },
    {
      icon: Shield,
      title: "Water Management",
      description: "Sustainable water system solutions"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        {/* Clean geometric background */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-slate-50 to-transparent"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          
          {/* Left Column - Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Company Badge */}
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold text-sm">Pakistan Engineering Council Registered</span>
            </div>

            {/* Dynamic Headlines */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                {heroSlides[currentSlide].title}
                <br />
                <span className="text-blue-600">
                  {heroSlides[currentSlide].highlight}
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* Key Services Preview */}
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">{service.title}</h3>
                      <p className="text-slate-600 text-xs mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Contact Us Today
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                    <div className="text-slate-700 font-semibold text-sm mb-1">{stat.label}</div>
                    <div className="text-slate-500 text-xs">{stat.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Company Information Card */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">M/S HBAS & CO</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Founded in 1990 by Mr. Basheer Ahmed Soomro, now led by Mr. Furqan Ali Soomro. 
                  We've built our reputation on delivering exceptional construction and engineering services.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Direct Contact</p>
                    <p className="text-slate-600 text-sm">0300-9317148 / 0333-3628812</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Leadership</p>
                    <p className="text-slate-600 text-sm">Furqan Ali Soomro - Managing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="flex justify-center space-x-3 mt-8">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-slate-500 text-sm mb-2">Learn more about our services</span>
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;