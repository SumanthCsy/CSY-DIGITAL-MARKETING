import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  Quote,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Users,
  MessageCircle,
  ArrowRight,
  User
} from "lucide-react";
import { TESTIMONIALS, FAQS } from "../data";

interface TestimonialsFAQProps {
  setCurrentPage: (page: string) => void;
}

export default function TestimonialsFAQ({ setCurrentPage }: TestimonialsFAQProps) {
  const [activeFAQCategory, setActiveFAQCategory] = useState<string>("All");
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>(FAQS[0].id);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);

  const faqCategories = ["All", "General", "Services", "Pricing", "Process"];

  const filteredFAQs = activeFAQCategory === "All"
    ? FAQS
    : FAQS.filter(faq => faq.category === activeFAQCategory);

  const handleToggleFAQ = (id: string) => {
    setExpandedFAQId(expandedFAQId === id ? null : id);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div id="testimonials-faq-page" className="text-white min-h-screen pt-28 pb-20 bg-[#0F172A] relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-[15%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[50%] h-[50%] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====================================
            PAGE HEADER
            ==================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Client Success & FAQs
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mt-6">
            Trusted by Leaders, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Proven by Results.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Hear directly from the corporate directors and startup founders scaling with CSY Digital Marketing campaigns and high-performance React platforms.
          </p>
        </div>

        {/* ====================================
            CLIENT TESTIMONIALS CAROUSEL
            ==================================== */}
        <div id="testimonials-carousel-block" className="mb-24 py-12 border-b border-white/5">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">User Reviews</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">What Our Clients Say</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {TESTIMONIALS.filter((_, idx) => idx === activeTestimonialIdx).map((item) => (
                <motion.div
                  id={`testimonial-card-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 sm:p-12 rounded-3xl bg-[#0B0F19B0] border border-white/15 backdrop-blur-md relative shadow-2xl overflow-hidden"
                >
                  {/* Watermark Quote Icon */}
                  <div className="absolute top-8 right-8 text-cyan-400/10 pointer-events-none">
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
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.role} • {item.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Slider Navigation controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                id="testimonial-prev-btn"
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
                    id={`testimonial-dot-${idx}`}
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
                id="testimonial-next-btn"
                onClick={handleNextTestimonial}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ====================================
            ANIMATED ACCORDION FAQ BLOCK
            ==================================== */}
        <div id="faq-accordions-block" className="py-12 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Clear Answers</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">Frequently Asked Questions</h2>
          </div>

          {/* Category Selector Tabs */}
          <div id="faq-categories" className="flex flex-wrap justify-center gap-2 mb-10">
            {faqCategories.map((cat) => {
              const isActive = activeFAQCategory === cat;
              return (
                <button
                  id={`faq-cat-${cat}`}
                  key={cat}
                  onClick={() => setActiveFAQCategory(cat)}
                  className={`px-4.5 py-2 rounded-full font-display font-semibold text-xs transition-all border ${
                    isActive
                      ? "bg-white/5 border-cyan-400/40 text-cyan-400 shadow-sm"
                      : "bg-transparent border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {cat} FAQs
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion List */}
          <div id="faq-list-container" className="max-w-3xl mx-auto space-y-4">
            {filteredFAQs.map((faq) => {
              const isExpanded = expandedFAQId === faq.id;
              return (
                <div
                  id={`faq-item-${faq.id}`}
                  key={faq.id}
                  className="rounded-2xl bg-[#0B0F19B0] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-500/15"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => handleToggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    <span className="shrink-0 p-1 rounded-lg bg-white/5 text-cyan-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`faq-content-panel-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================
            FAQ CTA BLOCK
            ==================================== */}
        <div id="faq-cta" className="text-center mt-16 max-w-xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8">
          <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold text-white">Still Have Unanswered Questions?</h3>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            Sumanth Csy and our team are available on WhatsApp and email daily. Reach out directly for an immediate reply.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="group mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-xs text-white hover:scale-105 active:scale-98 transition-all"
          >
            <span>Ask Us On WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}
