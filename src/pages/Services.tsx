import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Code,
  Search,
  Users,
  TrendingUp,
  Palette,
  Video,
  Sparkles,
  BarChart3,
  Check,
  ArrowRight,
  MessageSquare,
  FileText,
  Mail,
  Zap,
  Globe,
  Settings,
  ChevronDown
} from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  setCurrentPage: (page: string) => void;
  setSelectedService?: (svc: string) => void;
}

export default function Services({ setCurrentPage, setSelectedService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Development", "SEO & SMM", "Advertising", "Branding & Design", "Video & Content", "AI & Consulting"];

  const filteredServices = selectedCategory === "All"
    ? SERVICES
    : SERVICES.filter(svc => svc.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Development": return <Code className="w-4 h-4" />;
      case "SEO & SMM": return <Search className="w-4 h-4" />;
      case "Advertising": return <TrendingUp className="w-4 h-4" />;
      case "Branding & Design": return <Palette className="w-4 h-4" />;
      case "Video & Content": return <Video className="w-4 h-4" />;
      case "AI & Consulting": return <Sparkles className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getServiceIcon = (name: string, sizeClass = "w-6 h-6") => {
    switch (name) {
      case "Code": return <Code className={sizeClass} />;
      case "Search": return <Search className={sizeClass} />;
      case "Users": return <Users className={sizeClass} />;
      case "TrendingUp": return <TrendingUp className={sizeClass} />;
      case "Palette": return <Palette className={sizeClass} />;
      case "Video": return <Video className={sizeClass} />;
      case "Sparkles": return <Sparkles className={sizeClass} />;
      default: return <BarChart3 className={sizeClass} />;
    }
  };

  const handleBookService = (serviceTitle: string) => {
    if (setSelectedService) {
      setSelectedService(serviceTitle);
    }
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Our Services | CSY DIGITAL MARKETING - SEO, Web Design & More</title>
        <meta name="description" content="Explore CSY Digital Marketing's premium services: web development, SEO, social media marketing, paid advertising, brand design, video content, and AI consulting." />
        <meta name="keywords" content="digital marketing services, SEO services, web design, social media marketing, paid ads, brand design, video editing, AI consulting" />
      </Helmet>
      <div id="services-page" className="text-white min-h-screen pt-28 pb-20 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====================================
            PAGE HEADER
            ==================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Our Digital Toolbox
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mt-6">
            Engineered Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Capabilities.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            We operate under clear SLAs, optimizing conversions and ensuring your brand commands attention organically and via paid channels.
          </p>
        </div>

        {/* ====================================
            CATEGORY FILTER SELECTOR
            ==================================== */}
        <div id="categories-tabs" className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                id={`cat-btn-${cat.replace(/\s+/g, "-")}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-3 rounded-full font-display font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* ====================================
            SERVICES GRID
            ==================================== */}
        <motion.div
          id="services-items-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => (
              <motion.div
                id={`svc-card-${svc.id}`}
                key={svc.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 rounded-3xl bg-[#0B0F19B0] border border-white/10 hover:border-cyan-500/35 overflow-hidden backdrop-blur-md transform transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Visual hover background subtle gradient */}
                <div className="absolute -inset-px bg-gradient-to-br from-blue-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-blue-600/10 text-cyan-400 border border-blue-500/10 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500">
                      {getServiceIcon(svc.icon)}
                    </div>
                    {svc.badge && (
                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-semibold tracking-wide border border-cyan-400/20">
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-6 block">
                    {svc.category}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Feature Sub-items list */}
                  <div className="mt-8 space-y-3 pt-6 border-t border-white/5">
                    <span className="text-xs font-semibold text-gray-300 tracking-wider block">INCLUDED DELIVERABLES:</span>
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => handleBookService(svc.title)}
                    className="w-full group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-sans text-xs sm:text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:border-transparent transition-all duration-300"
                  >
                    <span>Book Service Consultation</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ====================================
            SERVICES CALL-OUT BANNER
            ==================================== */}
        <div id="services-banner" className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/30 to-cyan-950/30 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-[-30px] left-[-30px] w-48 h-48 rounded-full blur-[80px] bg-blue-600/10 pointer-events-none" />
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">Need a Custom Tailored Retainer Strategy?</h3>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Have a highly specialized B2B software model or local SEO requirement that is outside our core tiered structure? Sumanth Csy and our team can build a custom SLA.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
              onClick={() => handleBookService("Custom Strategy Retainer")}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-sm text-white shadow-md hover:scale-105 active:scale-98 transition-all"
            >
              Get Custom Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
