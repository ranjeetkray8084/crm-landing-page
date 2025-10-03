import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        'Simplifying Lead Management for Real Estate Professionals',
        'Manage Leads, Follow-Ups, Properties, and More',
        'Boost Your Real Estate Business with LeadStracker',
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    return () => typed.destroy(); // Clean up
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-purple-900/50"></div>
        </div>
        
        {/* 3D Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 transform-gpu animate-rotate3d-20s transform-3d">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl" style={{
            transform: 'rotateY(45deg) rotateX(45deg)'
          }}></div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 transform-gpu animate-rotate3d-15s transform-3d">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-cyan-500/30 rounded-full blur-2xl" style={{
            transform: 'rotateX(-45deg) rotateZ(45deg)'
          }}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-hero-float-8s"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-300/30 rounded-full animate-hero-float-6s"></div>
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-purple-300/25 rounded-full animate-hero-float-10s"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main content container with 3D effect */}
        <div className="transform-gpu transform-3d perspective-1000">
          {/* 3D Text Container */}
          <div className="mb-8 transform translateZ-50">
            <h1
              className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300 leading-tight"
              data-aos="fade-down"
              data-aos-delay="100"
              style={{
                textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(124, 58, 237, 0.3)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            >
              <span ref={typedElement} className="inline-block transform hover:scale-105 transition-transform duration-300"></span>
            </h1>
          </div>
          
          {/* 3D Description */}
          <div className="mb-12 transform translateZ-30">
            <p
              className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              🚀 LeadsTracker is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">powerful CRM</span> designed for managing leads, follow-ups, properties, and more.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                ⚡ Real-time Updates
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                🎯 Smart Lead Management
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                🛡️ Secure & Scalable
              </div>
            </div>
          </div>
          
          {/* 3D Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center transform translateZ-40"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <a
              href="https://leadstracker.in"
              target="_blank"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-white/20 relative overflow-hidden"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(124, 58, 237, 0.3)'
              }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-2">
                🎯 Live Demo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </span>
            </a>
            
            <a
              href="#contact"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg border-2 border-white/30 hover:border-white/50 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-2">
                📞 Contact Us
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;
