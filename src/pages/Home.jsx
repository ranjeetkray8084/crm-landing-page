// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Screenshots from "../components/Screenshots";
import About from "../components/About";  
import TrustedBy from "../components/TrustedBy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import { seo } from "../seo-config";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": seo.businessName,
    "applicationCategory": seo.applicationCategory,
    "operatingSystem": seo.operatingSystem,
    "description": seo.description,
    "url": seo.url,
    "author": {
      "@type": "Organization",
      "name": seo.author
    },
    "offers": {
      "@type": "Offer",
      "category": "Real Estate CRM Software"
    },
    "featureList": [
      "Lead Management",
      "Property Management", 
      "Follow-up Tracking",
      "Multi-tenant Dashboard",
      "Notes Management",
      "User Management"
    ]
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* SEO Head Component */}
      <SEOHead 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        structuredData={structuredData}
      />

      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <About />
      <TrustedBy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
