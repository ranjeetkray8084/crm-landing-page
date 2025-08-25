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
    "Lead Management",
    "Follow-up Tracking",
    "Property Listings",
    "Notes and Remarks",
    "Dashboard",
    "Roles & Access Control",
    "Live Updates on Calling Data"
  ];

  return (
    <section id="features" className="scroll-mt-20 bg-white text-gray-900 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      
    </section>
  );
}

export default Features;
