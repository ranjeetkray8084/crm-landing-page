import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Helper component for star ratings
const StarRating = ({ rating = 5 }) => (
  <div className="flex text-yellow-400 gap-1">
    {[...Array(rating)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 fill-current drop-shadow-sm hover:scale-110 transition-transform duration-200"
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
      name: "Chandra Realtors",
      text: "We were drowning in spreadsheets before switching to this CRM. Now everything is streamlined from lead capture to closing.",
    },
    {
      name: "Chitransh Associates",
      text: "The automation features are a game-changer. Everything goes on time, and my sales team is finally organized.",
    },
    {
      name: "Janakraj Group",
      text: "We integrated LeadsTracker CRM in just one day. The customer support is fantastic and the onboarding experience was super smooth.",
    },
    {
      name: "Tanmay Estates",
      text: "Adding leads has never been easier! With LeadsTracker, I can manually add new leads in seconds, assign them to my team, and track every interaction. It’s smooth, fast, and keeps all our data organized under one platform.",
    },
    {
      name: "4s Estates",
      text: "Leadstracker CRM has completely transformed the way we handle our real estate business. Before, managing leads was chaotic and time-consuming, but now everything is streamlined in one place. The interface is clean, easy to use, and my team picked it up instantly",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            🎆 Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful real estate professionals who trust our CRM to grow their business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              // Alternate animation direction based on index
              data-aos={i % 2 === 0 ? "fade-up" : "fade-up"}
              data-aos-delay={i * 100}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="flex flex-col h-full relative z-10">
                <div className="flex-grow">
                  <div className="flex items-center mb-6">
                    {/* Enhanced company logo */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating />
                        <span className="text-sm text-gray-500 font-medium">5.0</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quote icon */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                    </svg>
                  </div>
                  
                  <p className="text-gray-600">"{testimonial.text}"</p>
                  
                  {/* Verified badge */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Verified Client</span>
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
}

export default Testimonials;