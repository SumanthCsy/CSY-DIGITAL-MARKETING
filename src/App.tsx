import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import TestimonialsFAQ from "./pages/TestimonialsFAQ";
import Contact from "./pages/Contact";
import Logo from "./components/Logo";
import { Phone, MessageCircle } from "lucide-react";

export default function App() {
  // Current active view state: home, about, services, portfolio, pricing, testimonials, contact
  const [currentPage, setCurrentPage] = useState<string>("home");

  // Shared state to allow prefilled service parameter selection when clicking CTAs
  const [selectedService, setSelectedService] = useState<string>("");

  // Loading Screen State
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  // Pre-loader progress indicator loop
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 400); // Small delay for visual completion
          return 100;
        }
        // Organic exponential-like slowing progression
        const increment = Math.max(1, Math.floor((100 - prev) * 0.15));
        return prev + increment;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Synchronize hash paths if users manually interact or reload
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "about", "services", "portfolio", "pricing", "testimonials", "contact"].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Trigger on mount

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash path whenever page changes
  useEffect(() => {
    if (!isLoading) {
      window.location.hash = currentPage;
    }
  }, [currentPage, isLoading]);

  // Render active page component inside transition wrapper
  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "services":
        return (
          <Services
            setCurrentPage={setCurrentPage}
            setSelectedService={setSelectedService}
          />
        );
      case "portfolio":
        return <Portfolio />;
      case "pricing":
        return (
          <Pricing
            setCurrentPage={setCurrentPage}
            setSelectedService={setSelectedService}
          />
        );
      case "testimonials":
        return <TestimonialsFAQ setCurrentPage={setCurrentPage} />;
      case "contact":
        return (
          <Contact
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div id="app-root-container" className="bg-[#0F172A] min-h-screen relative flex flex-col justify-between selection:bg-cyan-500/35 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* ====================================
              PREMIUM FIRST-LOAD SCREEN
              ==================================== */
          <motion.div
            id="initial-app-preloader"
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-[#090F19] flex flex-col items-center justify-center px-4"
          >
            <div className="flex flex-col items-center max-w-sm w-full space-y-8">
              {/* Logo icon with glow */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl animate-pulse" />
                <Logo size="md" showText={false} className="relative z-10" />
              </motion.div>

              {/* Company & Tagline loading names */}
              <div className="text-center space-y-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-white uppercase">
                  CSY DIGITAL MARKETING
                </h2>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  We Build Brands That Grow
                </p>
              </div>

              {/* Progress Bar & Percentage indicator */}
              <div className="w-full space-y-3 pt-4">
                <div className="flex justify-between items-baseline text-xs font-bold text-gray-500 font-mono">
                  <span>SYSTEM INITIALIZATION</span>
                  <span className="text-cyan-400">{loadingProgress}%</span>
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-500"
                    style={{ width: `${loadingProgress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>

                <div className="text-[10px] text-gray-500 tracking-wider uppercase text-center font-semibold">
                  DEVELOPED BY @SUMANTH CSY • CSY TECH SOLUTIONS
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ====================================
              MAIN DIGITAL MARKETING WEBSITE
              ==================================== */
          <motion.div
            id="main-website-wrapper"
            key="website"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen justify-between relative"
          >
            {/* Nav sticky menu bar */}
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* Core Page view inside animated fade-in grid */}
            <main id="main-content-area" className="grow">
              <AnimatePresence mode="wait">
                <motion.div
                  id={`page-transition-wrapper-${currentPage}`}
                  key={currentPage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderPageContent()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Global Sticky Footer branding info */}
            <Footer setCurrentPage={setCurrentPage} />

            {/* Global Floating Quick Action Buttons on All Screens */}
            <div id="global-floating-contact-actions" className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-[99] pointer-events-auto">
              {/* Direct Voice Call Button */}
              <a
                id="floating-call-btn"
                href="tel:+917702685262"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group relative"
                aria-label="Direct Call Sumanth"
              >
                <span className="absolute right-16 bg-slate-900/95 text-white text-xs font-bold px-3 py-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
                  Call: +91 77026 85262
                </span>
                <Phone className="w-5.5 h-5.5 animate-pulse" />
              </a>

              {/* Direct WhatsApp Chat Button */}
              <a
                id="floating-whatsapp-btn"
                href="https://wa.me/917702685262?text=Hi%20Sumanth,%20I'm%20interested%20in%20digital%20marketing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group relative"
                aria-label="Chat on WhatsApp"
              >
                <span className="absolute right-16 bg-slate-900/95 text-white text-xs font-bold px-3 py-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
                  Chat on WhatsApp
                </span>
                <MessageCircle className="w-6 h-6 fill-current" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
