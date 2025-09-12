'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Users, Award, Wrench, Building, Droplets, Shield, Target, Heart, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
const page = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Droplets, title: "Irrigation Systems", desc: "Advanced water management solutions for agricultural productivity" },
    { icon: Building, title: "Infrastructure Development", desc: "Large-scale construction projects with precision and excellence" },
    { icon: Wrench, title: "Water Management", desc: "Sustainable water systems for community well-being" },
    { icon: Shield, title: "Safety & Environment", desc: "Highest standards of safety and environmental responsibility" }
  ];

  const stats = [
    { number: "35+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Building },
    { number: "100%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const values = [
    "Integrity & Excellence",
    "Innovation & Sustainability", 
    "Safety & Environmental Responsibility",
    "Teamwork & Dedication",
    "Reliable & Cost-effective Solutions"
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
     

      {/* Hero Section */}
   <HeroSection/>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of excellence, innovation, and unwavering commitment to quality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Foundation & Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 1990 by Mr. Basheer Ahmed Soomro with a vision to contribute in construction and development. Through dedication, hard work, and professional commitment, we earned recognition for delivering quality projects in irrigation and infrastructure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Leadership Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Under the leadership of Mr. Furqan Ali Soomro, we've expanded our scope and strengthened our reputation. Today, we're proudly registered with Pakistan Engineering Council (PEC) as a No Limit Construction Company.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Values</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3 group hover:bg-white hover:shadow-md p-3 rounded-xl transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  To deliver sustainable and innovative engineering solutions in irrigation, water management, and infrastructure development. We combine technical expertise, innovation, and integrity to provide reliable, cost-effective, and high-quality services.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Focus</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-yellow-300" />
                    <span>Enhancing agricultural productivity</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-yellow-300" />
                    <span>Improving community well-being</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-yellow-300" />
                    <span>Upholding safety & environmental standards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Our work is guided by integrity, excellence, and innovation. We are committed to sustainability and environmentally responsible practices while ensuring the highest standards of safety in all our projects.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Integrity", "Excellence", "Innovation", "Sustainability", "Safety", "Teamwork"].map((value, index) => (
                  <span key={index} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions tailored to meet your construction and infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <button className="mt-6 text-blue-600 font-semibold hover:text-cyan-500 transition-colors group-hover:translate-x-2 transform transition-transform duration-300 inline-flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with our expert team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">0300-9317148 / 0333-3628812</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">hbas.and.co@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">B # 21/C Ghospel Homes Near Soneri Book Land Qasimabad, Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Leadership</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Furqan Ali Soomro</p>
                    <p className="text-gray-300">Managing Director - CEO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">M/S HBAS & CO</h3>
                  <p className="text-gray-400 text-sm">Construction Excellence</p>
                </div>
              </div>
              <p className="text-gray-400">
                Building tomorrow's infrastructure with sustainable and innovative engineering solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Irrigation Systems</li>
                <li>Water Management</li>
                <li>Infrastructure Development</li>
                <li>Construction Projects</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Story</li>
                <li>Contact</li>
                <li>Projects</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 M/S HBAS & CO. All rights reserved. Registered with Pakistan Engineering Council (PEC)</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default page