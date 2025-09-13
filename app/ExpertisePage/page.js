'use client';

import { useState, useEffect } from 'react';

const page = () => {
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeTab, setActiveTab] = useState('pre-contract');

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

  // SVG Icons
  const ContractIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 15h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  );

  const ScaleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clipRule="evenodd" />
    </svg>
  );

  const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
      <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25a.75.75 0 001.5 0V14.25a.75.75 0 00-.75-.75zM12 9a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0112 9zm2.25-.75a.75.75 0 00-.75.75v6.75a.75.75 0 001.5 0V9a.75.75 0 00-.75-.75zM18 9.75a.75.75 0 011.5 0v6.75a.75.75 0 01-1.5 0V9.75z" clipRule="evenodd" />
    </svg>
  );

  const ConstructionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
      <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
    </svg>
  );

  const OfficeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z" clipRule="evenodd" />
    </svg>
  );

  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
  );

  const GearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.49 7.49 0 00-.88.45c-.416.278-.826.588-1.22.912a.75.75 0 01-1.06-1.06c.293-.293.58-.58.86-.86a8.963 8.963 0 013.884-2.234L9.365 3.37a.75.75 0 01.624-.627A3 3 0 0112 2.25c1.054 0 2.014.513 2.611 1.32a.75.75 0 01-.582 1.208 1.5 1.5 0 00-1.372.914 5.99 5.99 0 00-2.031-.209 9.075 9.075 0 00-1.968 2.193c-.432.695-.792 1.452-1.066 2.248a.75.75 0 01-1.38-.623c.234-.83.553-1.61.95-2.33a7.486 7.486 0 011.69-2.042c.219-.219.444-.423.677-.614A1.5 1.5 0 0011.078 2.25zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5zM7.5 17.5v-5.5a4.5 4.5 0 119 0v5.5a.75.75 0 01-1.5 0v-5.5a3 3 0 10-6 0v5.5a.75.75 0 01-1.5 0z" clipRule="evenodd" />
    </svg>
  );

  const expertiseAreas = [
    {
      id: 'pre-contract',
      number: '01',
      title: 'Pre-Contract Services',
      subtitle: 'Foundation of Success',
      description: 'Comprehensive Developer support during the tender and procurement phase to ensure solid contractual foundations.',
      icon: <ContractIcon />,
      services: [
        {
          name: 'Contract Preparation',
          description: 'Drafting comprehensive contracts tailored to project requirements and risk profiles.',
          features: ['Risk assessment', 'Compliance review', 'Terms optimization', 'Developer documentation']
        },
        {
          name: 'Contract Negotiation',
          description: 'Strategic negotiation to secure favorable terms while maintaining project viability.',
          features: ['Terms analysis', 'Risk mitigation', 'Stakeholder alignment', 'Commercial optimization']
        },
        {
          name: 'Contract Review',
          description: 'Thorough examination of contract terms to identify potential issues and opportunities.',
          features: ['Developer compliance', 'Risk identification', 'Terms clarification', 'Amendment recommendations']
        },
        {
          name: 'Risk Analysis',
          description: 'Comprehensive risk assessment to identify and mitigate potential Developer and commercial exposures.',
          features: ['Risk mapping', 'Impact assessment', 'Mitigation strategies', 'Contingency planning']
        },
        {
          name: 'Tender Support',
          description: 'Expert guidance through the tender process to maximize success probability.',
          features: ['Bid documentation', 'Compliance verification', 'Strategic positioning', 'Submission support']
        }
      ]
    },
    {
      id: 'contract-delivery',
      number: '02',
      title: 'Contract Delivery',
      subtitle: 'Ensuring Success',
      description: 'Strategic guidance and support throughout project execution to ensure optimal outcomes.',
      icon: <ScaleIcon />,
      services: [
        {
          name: 'Contract Administration',
          description: 'Professional management of contractual obligations and rights throughout project lifecycle.',
          features: ['Progress monitoring', 'Compliance tracking', 'Documentation management', 'Performance evaluation']
        },
        {
          name: 'Contractual Communications',
          description: 'Managing all formal communications to maintain Developer compliance and project flow.',
          features: ['Notice management', 'Correspondence review', 'Communication protocols', 'Documentation standards']
        },
        {
          name: 'Claim Preparation & Defence',
          description: 'Expert preparation and defense of claims to protect client interests and project success.',
          features: ['Claim analysis', 'Evidence gathering', 'Developer documentation', 'Strategic defense']
        },
        {
          name: 'Risk Management',
          description: 'Ongoing risk monitoring and mitigation to prevent issues from escalating.',
          features: ['Risk monitoring', 'Early warning systems', 'Mitigation implementation', 'Contingency activation']
        },
        {
          name: 'Change Management',
          description: 'Professional handling of project variations and change orders.',
          features: ['Change evaluation', 'Impact assessment', 'Approval processes', 'Documentation control']
        }
      ]
    },
    {
      id: 'post-contract',
      number: '03',
      title: 'Post-Contract Resolution',
      subtitle: 'Protecting Your Interests',
      description: 'Expert representation and advice for dispute avoidance and resolution after project completion.',
      icon: <BuildingIcon />,
      services: [
        {
          name: 'Litigation Support',
          description: 'Comprehensive litigation support for construction and engineering disputes.',
          features: ['Case preparation', 'Evidence analysis', 'Expert witness coordination', 'Court representation']
        },
        {
          name: 'Alternative Dispute Resolution',
          description: 'Mediation and arbitration services to resolve disputes efficiently and cost-effectively.',
          features: ['Mediation facilitation', 'Arbitration representation', 'Settlement negotiation', 'ADR strategy']
        },
        {
          name: 'Security of Payment (SOPA)',
          description: 'Specialized support for Security of Payment Act matters and payment disputes.',
          features: ['Payment claims', 'Adjudication support', 'Enforcement actions', 'Compliance guidance']
        },
        {
          name: 'Delay & Cost Claims',
          description: 'Expert handling of delay analysis and cost escalation claims.',
          features: ['Delay analysis', 'Cost evaluation', 'Causation assessment', 'Quantum preparation']
        },
        {
          name: 'Professional Negligence',
          description: 'Representation in professional negligence matters affecting construction projects.',
          features: ['Negligence assessment', 'Standard of care evaluation', 'Damage quantification', 'Expert testimony']
        },
        {
          name: 'Compliance & Regulatory',
          description: 'Guidance on regulatory compliance and workplace health & safety matters.',
          features: ['Regulatory compliance', 'WHS compliance', 'Inspection support', 'Enforcement response']
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Government Infrastructure',
      description: 'Roads, bridges, utilities, and public facilities',
      icon: <ConstructionIcon />,
      projects: '150+ Projects'
    },
    {
      name: 'Commercial Construction',
      description: 'Office buildings, retail centers, and industrial facilities',
      icon: <OfficeIcon />,
      projects: '200+ Projects'
    },
    {
      name: 'Residential Development',
      description: 'Housing projects and residential complexes',
      icon: <HomeIcon />,
      projects: '100+ Projects'
    },
    {
      name: 'Engineering Projects',
      description: 'Power plants, water treatment, and specialized engineering',
      icon: <GearIcon />,
      projects: '75+ Projects'
    }
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
                <span className="text-yellow-600 font-medium">Our Expertise</span>
              </nav>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-yellow-600">Expertise</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive Developer solutions for construction and engineering projects at every stage - 
              from initial planning to final resolution.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">30+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">500+</div>
                <div className="text-gray-400 text-sm">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">3</div>
                <div className="text-gray-400 text-sm">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className={`mb-12 transform transition-all duration-700 ${
            visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="0">
            <div className="flex flex-wrap justify-center gap-4">
              {expertiseAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    activeTab === area.id
                      ? 'bg-yellow-600 text-black shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2 flex items-center">{area.icon}</span>
                  {area.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="expertise-item" data-index="1">
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className={`${activeTab === area.id ? 'block' : 'hidden'} transform transition-all duration-500`}
              >
                
                {/* Area Header */}
                <div className="text-center mb-16">
                  <div className="inline-block bg-yellow-600 text-black px-8 py-4 transform -skew-x-12 mb-6">
                    <h2 className="text-4xl font-bold transform skew-x-12">
                      {area.number} - {area.title}
                    </h2>
                  </div>
                  <h3 className="text-2xl text-gray-600 mb-4">{area.subtitle}</h3>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {area.services.map((service, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden transform ${
                        visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="p-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          {service.name}
                        </h4>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-800 mb-3">Key Features:</h5>
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Service Footer */}
                      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                        <button className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-200 flex items-center">
                          Learn More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`expertise-item text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="2">
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Industries We <span className="text-yellow-600">Serve</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized expertise spans across multiple construction and engineering sectors, 
              delivering tailored Developer solutions for diverse project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`expertise-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 text-center border border-gray-100 group transform ${
                  visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-index="2"
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="inline-block bg-yellow-600 text-black px-4 py-2 rounded-full text-sm font-medium">
                  {industry.projects}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`expertise-item transform transition-all duration-1000 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="3">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <div>
                <div className="inline-block bg-yellow-600 text-black px-8 py-4 transform -skew-x-12 mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold transform skew-x-12">
                    Why Choose Us
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
                      <p className="text-gray-700">Deep specialization in construction and engineering Consturction with 30+ years of experience.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                      <p className="text-gray-700">Successfully handled 500+ cases with a 100% client satisfaction rate.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Support</h3>
                      <p className="text-gray-700">End-to-end Developer support from contract preparation to dispute resolution.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                      <p className="text-gray-700">Commitment to meeting deadlines and delivering results when you need them most.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Visual */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">30+</div>
                    <div className="text-gray-700 text-sm">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-gray-700 text-sm">Cases Handled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
                    <div className="text-gray-700 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                    <div className="text-gray-700 text-sm">Support Available</div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-block bg-yellow-600 text-black px-6 py-3 rounded-lg font-bold">
                    Pakistan Registered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`expertise-item transform transition-all duration-1000 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} data-index="4">
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Get <span className="text-yellow-600">Started</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Contact our expert team today to discuss your construction Consturction needs. 
              We're here to provide the specialized expertise your project deserves.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="inline-flex items-center bg-yellow-600 text-black px-8 py-4 text-lg font-bold hover:bg-yellow-700 transition-all duration-300 group">
                SCHEDULE CONSULTATION
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              
              <button className="inline-flex items-center border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 group">
                CALL NOW: 0300-9317148
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
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
    </div>
  );
}

export default page;