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
      const response = await fetch("https://crm.leadstracker.in/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlertMessage("Message sent successfully!");
        setAlertType("success");
        setFormData({ name: "", email: "", message: "" });
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
    <section id="contact" className="scroll-mt-20 bg-white text-gray-900 py-16 px-6 md:px-20">
      {/* Center Alert */}
      {alertMessage && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-md shadow-lg text-white text-center transition-all duration-300
            ${alertType === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {alertMessage}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Address Info (Left Side) */}
        <div
          className="flex-1 bg-gray-50 p-8 rounded-xl shadow-lg text-center md:text-left transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
          <p className="mb-2">
            📍 831, Emaar Emerald Plaza, Sector 65,<br /> Gurugram -122102, Haryana
          </p>
          <p className="mb-2">📞 +91 7827-97-3593</p>
          <p className="mb-2">
            📧{" "}
            <a href="mailto:support@smartprocares.com" className="text-blue-600 underline">
              support@smartprocares.com
            </a>
          </p>
        </div>

        {/* Contact Form (Right Side) */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-100 p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          data-aos="fade-left"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-md transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
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
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
