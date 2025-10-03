import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // "success" or "error"

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");
    try {
      const response = await fetch("https://backend.leadstracker.in/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlertMessage("Message sent successfully!");
        setAlertType("success");
        setFormData({ name: "",number:"", email: "", message: "" });
      } else {
        setAlertMessage("Failed to send message. Please try again later.");
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setAlertMessage("Something went wrong. Try again later.");
      setAlertType("error");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setAlertMessage("");
      }, 4000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      {/* Modern Alert */}
      {alertMessage && (
        <div
          className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-2xl shadow-2xl text-white text-center transition-all duration-500 backdrop-blur-sm border border-white/20
            ${alertType === "success" ? "bg-gradient-to-r from-green-500 to-emerald-500" : "bg-gradient-to-r from-red-500 to-pink-500"}`}
          style={{
            boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 20px rgba(59, 130, 246, 0.3)'
          }}
        >
          <div className="flex items-center gap-3">
            {alertType === "success" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
            <span className="font-medium">{alertMessage}</span>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
            📞 Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your real estate business? Get in touch with our team and let's discuss how we can help you grow.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Address Info (Left Side) */}
          <div
            className="flex-1 bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 text-center lg:text-left transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
            data-aos="fade-right"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Get In Touch</h3>
              </div>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 mb-1">Our Office</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      831, Emaar Emerald Plaza, Sector 65,<br />
                      Gurugram -122102, Haryana
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border border-green-100 hover:bg-green-100 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 mb-1">Call Us</p>
                    <a href="tel:+917827973593" className="text-green-600 font-medium hover:text-green-700 transition-colors duration-300">
                      +91 7827-97-3593
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100 hover:bg-purple-100 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 mb-1">Email Us</p>
                    <a href="mailto:support@smartprocares.com" className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300">
                      support@smartprocares.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">⏰</span>
                  <p className="font-semibold text-gray-800">Business Hours</p>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                
                  
                  <p>Wednesday - monday: 9:00 AM - 6:00 PM</p>
                   <p>Tuesday: Closed</p>
     
               
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
            data-aos="fade-left"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-2xl text-white">✉️</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Send Message</h3>
              </div>
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-lg">👤</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 text-gray-800 placeholder-gray-500"
                  />
                </div>
                
                {/* Phone Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-lg">📞</span>
                  </div>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    placeholder="Your Phone Number"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 text-gray-800 placeholder-gray-500"
                  />
                </div>
                
                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-lg">📧</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 text-gray-800 placeholder-gray-500"
                  />
                </div>
                
                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="text-gray-400 text-lg">📝</span>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or ask any questions..."
                    rows="6"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 text-gray-800 placeholder-gray-500 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center justify-center gap-3 relative overflow-hidden"
                style={{
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>🚀 Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
