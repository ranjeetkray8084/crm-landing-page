import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      icon: "👥",
      title: "Lead Management",
      description: "Efficiently organize and track all your leads in one centralized system with smart categorization.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📅",
      title: "Follow-up Tracking",
      description: "Never miss a follow-up with automated reminders and comprehensive activity tracking.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🏠",
      title: "Property Listings",
      description: "Manage your property portfolio with detailed listings, photos, and comprehensive information.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "📝",
      title: "Notes and Remarks",
      description: "Keep detailed records and personal notes for every lead and property interaction.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📊",
      title: "Dashboard",
      description: "Get a complete overview of your business performance with intuitive analytics and insights.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🔐",
      title: "Roles & Access Control",
      description: "Secure your data with role-based permissions and granular access control for your team.",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: "📞",
      title: "Live Updates on Calling Data",
      description: "Real-time synchronization of call logs, status updates, and communication history.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="scroll-mt-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-900 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4">
            ✨ Core Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make our CRM the perfect solution for real estate professionals. Everything you need to manage leads, properties, and grow your business.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 relative overflow-hidden"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Bottom accent line */}
                <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                
                {/* Arrow icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
