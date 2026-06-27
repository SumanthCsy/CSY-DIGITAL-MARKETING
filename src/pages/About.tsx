import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Compass,
  Eye,
  Target,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  CheckCircle,
  Award,
  BookOpen,
  ChevronRight,
  TrendingUp,
  UserCheck
} from "lucide-react";
import { PROCESS_STEPS } from "../data";
import adminSvg from "../images/admin.svg";

export default function About() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const coreValues = [
    {
      title: "Results-Authoritative Metrics",
      desc: "We prioritize cashflow ROI, sales conversions, and customer lifecycle LTV values over trivial metrics like likes or superficial clicks.",
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Clean Modern Aesthetics",
      desc: "Our web platforms are styled in sleek, high-contrast dark visual tones, glassmorphic filters, and fast animations, conveying premium trustworthiness.",
      icon: <Award className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Agile Continuous Shipping",
      desc: "We leverage automated development stacks to deploy robust landing pages and marketing systems within extremely tight schedules.",
      icon: <UserCheck className="w-6 h-6 text-cyan-400" />
    }
  ];

  const coreGoals = [
    { title: "Empower Startups", text: "Turn local bootstrap solutions into globally authoritative digital systems." },
    { title: "Automate Funnels", text: "Establish serverless AI conversational modules to qualify leads around the clock." },
    { title: "Optimize Ad Efficiency", text: "Drive customer acquisition costs (CAC) down while scaling ROAS parameters." },
    { title: "Pristine Technical SEO", text: "Secure ranking lock-ins on complex regional SERP directories." }
  ];

  return (
    <>
      <Helmet>
        <title>About CSY DIGITAL MARKETING | Sumanth Csy's Vision & Story</title>
        <meta name="description" content="Learn about CSY Digital Marketing, founded by Sumanth Csy. Discover our mission, vision, and 8-step process for building brands that dominate search and drive real business growth." />
        <meta name="keywords" content="about CSY Digital Marketing, Sumanth Csy, digital marketing agency, brand growth, vision, mission" />
      </Helmet>
      <div id="about-page" className="text-white min-h-screen pt-28 pb-20 bg-[#0F172A] relative overflow-hidden">
      {/* Aurora glow effects */}
      <div className="absolute top-[10%] left-[-15%] w-[60%] h-[60%] rounded-full blur-[120px] bg-blue-600/10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[60%] rounded-full blur-[120px] bg-cyan-400/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====================================
            PAGE HEADER
            ==================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Our DNA & Vision
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mt-6">
            We Build Brands That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Grow.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            A premium team driven by architectural excellence, data engineering, and high-conversion client acquisition.
          </p>
        </div>

        {/* ====================================
            MISSION, VISION, GOALS BLOCK
            ==================================== */}
        <div id="mission-vision-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300">
            <div className="p-3 rounded-2xl bg-cyan-400/10 text-cyan-400 inline-block mb-6">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              To engineer bulletproof digital structures and programmatic paid advertising funnels that convert raw attention into compounding transactional revenues for our business partners.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 inline-block mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              To remain the world's standard for custom B2B client acquisition, scaling startups and enterprise legacy operations alike through automated marketing channels and sleek visual designs.
            </p>
          </div>

          {/* Goals */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300">
            <div className="p-3 rounded-2xl bg-cyan-400/10 text-cyan-400 inline-block mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Goals</h3>
            <div className="mt-4 space-y-2">
              {coreGoals.map((g, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-gray-300">
                    <strong className="text-white font-medium">{g.title}:</strong> {g.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====================================
            FOUNDER PROFILE CARD
            ==================================== */}
        <div id="founder-profile-section" className="py-16 border-t border-white/5 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Professional profile card */}
            <div className="lg:col-span-5">
              <motion.div
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-md shadow-2xl overflow-hidden group"
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[50px] bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Founder Image Headshot Placeholder */}
                  <div className="aspect-square w-1/2 mx-auto rounded-2xl bg-[#090F19] overflow-hidden border border-white/10 mb-6">
                    <img
                      src={adminSvg}
                      alt="Sumanth Csy - Founder of CSY Digital Marketing"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-2xl font-bold text-white tracking-tight">Sumanth Csy</h4>
                      <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Founder & Principal Growth Architect</p>
                    </div>
                    <div className="flex gap-2.5">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="mailto:csytechslns@gmail.com"
                        className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="Send Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-4">
                    <p className="text-xs text-gray-400 italic">
                      "Digital scale is not a game of lottery tickets; it is a game of calculated algorithms. We assemble clean code structure and data-backed digital ad spend parameters to make certain our clients' pipelines grow persistently."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Visionary Leadership</span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Designed by @Sumanth Csy to Deliver Absolute Digital Mastery.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                As the Principal of CSY Digital Marketing and Csy Tech Solutions, Sumanth Csy established a corporate identity grounded in high-performance digital engineering. Having realized that typical marketing agencies are disconnected from technical search crawlers and code optimization benchmarks, Sumanth fused full-stack software development with programmatic performance advertising.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Our approach delivers premium structural visibility, optimized conversion frameworks, and automated client flows. We handle every engagement meticulously under standard service SLAs—whether it is a specialized local SEO setup or an omnichannel paid media funnel driving substantial sales growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      {val.icon}
                      <h4 className="font-display font-bold text-sm text-white">{val.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ====================================
            WORKING PROCESS TIMELINE (Interactive)
            ==================================== */}
        <div id="working-process-timeline" className="py-16 border-t border-white/5 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Our Methodology</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
              The 8-Step Scaling Blueprint
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              We execute our services with rigorous procedural checks. Click any step below to explore the detailed deliverables.
            </p>
          </div>

          {/* Interactive Steps Selector Horizontal Bar */}
          <div id="steps-selector-bar" className="flex overflow-x-auto gap-3 pb-6 scrollbar-hide mb-10">
            {PROCESS_STEPS.map((p) => {
              const isActive = activeStep === p.step;
              return (
                <button
                  id={`process-tab-${p.step}`}
                  key={p.step}
                  onClick={() => setActiveStep(p.step)}
                  className={`px-5 py-3 rounded-2xl font-display font-bold text-sm shrink-0 transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent text-white shadow-md shadow-blue-500/20"
                      : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Step 0{p.step}: {p.title}
                </button>
              );
            })}
          </div>

          {/* Expanded Step Detail Box */}
          <AnimatePresence mode="wait">
            {PROCESS_STEPS.filter((p) => p.step === activeStep).map((p) => (
              <motion.div
                id={`process-detail-panel-${p.step}`}
                key={p.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5">
                  <div className="font-display text-7xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400/20 to-transparent select-none leading-none">
                    0{p.step}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-4">{p.title} Deliverables</h3>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{p.description}</p>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {p.details.map((detail, idx) => (
                      <div
                        id={`process-${p.step}-detail-${idx}`}
                        key={idx}
                        className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-all duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-200 font-medium leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
    </>
  );
}
