// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Maps from "../components/Maps"
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
 

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* SEO Head Component */}
   
      <Header />
      <Hero />
      <Maps />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
