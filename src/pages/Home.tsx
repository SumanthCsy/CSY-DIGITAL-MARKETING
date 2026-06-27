import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Search,
  Users,
  TrendingUp,
  Palette,
  Video,
  Sparkles,
  BarChart3,
  ArrowRight,
  Shield,
  Zap,
  Award,
  Clock,
  Smartphone,
  CheckCircle,
  Play,
  ArrowUpRight,
  Star,
  Quote,
  User
} from "lucide-react";
import { SERVICES, STATS, BRAND_PARTNERS, TESTIMONIALS } from "../data";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

// Interactive Count-up helper component for Statistics Section
function AnimatedCounter({ value, duration = 1500 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const subtitles = [
    "Website Development",
    "Digital Marketing",
    "SEO Optimization",
    "Brand Identity Design",
    "Video Editing",
    "Social Media Management",
  ];

  // Rotate hero subtitles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Extract icon component based on string name
  const renderIcon = (name: string, sizeClass = "w-6 h-6") => {
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

  // Why choose us items
  const benefits = [
    { icon: <Zap className="w-5 h-5" />, title: "Fast Delivery", text: "Optimized pipelines ensuring projects launch within 1 to 4 weeks max." },
    { icon: <Award className="w-5 h-5" />, title: "Results Driven", text: "We connect impressions to actual leads, revenue, and high CRO." },
    { icon: <Palette className="w-5 h-5" />, title: "Professional Design", text: "Bespoke glassmorphism layouts designed by our agency leads." },
    { icon: <Code className="w-5 h-5" />, title: "Latest Technology", text: "Built with performant React 19, tailwind systems, and Next.js." },
    { icon: <Clock className="w-5 h-5" />, title: "24x7 Core Support", text: "Constant communications via dedicated customer WhatsApp channels." },
    { icon: <Search className="w-5 h-5" />, title: "SEO Friendly", text: "Flawless site structure guaranteeing perfect indexation on Google SERP." },
    { icon: <Smartphone className="w-5 h-5" />, title: "Fully Responsive", text: "Pixel-perfect visual renderings across Desktop, Tablet, and Mobile." },
    { icon: <Shield className="w-5 h-5" />, title: "Affordable Transparency", text: "Tiered monthly packages or custom estimates. No hidden overheads." }
  ];

  return (
    <div id="home-page" className="text-white relative overflow-hidden bg-[#0F172A]">
      {/* CSS For Infinite Marquee Loop */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .glow-sphere-1 {
          background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(15,23,42,0) 70%);
        }
        .glow-sphere-2 {
          background: radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(15,23,42,0) 70%);
        }
      `}</style>

      {/* Hero Visual Glow Backdrops */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] glow-sphere-1 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] glow-sphere-2 pointer-events-none" />

      {/* ====================================
          1. HERO SECTION
          ==================================== */}
      <section id="hero-section" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          {/* Tagline / Micro Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>We Build Brands That Grow</span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400"
          >
            We Create Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400">Grow Businesses.</span>
          </motion.h1>

          {/* Animated Cycling Subtitle */}
          <div className="h-12 mt-6 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSubtitleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-sans text-xl sm:text-2xl text-cyan-400 font-semibold tracking-wide"
              >
                {subtitles[currentSubtitleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            A world-class digital marketing and technology agency. We design and launch premium websites, optimize SEO organic pipelines, and deploy conversion-focused ads.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 active:scale-98 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <span>Get Free Growth Proposal</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleNavClick("services")}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-98 transition-all duration-300"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </motion.div>

          {/* Interactive Floating Micro Elements */}
          <div className="absolute top-1/4 left-10 md:left-24 animate-bounce duration-1000 opacity-20 pointer-events-none">
            <Code className="w-8 h-8 text-blue-500" />
          </div>
          <div className="absolute bottom-1/4 right-10 md:right-24 animate-pulse opacity-20 pointer-events-none">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* ====================================
          2. CORE CAPABILITIES (Marquee)
          ==================================== */}
      <section id="capabilities-marquee" className="py-10 bg-[#0B0F19] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Core Growth Capabilities
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          {/* Left/Right mask gradients for premium look */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap gap-12 py-2">
            {/* Double the list for infinite seamless scrolling effect */}
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse" />
                <span className="text-white font-display text-sm sm:text-base font-bold tracking-wider">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          3. ABOUT SUMMARY / STATISTICS
          ==================================== */}
      <section id="about-teaser-stats" className="py-24 bg-[#0F172A] border-b border-white/5 relative">
        <div className="absolute right-10 top-1/3 w-80 h-80 rounded-full blur-[120px] bg-blue-600/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Who We Are</span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
                We bridge the gap between creative visual artistry and hard engineering metrics.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                CSY Digital Marketing is a premier agency focused on accelerating growth. We do not just build gorgeous layouts; we design customer acquisition channels. Our structures are optimized to convert cold traffic into high-value client listings.
              </p>
              <button
                onClick={() => handleNavClick("about")}
                className="group inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
              >
                <span>Read Sumanth's Vision & Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Core Interactive Statistics Counter Rows */}
          <div id="stats-container" className="flex justify-center items-center pt-12 border-t border-white/5">
            {STATS.map((stat) => (
              <div
                id={`stat-card-${stat.id}`}
                key={stat.id}
                className="p-8 max-w-md w-full rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm text-center transform transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
              >
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-cyan-400 tracking-tight flex items-center justify-center gap-1">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="text-lg font-bold text-white mt-3 font-sans">{stat.label}</div>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          4. FEATURED SERVICES SHOWCASE
          ==================================== */}
      <section id="featured-services" className="py-24 bg-[#0B0F19] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Premium Capabilities</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Engineered for Omnichannel Supremacy
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              We provide the exact technical and creative toolkit required to outpace competitors and acquire high-intent B2B and B2C clients.
            </p>
          </div>

          <div id="featured-services-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((svc) => (
              <div
                id={`featured-svc-${svc.id}`}
                key={svc.id}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Glowing hover card spotlight backdrop */}
                <div className="absolute -inset-px bg-gradient-to-br from-blue-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-blue-600/10 text-cyan-400 border border-blue-500/10 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500">
                      {renderIcon(svc.icon, "w-6 h-6")}
                    </div>
                    {svc.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-semibold">
                        {svc.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mt-6 group-hover:text-cyan-400 transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                    {svc.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {svc.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/5 mt-8 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span>LEARN MORE DETAILS</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNavClick("services")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 font-sans text-sm font-bold text-white transition-all duration-300 hover:scale-105"
            >
              <span>View All 30+ Premium Offerings</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================
          5. WHY CHOOSE US SECTION
          ==================================== */}
      <section id="why-choose-us" className="py-24 bg-[#0F172A] relative">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-[150px] bg-cyan-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Unmatched Value</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Built on High Performance Principles
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              We design campaigns and platforms with absolute pixel precision, guaranteed delivery SLAs, and full transparent dashboard metrics.
            </p>
          </div>

          <div id="benefits-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                id={`benefit-card-${idx}`}
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-400 inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          TESTIMONIALS SLIDESHOW SECTION
          ==================================== */}
      <section id="home-testimonials-section" className="py-24 bg-[#0B0F19] border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Happy Clients</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Stories of Real Growth
            </h2>
            <p className="text-gray-400 mt-4 text-base sm:text-lg">
              Read how CSY Digital Marketing helps businesses, founders, and startups unlock organic traffic and high-performance branding.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {TESTIMONIALS.filter((_, idx) => idx === activeTestimonialIdx).map((item) => (
                <motion.div
                  id={`home-testimonial-card-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative shadow-2xl overflow-hidden"
                >
                  {/* Watermark Quote Icon */}
                  <div className="absolute top-8 right-8 text-cyan-400/5 pointer-events-none">
                    <Quote className="w-24 h-24 stroke-[1.5]" />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                    {/* User icon with double ring */}
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-[#1E293B] flex items-center justify-center text-cyan-400 border border-[#0F172A]">
                          <User className="w-10 h-10 stroke-[1.5]" />
                        </div>
                      </div>
                    </div>

                    {/* Review content */}
                    <div className="space-y-4 text-center sm:text-left">
                      {/* Star Rating */}
                      <div className="flex justify-center sm:justify-start gap-1 text-cyan-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>

                      <p className="text-base sm:text-lg text-gray-200 italic leading-relaxed">
                        "{item.quote}"
                      </p>

                      <div>
                        <h4 className="font-display text-lg font-bold text-white">{item.name}</h4>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.role || 'Client'} • {item.company || 'Verified Partner'}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Slider Navigation controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                id="home-testimonial-prev-btn"
                onClick={handlePrevTestimonial}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ArrowRight className="w-5 h-5 transform rotate-180" />
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    id={`home-testimonial-dot-${idx}`}
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === activeTestimonialIdx ? "bg-cyan-400 w-6" : "bg-white/20"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                id="home-testimonial-next-btn"
                onClick={handleNextTestimonial}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================
          6. CONVERSION CALL-TO-ACTION BLOCK
          ==================================== */}
      <section id="cta-block-home" className="py-20 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F19]/60 backdrop-blur-sm" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ready to Accelerate Your Brand’s Expansion?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
            Connect with Sumanth Csy and our senior digital strategists today. We will conduct a free technical SEO and ad-funnel audit of your current digital setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 hover:scale-105 active:scale-98 transition-all duration-300"
            >
              Claim Your Free Growth Audit
            </button>
            <button
              onClick={() => handleNavClick("portfolio")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 font-semibold text-white hover:scale-105 transition-all duration-300"
            >
              See Success Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
