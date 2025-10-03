import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import dashboardImg from '../assets/screenshort/dashboard.png';
import leadsImg from '../assets/screenshort/leads.png';
import propertyImg from '../assets/screenshort/property.png';
import notesImg from '../assets/screenshort/notes.png';

const Screenshots = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-out-back', 
    });
  }, []);

  const screenshots = [
    {
      title: 'Dashboard',
      description:
        'Clean and intuitive user dashboard that provides a quick overview of leads, follow-ups, and properties at a glance.',
      image: dashboardImg,
    },
    {
      title: 'Leads Management',
      description:
        'Interactive leads display with filtering, searching, and seamless lead assignment. Track source, status, and activity.',
      image: leadsImg,
    },
    {
      title: 'Properties Overview',
      description:
        'Detailed property analytics including location, price, features, and availability. Simplify listing and client matching.',
      image: propertyImg,
    },
    {
      title: 'Notes Overview',
      description:
        'Easily create and manage notes linked to leads, properties, or users. Assign visibility for each note—public for team collaboration or private for personal reference.',
      image: notesImg,
    },
  ];

  return (
    <section
      id="screenshots"
      className="scroll-mt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 py-20 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
            📱 Screenshots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a peek inside our powerful CRM platform. See how our intuitive interface makes managing properties and leads effortless.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl p-6 transform-gpu transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-white/50 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl p-[1px]">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl h-full w-full"></div>
              </div>
              
              {/* Content container */}
              <div className="relative z-10">
                {/* Title with icon */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{shot.title}</h3>
                </div>

                {/* Screenshot container with enhanced styling */}
                <div className="relative mb-6">
                  <div className="overflow-hidden rounded-2xl shadow-inner bg-white border border-gray-200 group-hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={shot.image}
                      alt={`LeadsTracker CRM ${shot.title} - ${shot.description.substring(0, 100)}...`}
                      className="w-full h-auto object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ✨ Live Preview
                  </div>
                </div>

                {/* Description with enhanced styling */}
                <div className="text-center">
                  <p className="text-gray-600 leading-relaxed text-base">{shot.description}</p>
                  
                  {/* Feature highlights */}
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Real-time Updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
