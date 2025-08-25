import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Helper component for star ratings
const StarRating = ({ rating = 5 }) => (
  <div className="flex text-yellow-400">
    {[...Array(rating)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 4.517 1.48-8.279-6.064-5.828 8.332-1.151L12 .587z" />
      </svg>
    ))}
  </div>
);

// Main Testimonials Component
function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  // Data from your screenshot
  const testimonials = [
    {
      name: "Veena Estates",
      text: "Lead's Transfer helped us increase our efficiency by 80%. Our team now converts leads faster with better coordination!",
    },
    {
      name: "Chitransh Realtos",
      text: "We were drowning in spreadsheets before switching to this CRM. Now everything is streamlined from lead capture to closing.",
    },
    {
      name: "Chitransh Associates",
      text: "The automation features are a game-changer. Everything goes on time, and my sales team is finally organized.",
    },
    {
      name: "Janakraj Group",
      text: "We integrated SmartPro CRM in just one day. The customer support is fantastic and the onboarding experience was super smooth.",
    },
    {
      name: "Tanmay Estates",
      text: "We integrated SmartPro CRM in just one day. The customer support is fantastic and the onboarding experience was super smooth.",
    },
    
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-lg"
              // Alternate animation direction based on index
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    {/* Placeholder for company logo if you have one */}
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <StarRating />
                    </div>
                  </div>
                  <p className="text-gray-600">"{testimonial.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;