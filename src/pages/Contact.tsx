import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Shield,
  MessageCircle
} from "lucide-react";

interface ContactProps {
  selectedService?: string;
  setSelectedService?: (svc: string) => void;
}

export default function Contact({ selectedService = "", setSelectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: selectedService || "Website Development",
    budget: "₹25,000 - ₹50,000",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prefill service dropdown if updated via cross-page navigation state
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const serviceOptions = [
    "Website Development",
    "Website Maintenance & SLA",
    "Technical SEO optimization",
    "Paid Search Ads (Google Ads)",
    "Paid Social Ads (Meta/Instagram)",
    "Instagram/Facebook Page SMM",
    "Logo & Full Branding Overhaul",
    "Video Editing & Explainer Reels",
    "AI Chatbot automation",
    "Custom Growth Consultation"
  ];

  const budgetOptions = [
    "Under ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹3,00,000",
    "₹3,00,000+"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate real database dispatch latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const text = `*New Strategy Audit Request*
-----------------------------
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email}
📞 *Phone:* ${formData.phone || 'N/A'}
🏢 *Company:* ${formData.company || 'N/A'}
🛠️ *Service:* ${formData.service}
💰 *Budget:* ${formData.budget}
📝 *Message:* ${formData.message || 'N/A'}`;

      const waUrl = `https://wa.me/917702685262?text=${encodeURIComponent(text)}`;
      
      // Attempt to open WhatsApp directly
      window.open(waUrl, "_blank", "noopener,noreferrer");

      if (setSelectedService) {
        setSelectedService(""); // reset after submit
      }
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "Website Development",
      budget: "₹25,000 - ₹50,000",
      message: ""
    });
    setIsSuccess(false);
  };

  const whatsappLink = `https://wa.me/917702685262?text=Hi%20Sumanth,%20I'm%20interested%20in%20digital%20marketing%20services%20for%20my%20business.`;

  return (
    <div id="contact-page" className="text-white min-h-screen pt-28 pb-20 bg-[#0F172A] relative overflow-hidden font-sans">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-[10%] left-[-15%] w-[60%] h-[60%] rounded-full blur-[120px] bg-blue-600/5 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[60%] rounded-full blur-[120px] bg-cyan-400/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====================================
            PAGE HEADER
            ==================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Initiate Growth
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mt-6">
            Book Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Strategy Audit.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Let us conduct a complimentary review of your ad account architectures and organic keyword rankings. Zero obligation, high-impact suggestions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ====================================
              LEFT COLUMN: CONTACT INFO & MAP
              ==================================== */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0B0F19B0] border border-white/10 backdrop-blur-md space-y-6">
              <h3 className="font-display text-2xl font-bold text-white">Direct Channels</h3>
              <p className="text-sm text-gray-400">
                Reach out to Sumanth Csy directly. We respond within 2 hours on active working days.
              </p>

              {/* Physical Details list */}
              <div id="physical-details-container" className="space-y-4">
                <a href="mailto:csytechslns@gmail.com" className="flex items-center gap-4 group p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-xl bg-blue-600/15 text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Email CSY Directly</span>
                    <span className="text-sm font-semibold text-white">csytechslns@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+917702685262" className="flex items-center gap-4 group p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-xl bg-blue-600/15 text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Direct Phone & WhatsApp</span>
                    <span className="text-sm font-semibold text-white">+91 77026 85262</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5">
                  <div className="p-3 rounded-xl bg-blue-600/15 text-cyan-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Official Business Hours</span>
                    <span className="text-sm font-semibold text-white">All Days: 9:00 AM - 9:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5">
                  <div className="p-3 rounded-xl bg-blue-600/15 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Agency Head Office Location</span>
                    <span className="text-sm font-semibold text-white">Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp chat trigger */}
              <div className="pt-4 border-t border-white/5">
                <a
                  id="whatsapp-chat-button"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-600 text-white font-bold text-sm shadow-md hover:bg-green-500 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Start Live WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* ====================================
              RIGHT COLUMN: INTERACTIVE FORM
              ==================================== */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  id="contact-form"
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10 rounded-3xl bg-[#0B0F19B0] border border-white/15 backdrop-blur-md space-y-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-white">Proposal Request</h3>
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-xs text-gray-400">
                    Your data is strictly secured. Sumanth Csy and our team review every brief manually.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Full Name *</label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Sumanth Csy"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-sm text-white"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Email Address *</label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. contact@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-sm text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="form-phone" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Phone Number</label>
                      <input
                        id="form-phone"
                        type="tel"
                        name="phone"
                        placeholder="e.g. +91 77026 85262"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-sm text-white"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label htmlFor="form-company" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Company Name</label>
                      <input
                        id="form-company"
                        type="text"
                        name="company"
                        placeholder="e.g. Csy Tech Solutions"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-sm text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Interests dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="form-service" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Service Category Interest</label>
                      <select
                        id="form-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-sm text-white"
                      >
                        {serviceOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="form-budget" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Est. Monthly Growth Budget</label>
                      <select
                        id="form-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-sm text-white"
                      >
                        {budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project brief message text area */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">Briefly Describe Your Scaling Bottlenecks</label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      placeholder="e.g. We are seeing very high customer acquisition costs on Meta ads and our website layout is outdated..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-sm text-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      id="submit-contact-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-sm text-white hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Reviewing Audit Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Strategy Request Brief</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Submission Success Panel card */
                <motion.div
                  id="contact-form-success"
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-10 rounded-3xl bg-[#0B0F19B0] border border-cyan-400/30 backdrop-blur-md text-center space-y-6 shadow-2xl flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="p-4 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/25">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">Strategy Brief Ready!</h3>
                    <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed max-w-md">
                      Your digital marketing strategy brief has been compiled. Sumanth Csy and our team are conducting a manual review of your sector keywords. Click below to confirm or dispatch your details directly via WhatsApp.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <a
                      href={`https://wa.me/917702685262?text=${encodeURIComponent(
                        `*New Strategy Audit Request*\n-----------------------------\n👤 *Name:* ${formData.name}\n✉️ *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone || 'N/A'}\n🏢 *Company:* ${formData.company || 'N/A'}\n🛠️ *Service:* ${formData.service}\n💰 *Budget:* ${formData.budget}\n📝 *Message:* ${formData.message || 'N/A'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-xs font-bold uppercase tracking-wider text-white transition-all inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      id="reset-form-btn"
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all"
                    >
                      Submit Another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
