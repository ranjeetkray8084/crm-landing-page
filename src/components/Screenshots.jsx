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
      className="scroll-mt-20 bg-white text-gray-900 py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Screenshots
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {screenshots.map((shot, index) => (
          <div
            key={index}
            className="group bg-gray-100 rounded-xl shadow-lg p-6 transform-gpu transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">{shot.title}</h3>

            <div className="h-[260px] overflow-hidden flex items-center justify-center">
              <img
                src={shot.image}
                alt={`LeadsTracker CRM ${shot.title} - ${shot.description.substring(0, 100)}...`}
                className="w-full h-full object-contain pointer-events-none"
                loading="lazy"
              />
            </div>

            <p className="text-gray-700 text-center mt-4">{shot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screenshots;
