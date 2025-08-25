// src/pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/about/Director.webp";

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
      className="scroll-mt-20 bg-white text-gray-900 py-16 px-6 md:px-20"
    >
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        About
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
        data-aos="fade-up"
      >
        {/* 🖼️ Image First - Always First on all screens */}
        <div className="order-1 md:order-1 flex justify-center" data-aos="fade-right">
          <div className="overflow-hidden rounded-xl shadow-lg w-full max-w-sm md:max-w-md bg-white transition-transform duration-500 ease-in-out hover:scale-105">
            <img
              src={aboutImg}
              alt="Chandra Vikas - Director of SmartProCare with 20+ years real estate experience"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* ℹ️ About Text - Second in order */}
        <div className="order-2 md:order-2" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">About Smartpro Care</h3>
          <p className="text-base leading-relaxed text-gray-900">
            SmartProCare is your trusted partner for smart digital solutions. With over 5 years of experience, we specialize in:
            <ul className="list-disc pl-5 mt-2">
              <li>🚀 Website Development</li>
              <li>📲 Mobile Apps</li>
              <li>🧠 Custom CRM Software</li>
              <li>🏘️ Real Estate Portals & Landing Pages</li>
            </ul>
            <br />
            From idea to execution, we build fast, scalable, and ROI-driven platforms tailored to your business needs. Whether you're in real estate, services, or startups — we help you grow smarter, faster.
          </p>
        </div>

        {/* 💡 Why Choose CRM - Always Last */}
        <div className="order-3 md:order-3" data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Our CRM?</h3>
          <p className="text-base leading-relaxed text-gray-900">
            Backed by 20+ years of real estate experience from Chandra Vikas, our CRM is built for property professionals who want simplicity, speed, and security.
            <br /><br />
            Built using Spring Boot + React with a responsive Tailwind UI, it delivers smooth performance and a powerful feature set:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>📍 Instant Notifications for every new property, lead, note, or update</li>
            <li>📞 Upload Calling Data and track live remarks in real-time</li>
            <li>🏘️ All-in-One Property, Lead & Client Management</li>
            <li>👥 Role-Based Access Control for secure user management</li>
            <li>🔐 Dedicated Data Spaces (per business)</li>
            <li>🛡️ JWT Authentication for secure login</li>
            <li>⚡ Real-Time Sync & Auto-Updates</li>
          </ul>
          <p className="mt-3">
            Our CRM combines industry knowledge with cutting-edge technology, delivering a secure, scalable, and intelligent solution for your business growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
