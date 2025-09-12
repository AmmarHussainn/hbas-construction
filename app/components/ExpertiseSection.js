'use client';

import { useState, useEffect } from 'react';

export default function ExpertiseSection() {
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

    const elements = document.querySelectorAll('.expertise-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  const expertiseData = [
    {
      number: "01",
      title: "Pre-Contract",
      description: "Practical advice and risk analysis for the tender and procurement phase",
      services: [
        "Contract preparation",
        "Contract negotiation", 
        "Contract review",
        "Contract risk analysis",
        "Contract administration"
      ]
    },
    {
      number: "02", 
      title: "Contract Delivery",
      description: "Strategic guidance to ensure optimal outcomes on contentious issues",
      services: [
        "Contract administration guidance",
        "Contractual communications",
        "Claim preparation & defence", 
        "Risk management",
        "Dispute resolution"
      ]
    },
    {
      number: "03",
      title: "Post-Contract", 
      description: "Legal representation and advice for dispute avoidance or resolution",
      services: [
        "Litigation, Mediation, Arbitration",
        "Security of Payment (SOPA)",
        "Delay & cost escalation claims",
        "Breach of contract", 
        "Residential building disputes",
        "Professional negligence",
        "WHS issues"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
            Our <span className="text-yellow-600 font-medium">Expertise</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Our multidisciplinary team ensures better outcomes at every stage of your project lifecycle. 
              With diverse industry experience, we proactively manage commercial and legal risk to enhance, 
              build and protect your assets and opportunities.
            </p>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="space-y-12">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`expertise-item transform transition-all duration-700 ${
                visibleSections.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  
                  {/* Number and Title Section */}
                  <div className="bg-gray-900 text-white p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="text-6xl sm:text-7xl lg:text-8xl font-light text-yellow-600 leading-none">
                        {item.number}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-medium">
                        {item.title}
                      </h3>
                      <div className="w-12 h-1 bg-yellow-600"></div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Services List Section */}
                  <div className="p-8 lg:p-12 bg-gray-50">
                    <ul className="space-y-3">
                      {item.services.map((service, serviceIndex) => (
                        <li 
                          key={serviceIndex} 
                          className="flex items-start group hover:text-yellow-600 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-px bg-gray-400"></div>
            <span className="text-gray-600 font-medium">Ready to get started?</span>
            <div className="w-12 h-px bg-gray-400"></div>
          </div>
          <div className="mt-8">
            <button className="inline-flex items-center bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-yellow-600 transition-all duration-300 group">
              DISCUSS YOUR PROJECT
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