'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Users, Award, Wrench, Building, Droplets, Shield, Target, Heart, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ExpertiseSection from '../components/ExpertiseSection';
import StorySection from '../components/StorySection';
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

   <ExpertiseSection/>
   <StorySection/>
</div>
  );
}

export default page