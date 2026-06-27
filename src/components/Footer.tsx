import React from "react";
import Logo from "./Logo";
import { Mail, Phone, Clock, ArrowUpRight, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  const servicesLinks = [
    { label: "Web Engineering", id: "services" },
    { label: "SEO Audits & Strategy", id: "services" },
    { label: "Social Media Engine", id: "services" },
    { label: "Performance Ads", id: "services" },
    { label: "Branding Systems", id: "services" },
    { label: "AI Integration & Flows", id: "services" },
  ];

  const resources = [
    { label: "Case Studies", id: "portfolio" },
    { label: "Pricing Calculator", id: "pricing" },
    { label: "Working Process", id: "about" },
    { label: "Client Testimonials", id: "home" },
  ];

  return (
    <footer id="main-footer" className="bg-[#0B0F19] border-t border-white/5 pt-16 pb-8 text-gray-400 font-sans relative overflow-hidden">
      {/* Decorative subtle visual glows */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div id="footer-inner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div id="footer-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/5">
          {/* Brand block */}
          <div id="footer-brand-col" className="lg:col-span-2 space-y-6">
            <div onClick={() => handleLinkClick("home")} className="cursor-pointer inline-block">
              <Logo size="sm" showText={true} />
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-gray-400">
              We design and build high-performance digital platforms and run data-backed marketing campaigns that consistently turn impressions into transactional revenue.
            </p>
            {/* Contact quick details */}
            <div id="footer-contact-details" className="space-y-3 pt-2">
              <a href="mailto:csytechslns@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-blue-600/10 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </span>
                <span>csytechslns@gmail.com</span>
              </a>
              <a href="tel:+917702685262" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-blue-600/10 text-cyan-400">
                  <Phone className="w-4 h-4" />
                </span>
                <span>+91 77026 85262</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="p-1.5 rounded-lg bg-white/5 text-cyan-400">
                  <Clock className="w-4 h-4" />
                </span>
                <span>All Days: 9:00 AM - 9:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div id="footer-quicklinks-col" className="space-y-4">
            <h4 className="text-white font-display text-sm font-semibold tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div id="footer-services-col" className="space-y-4">
            <h4 className="text-white font-display text-sm font-semibold tracking-wider uppercase">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div id="footer-resources-col" className="space-y-4">
            <h4 className="text-white font-display text-sm font-semibold tracking-wider uppercase">
              Growth Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              {resources.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom area */}
        <div id="footer-bottom" className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>&copy; {currentYear} CSY Digital Marketing. All rights reserved.</span>
            <button onClick={() => handleLinkClick("about")} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleLinkClick("about")} className="hover:text-white transition-colors">Terms of Service</button>
          </div>

          {/* Mandatory attributions in request: Sumanth Csy & Csy Tech Solutions with Link */}
          <div id="footer-attribution" className="text-xs text-gray-400 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl flex flex-col items-center md:items-end gap-1.5 shadow-sm">
            <span className="font-medium">
              Developed by <span className="text-white font-semibold">@Sumanth Csy</span>
            </span>
            <a
              href="https://csytech.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold tracking-wide hover:underline inline-flex items-center gap-1 group transition-colors"
            >
              <span>Csy Tech Solutions</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
