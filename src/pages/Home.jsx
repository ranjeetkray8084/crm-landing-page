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
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Floating 3D Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" 
             style={{animation: 'pulse 6s ease-in-out infinite'}}></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-lg opacity-30 animate-pulse" 
             style={{animation: 'pulse 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-15 animate-pulse" 
             style={{animation: 'pulse 10s ease-in-out infinite'}}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-25 animate-pulse" 
             style={{animation: 'pulse 7s ease-in-out infinite'}}></div>
      </div>
      
      {/* 3D Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center top'
        }}></div>
      </div>
      
      {/* SEO Head Component */}
      <SEOHead 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        structuredData={structuredData}
      />

      {/* Content with 3D transforms */}
      <div className="relative z-10">
        <div className="transform-gpu" style={{
          transformStyle: 'preserve-3d'
        }}>
          <Header />
          <Hero />
          <div className="transform transition-all duration-1000 hover:scale-[1.01]" style={{
            transformStyle: 'preserve-3d'
          }}>
            <Features />
          </div>
          <div className="transform transition-all duration-1000 hover:scale-[1.01]" style={{
            transformStyle: 'preserve-3d'
          }}>
            <Screenshots />
          </div>
          <div className="transform transition-all duration-1000 hover:scale-[1.01]" style={{
            transformStyle: 'preserve-3d'
          }}>
            <About />
          </div>
          <div className="transform transition-all duration-1000 hover:scale-[1.01]" style={{
            transformStyle: 'preserve-3d'
          }}>
            <TrustedBy />
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
