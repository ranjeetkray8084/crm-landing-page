import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/apple-touch-icon.png";
import { MdMenu, MdClose } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Check if we're on home page for anchor links
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Header */}
      <header
        className="bg-[#0b0614] text-white p-4 shadow-lg sticky-header w-full backdrop-blur-sm border-b border-gray-800"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Leadrat Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold">LeadsTracker</span>
              <span className="text-xs text-gray-400">
                Track Leads. Close Faster
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 font-medium">
            {isHomePage ? (
              <a href="#hero" className="hover:text-teal-400">
                Home
              </a>
            ) : (
              <Link to="/" className="hover:text-teal-400">
                Home
              </Link>
            )}
            {isHomePage ? (
              <a href="#features" className="hover:text-teal-400">
                Features
              </a>
            ) : (
              <Link to="/#features" className="hover:text-teal-400">
                Features
              </Link>
            )}
            {isHomePage ? (
              <a href="#screenshots" className="hover:text-teal-400">
                Screenshots
              </a>
            ) : (
              <Link to="/#screenshots" className="hover:text-teal-400">
                Screenshots
              </Link>
            )}
            {isHomePage ? (
              <a href="#about" className="hover:text-teal-400">
                About
              </a>
            ) : (
              <Link to="/#about" className="hover:text-teal-400">
                About
              </Link>
            )}
            {isHomePage ? (
              <a href="#contact" className="hover:text-teal-400">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="hover:text-teal-400">
                Contact
              </Link>
            )}
            <Link to="/maps" className="hover:text-teal-400">
              Maps
            </Link>
          </nav>

          {/* Right side: Login + Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Login Button (Visible always) */}
            <a
              href="https://crm.leadstracker.in"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-teal-500 text-teal-400 px-4 py-2 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-200 text-sm"
            >
              Login
            </a>

            {/* Hamburger Icon (Mobile only) */}
            <div
              className="md:hidden text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              {menuOpen ? <MdClose /> : <MdMenu />}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0614] text-white shadow-lg sticky top-[72px] z-40 border-b border-gray-800">
          <div className="flex flex-col items-center space-y-4 py-4">
            {isHomePage ? (
              <a onClick={closeMenu} href="#hero" className="hover:text-teal-400 py-2">
                Home
              </a>
            ) : (
              <Link onClick={closeMenu} to="/" className="hover:text-teal-400 py-2">
                Home
              </Link>
            )}
            {isHomePage ? (
              <a onClick={closeMenu} href="#features" className="hover:text-teal-400 py-2">
                Features
              </a>
            ) : (
              <Link onClick={closeMenu} to="/#features" className="hover:text-teal-400 py-2">
                Features
              </Link>
            )}
            {isHomePage ? (
              <a onClick={closeMenu} href="#screenshots" className="hover:text-teal-400 py-2">
                Screenshots
              </a>
            ) : (
              <Link onClick={closeMenu} to="/#screenshots" className="hover:text-teal-400 py-2">
                Screenshots
              </Link>
            )}
            {isHomePage ? (
              <a onClick={closeMenu} href="#about" className="hover:text-teal-400 py-2">
                About
              </a>
            ) : (
              <Link onClick={closeMenu} to="/#about" className="hover:text-teal-400 py-2">
                About
              </Link>
            )}
            {isHomePage ? (
              <a onClick={closeMenu} href="#contact" className="hover:text-teal-400 py-2">
                Contact
              </a>
            ) : (
              <Link onClick={closeMenu} to="/#contact" className="hover:text-teal-400 py-2">
                Contact
              </Link>
            )}
            <Link onClick={closeMenu} to="/maps" className="hover:text-teal-400 py-2">
              Maps
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
