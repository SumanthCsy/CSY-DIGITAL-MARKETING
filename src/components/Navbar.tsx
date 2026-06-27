import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172AC0] backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div id="navbar-inner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          id="nav-logo"
          onClick={() => handleNavClick("home")}
          className="cursor-pointer"
        >
          <Logo size="sm" showText={true} />
        </div>

        {/* Desktop Navigation links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                id={`nav-link-${link.id}`}
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 select-none ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Background active pill using Framer Motion */}
                {isActive && (
                  <motion.span
                    id={`active-pill-${link.id}`}
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button (Desktop) */}
        <div id="nav-actions-desktop" className="hidden md:block">
          <button
            id="nav-cta-btn"
            onClick={() => handleNavClick("contact")}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            {/* Glossy overlay effect */}
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Get In Touch</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div id="nav-mobile-toggle" className="md:hidden flex items-center">
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0F172A] border-b border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div id="mobile-nav-inner" className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    id={`mobile-link-${link.id}`}
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-sans text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-white/5 text-cyan-400 border-l-4 border-cyan-400 pl-3"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`} />
                  </button>
                );
              })}
              <div id="mobile-nav-cta-container" className="pt-4 px-4">
                <button
                  id="mobile-cta-btn"
                  onClick={() => handleNavClick("contact")}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-sans text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
