// src/pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 text-gray-900 py-20 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '6s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Geometric patterns */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-300/30 rounded-lg transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-green-300/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-indigo-300/30 rounded-lg transform rotate-12 animate-pulse" style={{animationDelay: '5s'}}></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 mb-4">
            ✨ About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how SmartProCare combines innovation with expertise to deliver cutting-edge solutions that transform businesses.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"
          data-aos="fade-up"
        >
        {/* ℹ️ About Text - First in order */}
          <div className="order-1 md:order-1 bg-white/80 p-10 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 flex flex-col h-full relative overflow-hidden" data-aos="fade-up" style={{backfaceVisibility: 'hidden', transform: 'translateZ(0)'}}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/3 to-cyan-500/5 opacity-60 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10" style={{textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased'}}>
          <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            About Smartpro Care
          </h3>
          <p className="text-base leading-relaxed text-gray-800 mb-4">
            SmartProCare is your trusted partner for smart digital solutions. With over 5 years of experience, we specialize in:
            <ul className="space-y-2 mt-4 mb-4">
              <li className="flex items-center gap-3 p-3 bg-white bg-opacity-60 rounded-lg border border-blue-300">
                <span className="text-xl">🚀</span>
                <span className="font-medium text-gray-800">Website Development</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-white bg-opacity-60 rounded-lg border border-blue-300">
                <span className="text-xl">📲</span>
                <span className="font-medium text-gray-800">Mobile Apps</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-white bg-opacity-60 rounded-lg border border-blue-300">
                <span className="text-xl">🧠</span>
                <span className="font-medium text-gray-800">Custom CRM Software</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-white bg-opacity-60 rounded-lg border border-blue-300">
                <span className="text-xl">🏠️</span>
                <span className="font-medium text-gray-800">Real Estate Portals & Landing Pages</span>
              </li>
            </ul>
          </p>
          <p className="text-base leading-relaxed text-gray-800 mt-4 p-4 bg-white bg-opacity-60 rounded-lg border-l-4 border-blue-500">
            <span className="font-semibold text-blue-800">From idea to execution</span>, we build fast, scalable, and ROI-driven platforms tailored to your business needs. Whether you're in real estate, services, or startups — we help you grow smarter, faster.
          </p>
          
          <div className="mt-6 space-y-4">
            <h4 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Our Mission
            </h4>
            <p className="text-base leading-relaxed text-gray-700 p-3 bg-blue-50 rounded-lg">
              To empower businesses with innovative digital solutions that drive growth, enhance productivity, and deliver exceptional user experiences.
            </p>
            
            <h4 className="text-xl font-semibold text-blue-800 flex items-center gap-2 mt-4">
              <span className="text-2xl">⭐</span>
              Why Choose Us?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-white bg-opacity-70 rounded-lg border border-blue-200">
                <span className="text-lg">✅</span>
                <span className="text-sm font-medium text-gray-800">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white bg-opacity-70 rounded-lg border border-blue-200">
                <span className="text-lg">🚀</span>
                <span className="text-sm font-medium text-gray-800">Fast Development</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white bg-opacity-70 rounded-lg border border-blue-200">
                <span className="text-lg">💡</span>
                <span className="text-sm font-medium text-gray-800">Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white bg-opacity-70 rounded-lg border border-blue-200">
                <span className="text-lg">🎯</span>
                <span className="text-sm font-medium text-gray-800">ROI Focused</span>
              </div>
            </div>
            </div>
            </div>
          </div>

          {/* 💡 Why Choose CRM - Second in order */}
          <div className="order-2 md:order-2 bg-white/80 p-10 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 flex flex-col h-full relative overflow-hidden" data-aos="fade-left" style={{backfaceVisibility: 'hidden', transform: 'translateZ(0)'}}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/3 to-teal-500/5 opacity-60 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10" style={{textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased'}}>
          <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            Why Choose Our CRM?
          </h3>
          <p className="text-base leading-relaxed text-gray-800 mb-4 p-4 bg-white bg-opacity-60 rounded-lg border-l-4 border-green-500">
            <span className="font-semibold text-green-800">Backed by 20+ years of real estate experience</span> from Smartprocare, our CRM is built for property professionals who want simplicity, speed, and security.
          </p>
          <p className="text-base leading-relaxed text-gray-800 mb-6">
            Built using <span className="font-semibold text-green-700">Spring Boot + React</span> with a responsive Tailwind UI, it delivers smooth performance and a powerful feature set:
          </p>
          <ul className="space-y-3 mt-4">
            <li className="flex items-start gap-3 p-4 bg-white bg-opacity-70 rounded-lg border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl mt-1">📍</span>
              <span className="font-medium text-gray-800">Instant Notifications for every new property, lead, note, or update</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-white bg-opacity-70 rounded-lg border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl mt-1">📞</span>
              <span className="font-medium text-gray-800">Upload Calling Data and track live remarks in real-time</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-white bg-opacity-70 rounded-lg border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl mt-1">🏠️</span>
              <span className="font-medium text-gray-800">All-in-One Property, Lead & Client Management</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-white bg-opacity-70 rounded-lg border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl mt-1">👥</span>
              <span className="font-medium text-gray-800">Role-Based Access Control for secure user management</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-white bg-opacity-70 rounded-lg border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl mt-1">🔐</span>
              <span className="font-medium text-gray-800">Dedicated Data Spaces (per business)</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-white bg-opacity-70 rounded-lg border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl mt-1">🛡️</span>
              <span className="font-medium text-gray-800">JWT Authentication for secure login</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-white bg-opacity-70 rounded-lg border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl mt-1">⚡</span>
              <span className="font-medium text-gray-800">Real-Time Sync & Auto-Updates</span>
            </li>
          </ul>
          <p className="mt-6 text-base leading-relaxed text-gray-800 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-l-4 border-green-500">
            <span className="font-semibold text-green-800">Our CRM combines industry knowledge with cutting-edge technology</span>, delivering a secure, scalable, and intelligent solution for your business growth.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
