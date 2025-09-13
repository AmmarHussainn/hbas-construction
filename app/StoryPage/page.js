'use client';

import { useState, useEffect } from 'react';

export default function StoryPage() {
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeTimeline, setActiveTimeline] = useState(0);

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

    const elements = document.querySelectorAll('.story-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  const timelineEvents = [
    {
      year: '1990',
      title: 'Foundation & Vision',
      description: 'Mr. Basheer Ahmed Soomro established the Company with a vision to contribute meaningfully to construction and engineering Consturction in Pakistan.',
      highlights: ['Company establishment', 'Initial team formation', 'First construction cases'],
      image: '🏛️'
    },
    {
      year: '1995',
      title: 'Early Growth',
      description: 'Expanded services to include major government infrastructure projects and established reputation for quality Company services.',
      highlights: ['First major government project', 'Team expansion', 'Industry recognition'],
      image: '📈'
    },
    {
      year: '2000',
      title: 'Specialization Era',
      description: 'Focused specialization in construction Consturction, developing expertise in complex contractual matters and dispute resolution.',
      highlights: ['Construction Consturction specialization', 'Advanced training programs', 'Professional certifications'],
      image: '⚖️'
    },
    {
      year: '2010',
      title: 'Modern Innovation',
      description: 'Introduced modern Company practices and technology-driven solutions for complex construction and engineering projects.',
      highlights: ['Digital transformation', 'Modern practices adoption', 'Enhanced service delivery'],
      image: '💡'
    },
    {
      year: '2015',
      title: 'Leadership Transition',
      description: 'Mr. Furqan Ali Soomro joined the Company, bringing fresh perspectives and expanding the scope of services.',
      highlights: ['New leadership integration', 'Service expansion', 'Strategic planning'],
      image: '👥'
    },
    {
      year: '2020',
      title: 'Current Leadership',
      description: 'Under Mr. Furqan Ali Soomro\'s leadership, the Company has become a leading construction Consturction specialist with national recognition.',
      highlights: ['Full leadership transition', 'National recognition', 'Major project victories'],
      image: '🏆'
    },
    {
      year: '2025',
      title: 'Continued Excellence',
      description: 'Today, we continue to set standards in construction and engineering Consturction, serving major government and private sector projects.',
      highlights: ['Pakistan Bar Council registration', '500+ successful cases', 'Industry leadership'],
      image: '🌟'
    }
  ];

  const teamMembers = [
    {
      name: 'Mr. Basheer Ahmed Soomro',
      title: 'Founder & Senior Advisor',
      description: 'Visionary founder who established the Company\'s foundation and reputation for excellence in construction Consturction.',
      achievements: ['Established Company in 1990', 'Pioneer in construction Consturction', '25+ years of leadership'],
      image: 'BA'
    },
    {
      name: 'Mr. Furqan Ali Soomro',
      title: 'Director - CEO',
      description: 'Current leader driving the Company\'s growth and innovation in construction and engineering Company services.',
      achievements: ['Leading major projects', 'Strategic expansion', 'Client satisfaction excellence'],
      image: 'FS'
    }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices and honest representation in all our Company matters.',
      icon: '🛡️',
      examples: ['Transparent communication', 'Ethical billing practices', 'Honest case assessments']
    },
    {
      title: 'Excellence',
      description: 'Pursuing the highest standards in Company service delivery and professional competence.',
      icon: '⭐',
      examples: ['Continuous learning', 'Best practice adoption', 'Quality assurance']
    },
    {
      title: 'Innovation',
      description: 'Embracing modern solutions and creative approaches to complex Company challenges.',
      icon: '💡',
      examples: ['Technology integration', 'Creative problem solving', 'Modern Company practices']
    },
    {
      title: 'Client Focus',
      description: 'Placing client needs and success at the center of everything we do.',
      icon: '🎯',
      examples: ['24/7 availability', 'Personalized service', 'Results-driven approach']
    }
  ];

  const milestones = [
    { number: '30+', label: 'Years of Excellence', description: 'Serving the construction industry since 1990' },
    { number: '500+', label: 'Successful Cases', description: 'Proven track record across diverse projects' },
    { number: '100%', label: 'Client Satisfaction', description: 'Maintaining excellence in service delivery' },
    { number: '24/7', label: 'Company Support', description: 'Available when our clients need us most' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="py-20 md:py-36 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-yellow-600 transform rotate-45"></div>
          <div className="absolute top-60 right-40 w-32 h-32 border border-gray-400 transform -rotate-12"></div>
          <div className="absolute bottom-40 left-1/3 w-28 h-28 border border-yellow-600 transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 border border-gray-400 transform -rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="flex justify-center space-x-4 text-sm">
                <a href="#home" className="text-gray-400 hover:text-yellow-600 transition-colors duration-200">Home</a>
                <span className="text-gray-500">/</span>
                <span className="text-yellow-600 font-medium">Our Story</span>
              </nav>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-yellow-600">Story</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Three decades of dedication, innovation, and excellence in construction and engineering Consturction - 
              building Company foundations as strong as the structures we represent.
            </p>

            {/* Quote */}
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-lg italic text-gray-300 border-l-4 border-yellow-600 pl-6">
                "From humble beginnings to national recognition - our journey reflects our unwavering commitment 
                to serving the construction industry with integrity and expertise."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`story-item text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="0">
            <div className="inline-block bg-yellow-600 text-black px-8 py-4 transform -skew-x-12 mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold transform skew-x-12">
                Our Journey Through Time
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore the key milestones and achievements that have shaped our Company into 
              Pakistan's leading construction and engineering Consturction specialist.
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className={`story-item transform transition-all duration-1000 ${
            visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="0">
            
            {/* Timeline Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {timelineEvents.map((event, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    activeTimeline === index
                      ? 'bg-yellow-600 text-black shadow-lg scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {event.year}
                </button>
              ))}
            </div>

            {/* Active Timeline Content */}
            <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Timeline Image/Icon */}
                <div className="text-center">
                  <div className="text-8xl mb-6">
                    {timelineEvents[activeTimeline].image}
                  </div>
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
                    {timelineEvents[activeTimeline].year}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {timelineEvents[activeTimeline].title}
                  </h3>
                </div>

                {/* Timeline Content */}
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {timelineEvents[activeTimeline].description}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-4">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {timelineEvents[activeTimeline].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`story-item text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="1">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Leadership <span className="text-yellow-600">Legacy</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the visionary leaders who have shaped our Company's journey and continue 
              to drive excellence in construction and engineering Consturction.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`story-item bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
                  visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                data-index="1"
              >
                <div className="p-8">
                  
                  {/* Member Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{member.image}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-yellow-600 font-medium">{member.title}</p>
                    </div>
                  </div>

                  {/* Member Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Member Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`story-item text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="2">
            <div className="inline-block bg-yellow-600 text-black px-8 py-4 transform -skew-x-12 mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold transform skew-x-12">
                Our Values & Culture
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide our work and shape our relationships with clients, 
              colleagues, and the construction industry community.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`story-item bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 text-center group transform ${
                  visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-index="2"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {value.description}
                </p>
                
                {/* Value Examples */}
                <div className="space-y-2">
                  {value.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-600 text-xs">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`story-item text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="3">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-yellow-600">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`story-item text-center transform transition-all duration-700 ${
                  visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                data-index="3"
              >
                <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
                    {milestone.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {milestone.label}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-yellow-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`story-item text-center transform transition-all duration-1000 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="4">
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Looking <span className="text-gray-900">Forward</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed mb-8">
                As we continue our journey, we remain committed to innovation, excellence, and serving 
                the evolving needs of Pakistan's construction and engineering sectors. Our story continues 
                to be written with every client we serve and every project we support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                  <p className="text-sm">Expanding our impact across Pakistan's infrastructure development</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                  <p className="text-sm">Setting new standards in construction and engineering Consturction</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="font-bold text-lg mb-2">Our Commitment</h3>
                  <p className="text-sm">Continuing to serve with integrity, excellence, and innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`story-item transform transition-all duration-1000 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="5">
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Be Part of <span className="text-yellow-600">Our Story</span>
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Whether you're facing a construction Consturction challenge or planning a major project, 
              we're here to help you write your success story.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="inline-flex items-center bg-gray-900 text-white px-8 py-4 text-lg font-bold hover:bg-yellow-600 hover:text-black transition-all duration-300 group">
                START YOUR PROJECT
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="inline-flex items-center border-2 border-gray-900 text-gray-900 px-8 py-4 text-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                MEET OUR TEAM
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}