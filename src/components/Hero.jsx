import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span ref={typedElement}></span>
        </h1>
        <p
          className="text-lg md:text-xl mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          LeadsTracker is a powerful CRM designed for managing leads, follow-ups, properties, and more.
        </p>
        <div
          className="space-x-4"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <a
            href="https://leadstracker.in"
            target="_blank"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
          >
            Live Demo
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
