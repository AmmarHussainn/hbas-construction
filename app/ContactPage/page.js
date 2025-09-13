'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    subject: '',
    message: '',
    urgency: 'normal',
  });

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.contact-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
  };

  const contactMethods = [
    {
      title: 'Phone Consultation',
      subtitle: '24/7 Emergency Support',
      description: 'Immediate Company consultation for urgent construction matters and project emergencies.',
      contact: '0300-9317148',
      hours: '24/7 Available',
      type: 'phone',
    },
    {
      title: 'Office Visit',
      subtitle: 'In-Person Meetings',
      description: 'Schedule a comprehensive consultation at our office for detailed project discussions.',
      contact: 'Karachi, Sindh, Pakistan',
      hours: 'Mon-Fri: 9AM-6PM',
      type: 'location',
    },
    {
      title: 'Email Communication',
      subtitle: 'Document Sharing',
      description: 'Send project documents and detailed inquiries for thorough review and response.',
      contact: 'hbas.and.co@gmail.com',
      hours: 'Response within 24 hours',
      type: 'email',
    },
    {
      title: 'Emergency Hotline',
      subtitle: 'Critical Project Issues',
      description: 'Dedicated line for time-sensitive Company matters and project emergencies.',
      contact: '0300-9317148',
      hours: 'Immediate Response',
      type: 'emergency',
    },
  ];

  const projectTypes = [
    'Government Infrastructure',
    'Commercial Construction',
    'Residential Development',
    'Engineering Projects',
    'Contract Preparation',
    'Dispute Resolution',
    'Other',
  ];

  const officeFeatures = [
    {
      title: 'Strategic Location',
      description: 'Centrally located in Karachi for easy access to clients and government offices.',
      details: ['Easy parking access', 'Public transport nearby', 'Court proximity'],
    },
    {
      title: 'Modern Facilities',
      description: 'Equipped with latest technology for document review and client presentations.',
      details: ['Digital documentation', 'Video conferencing', 'Secure file storage'],
    },
    {
      title: 'Professional Environment',
      description: 'Confidential meeting spaces designed for sensitive Company discussions.',
      details: ['Private meeting rooms', 'Confidential discussions', 'Professional setting'],
    },
    {
      title: 'Document Center',
      description: 'Comprehensive facility for contract review and Company document preparation.',
      details: ['Document preparation', 'Contract analysis', 'Company research'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 md:py-36 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-yellow-600 transform rotate-45"></div>
          <div className="absolute top-60 right-40 w-32 h-32 border border-gray-400 transform -rotate-12"></div>
          <div className="absolute bottom-40 left-1/3 w-28 h-28 border border-yellow-600 transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 border border-gray-400 transform -rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transform transition-all duration-1000 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-8">
              <nav className="flex justify-center space-x-4 text-sm">
                <a href="/" className="text-gray-400 hover:text-yellow-600 transition-colors duration-200">
                  Home
                </a>
                <span className="text-gray-500">/</span>
                <span className="text-yellow-600 font-medium">Contact Us</span>
              </nav>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Contact <span className="text-yellow-600">Us</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to discuss your construction project? Get expert Company consultation from Pakistan's leading
              construction and engineering Consturction specialists.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">24/7</div>
                <div className="text-gray-400 text-sm">Available Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">30+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-gray-400 text-sm">Confidentiality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">500+</div>
                <div className="text-gray-400 text-sm">Projects Handled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className={`contact-item transform transition-all duration-1000 ${
                visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="1"
            >
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Start Your <span className="text-yellow-600">Consultation</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out this form and we'll get back to you within 24 hours with a detailed response.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Company/Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Urgency Level</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent (within 48 hours)</option>
                        <option value="emergency">Emergency (within 24 hours)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                      placeholder="Brief subject of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please provide details about your project, timeline, and specific Company requirements..."
                      required
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-yellow-600 text-black px-8 py-4 text-lg font-bold hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    SEND MESSAGE
                    <svg
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`contact-item transform transition-all duration-1000 ${
                visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="1"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Visit Our <span className="text-yellow-600">Office</span>
                  </h2>

                  <div className="bg-white p-8 rounded-lg shadow-xl mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Address</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div>
                          <p className="text-gray-900 font-medium">Main Office</p>
                          <p className="text-gray-600">Karachi, Sindh, Pakistan</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="text-gray-900 font-medium">Office Hours</p>
                          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                          <p className="text-gray-600">Sunday: Emergency calls only</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {officeFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h4 className="font-semibold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-1">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                            <span className="text-gray-600 text-xs">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}