import React, { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Check,
  Zap,
  TrendingUp,
  ArrowRight,
  Calculator,
  HelpCircle,
  Shield,
  Activity,
  Plus
} from "lucide-react";
import { PRICING } from "../data";

interface PricingProps {
  setCurrentPage: (page: string) => void;
  setSelectedService?: (svc: string) => void;
}

export default function Pricing({ setCurrentPage, setSelectedService }: PricingProps) {
  // Custom scope calculator states
  const [targetBudget, setTargetBudget] = useState<number>(30000); // Ad budget
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(15000); // Average sale value
  const [includeWebDev, setIncludeWebDev] = useState<boolean>(true);
  const [includeSEOOps, setIncludeSEOOps] = useState<boolean>(false);
  const [includeAIChatbot, setIncludeAIChatbot] = useState<boolean>(false);

  // Core Math
  // Cost Per Lead (CPL) is estimated around ₹250
  const estimatedLeads = Math.floor(targetBudget / 250);
  // Average closing conversion rate is 3%
  const estimatedConversions = Math.floor(estimatedLeads * 0.03);
  const projectedRevenue = estimatedConversions * avgCustomerValue;
  const projectedROAS = targetBudget > 0 ? (projectedRevenue / targetBudget).toFixed(1) : "0.0";

  // Calculate Custom Monthly Agency Retainer fee based on toggles
  const baseAgencyFee = 25000;
  const webFee = includeWebDev ? 15000 : 0;
  const seoFee = includeSEOOps ? 12000 : 0;
  const aiFee = includeAIChatbot ? 10000 : 0;
  const totalMonthlyRetainer = baseAgencyFee + webFee + seoFee + aiFee;

  const handleSelectPlan = (planName: string) => {
    if (setSelectedService) {
      setSelectedService(planName);
    }
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Packages | CSY DIGITAL MARKETING</title>
        <meta name="description" content="Explore CSY Digital Marketing's transparent pricing packages and use our ROI calculator to estimate leads, conversions, and revenue for your business." />
        <meta name="keywords" content="pricing, packages, digital marketing pricing, SEO pricing, ROI calculator" />
      </Helmet>
      <div id="pricing-page" className="text-white min-h-screen pt-28 pb-20 bg-[#0F172A] relative overflow-hidden">
      {/* Visual backdrops */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====================================
            PAGE HEADER
            ==================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Clear Retainers
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mt-6">
            Transparent Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Guaranteed SLAs.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            No lock-in contracts. Simple monthly agreements supported by rolling bi-weekly performance reviews and direct Whatsapp growth channels.
          </p>
        </div>

        {/* ====================================
            TIERED PRICING CARDS
            ==================================== */}
        <div id="pricing-tiers-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PRICING.map((plan) => (
            <div
              id={`pricing-card-${plan.id}`}
              key={plan.id}
              className={`p-8 rounded-3xl bg-[#0B0F19B0] border relative flex flex-col justify-between backdrop-blur-md transform transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? "border-cyan-400/50 shadow-xl shadow-cyan-500/5"
                  : "border-white/10 hover:border-cyan-500/20"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
              )}

              <div className="relative z-10">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">
                  {plan.type} PACKAGE
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mt-6">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    / {plan.period}
                  </span>
                </div>

                {/* Checklist Features */}
                <div className="mt-8 space-y-3.5 pt-6 border-t border-white/5">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-cyan-400/10 text-cyan-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-white/5">
                <button
                  id={`plan-btn-${plan.id}`}
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-sans text-sm font-bold transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 hover:scale-[1.02]"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 text-white hover:scale-[1.02]"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ====================================
            STRATEGY & ROI CALCULATOR MODULE
            ==================================== */}
        <div id="calculator-section" className="py-16 border-t border-white/5 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              Simulation Engine
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4">
              Scope Estimator & ROI Calculator
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              Adjust your marketing spend and average business sale values below. Our algorithms will project lead pipelines, closed conversions, and target agency retainer fees dynamically.
            </p>
          </div>

          <div id="calculator-panel" className="p-6 sm:p-10 rounded-3xl bg-[#0B0F19D0] border border-white/15 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column Input controls */}
            <div className="lg:col-span-7 space-y-8">
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-400" /> Adjust Simulation Parameters
              </h3>

              {/* Parameter 1: Monthly Paid Ad Spend Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="ad-spend-range" className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                    Target Monthly Paid Ad Spend (Meta/Google):
                  </label>
                  <span className="font-display font-extrabold text-cyan-400 text-xl">
                    ₹{targetBudget.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  id="ad-spend-range"
                  type="range"
                  min="5000"
                  max="300000"
                  step="5000"
                  value={targetBudget}
                  onChange={(e) => setTargetBudget(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
                <p className="text-[10px] text-gray-500 leading-none">Typical minimum recommended budget is ₹15,000 to trigger robust ad algorithms.</p>
              </div>

              {/* Parameter 2: Average Client Order Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="avg-order-range" className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                    Your Average Sale / Customer Contract Value:
                  </label>
                  <span className="font-display font-extrabold text-blue-500 text-xl">
                    ₹{avgCustomerValue.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  id="avg-order-range"
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full accent-blue-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Parameter 3: Multi-service scope checklist */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wide block mb-3">
                  Select Additional Digital Engineering Modules:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    id="checkbox-web-dev"
                    onClick={() => setIncludeWebDev(!includeWebDev)}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-4 transition-all duration-300 ${
                      includeWebDev
                        ? "bg-blue-600/10 border-blue-500/50 text-white"
                        : "bg-white/5 border-white/5 text-gray-400 hover:border-white/10"
                    }`}
                  >
                    <span className="font-display font-bold text-sm">React Website/Portal</span>
                    <span className="text-xs text-gray-400 font-medium">+₹15,000/mo</span>
                  </button>

                  <button
                    id="checkbox-seo-ops"
                    onClick={() => setIncludeSEOOps(!includeSEOOps)}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-4 transition-all duration-300 ${
                      includeSEOOps
                        ? "bg-blue-600/10 border-blue-500/50 text-white"
                        : "bg-white/5 border-white/5 text-gray-400 hover:border-white/10"
                    }`}
                  >
                    <span className="font-display font-bold text-sm">Full Technical SEO</span>
                    <span className="text-xs text-gray-400 font-medium">+₹12,000/mo</span>
                  </button>

                  <button
                    id="checkbox-ai-chatbot"
                    onClick={() => setIncludeAIChatbot(!includeAIChatbot)}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-4 transition-all duration-300 ${
                      includeAIChatbot
                        ? "bg-blue-600/10 border-blue-500/50 text-white"
                        : "bg-white/5 border-white/5 text-gray-400 hover:border-white/10"
                    }`}
                  >
                    <span className="font-display font-bold text-sm">AI Chatbot Agent</span>
                    <span className="text-xs text-gray-400 font-medium">+₹10,000/mo</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column Outputs Panel */}
            <div className="lg:col-span-5 bg-[#090F19] rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                  Projections & Fee Structure
                </h4>

                {/* Simulated outputs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block">Estimated Leads / mo:</span>
                    <span className="font-display text-2xl font-extrabold text-white mt-1 block">{estimatedLeads}</span>
                    <span className="text-[9px] text-gray-500">Based on ₹250 Cost Per Lead</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block">Est. Conversions:</span>
                    <span className="font-display text-2xl font-extrabold text-cyan-400 mt-1 block">{estimatedConversions}</span>
                    <span className="text-[9px] text-gray-500">Based on conservative 3% Close Rate</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Projected Inbound Value:</span>
                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                      {projectedROAS}x Projected ROAS
                    </span>
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-green-400 mt-1 block">
                    ₹{projectedRevenue.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Retainer Quote result */}
                <div className="p-5 rounded-xl bg-blue-600/10 border border-blue-500/20 mb-6">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Custom Monthly Retainer Quote:</span>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1 block">
                    ₹{totalMonthlyRetainer.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[9px] text-gray-400 block mt-1">Includes Campaign setup, analytics, & continuous ad optimization SLA.</span>
                </div>
              </div>

              <button
                id="calc-cta-btn"
                onClick={() => handleSelectPlan(`Custom Simulation (Retainer: ₹${totalMonthlyRetainer.toLocaleString("en-IN")})`)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-sm text-white hover:scale-[1.02] shadow-md transition-all duration-300"
              >
                <span>Book Free Scope Review Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
