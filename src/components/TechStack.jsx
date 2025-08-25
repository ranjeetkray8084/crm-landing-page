import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TechStack() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const stack = [
    {
      name: "React",
      description:
        "A powerful JavaScript library for building fast and interactive user interfaces. It's component-based and great for SPAs.",
    },
    {
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework that allows rapid UI development with responsive design and dark/light themes.",
    },
    {
      name: "Spring Boot",
      description:
        "A backend framework based on Java that simplifies the creation of stand-alone, production-grade applications.",
    },
    {
      name: "Java",
      description:
        "A high-level, class-based, object-oriented programming language used for scalable backend systems.",
    },
    {
      name: "MySQL",
      description:
        "An open-source relational database management system that stores all your application data reliably.",
    },
    {
      name: "JWT (JSON Web Token)",
      description:
        "Used for securely transmitting information between parties — ideal for user authentication and authorization.",
    },
    {
      name: "Vite",
      description:
        "A lightning-fast development server and build tool optimized for modern frontend frameworks like React.",
    },
  ];

  return (
    <section id="tech" className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Built With
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((tech, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-100 p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-xl font-semibold text-gray-800 mb-2">
                {tech.name}
              </div>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
