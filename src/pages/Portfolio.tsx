import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  ExternalLink,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Filter,
  BarChart2,
  Lock,
  ArrowUpRight
} from "lucide-react";
import { PORTFOLIO, CASE_STUDIES } from "../data";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string>(CASE_STUDIES[0].id);

  const filters = ["All", "Websites", "Branding", "Marketing", "Videos", "Graphics"];

  const filteredPortfolio = selectedFilter === "All"
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === selectedFilter);

  const activeCaseStudy = CASE_STUDIES.find(cs => cs.id === activeCaseStudyId) || CASE_STUDIES[0];

  // Helper to draw an elegant SVG Area Chart for the case study progress
  const renderGrowthChart = (data: { name: string; value: number }[]) => {
    const width = 600;
    const height = 180;
    const paddingLeft = 60;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;

    const maxVal = Math.max(...data.map(d => d.value)) * 1.1;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    const points = data.map((d, i) => {
      const x = paddingLeft + (i / (data.length - 1)) * chartWidth;
      const y = paddingTop + chartHeight - (d.value / maxVal) * chartHeight;
      return { x, y, name: d.name, value: d.value };
    });

    // Form SVG Path
    const pathD = points.reduce((acc, p, i) => {
      return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
    }, "");

    // Area Path (closing back to bottom)
    const areaD = `${pathD} L ${points[points.length - 1].x} ${paddingTop + chartHeight} L ${points[0].x} ${paddingTop + chartHeight} Z`;

    return (
      <div id="chart-wrapper" className="w-full bg-[#090F19] rounded-2xl p-5 border border-white/5 shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Metrics Growth Progression</span>
          <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> High Velocity
          </span>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full overflow-visible">
          <defs>
            <linearGradient id="areaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const y = paddingTop + chartHeight * ratio;
            return (
              <line
                key={i}
                x1={paddingLeft}
                y1={y}
                x2={width - paddingRight}
                y2={y}
                stroke="white"
                strokeOpacity="0.05"
                strokeWidth="1"
              />
            );
          })}

          {/* Area under line */}
          <path d={areaD} fill="url(#areaGlow)" />

          {/* Line Chart */}
          <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />

          {/* Data Points */}
          {points.map((p, i) => (
            <g key={i} className="group/dot">
              <circle
                cx={p.x}
                cy={p.y}
                r="4"
                fill="#0F172A"
                stroke="#06B6D4"
                strokeWidth="2.5"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r="8"
                fill="#06B6D4"
                fillOpacity="0.3"
                className="scale-0 group-hover/dot:scale-100 transition-transform origin-center"
              />
            </g>
          ))}

          {/* X Axis Labels */}
          {points.map((p, i) => (
            <text
              key={i}
              x={p.x}
              y={height - 8}
              fill="#94A3B8"
              fontSize="10"
              textAnchor="middle"
              className="font-sans font-semibold"
            >
              {p.name}
            </text>
          ))}

          {/* Y Axis Max label */}
          <text
            x={paddingLeft - 10}
            y={paddingTop + 6}
            fill="#94A3B8"
            fontSize="10"
            textAnchor="end"
            className="font-mono"
          >
            {activeCaseStudy.id === "cs-1" ? `$${(maxVal / 1000).toFixed(0)}k` : `${(maxVal).toFixed(0)}`}
          </text>

          {/* Y Axis Min label */}
          <text
            x={paddingLeft - 10}
            y={paddingTop + chartHeight + 4}
            fill="#94A3B8"
            fontSize="10"
            textAnchor="end"
            className="font-mono"
          >
            0
          </text>
        </svg>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | CSY DIGITAL MARKETING</title>
        <meta name="description" content="Browse CSY Digital Marketing's portfolio of success stories, case studies, and deliverables including websites, branding, marketing campaigns, videos, and graphics." />
        <meta name="keywords" content="portfolio, case studies, success stories, digital marketing portfolio, web design portfolio" />
      </Helmet>
      <div id="portfolio-page" className="text-white min-h-screen pt-28 pb-20 bg-[#0F172A] relative overflow-hidden">
      {/* Aurora glow effects */}
      <div className="absolute top-[10%] left-[-15%] w-[60%] h-[60%] rounded-full blur-[120px] bg-blue-600/10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[60%] rounded-full blur-[120px] bg-cyan-400/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====================================
            PAGE HEADER
            ==================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Case Studies & Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mt-6">
            Our Portfolio of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Success Stories.</span>
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            A meticulous showcase of full-scale web platforms, unified corporate branding systems, and programmatic advertising funnels.
          </p>
        </div>

        {/* ====================================
            CASE STUDIES HIGHLIGHT SECTION
            ==================================== */}
        <div id="case-studies-block" className="mb-24 py-12 border-b border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Core Case Studies</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">Proof in Hard Statistics</h2>
            </div>
            {/* Case Studies Toggle buttons */}
            <div className="flex gap-2.5">
              {CASE_STUDIES.map((cs) => (
                <button
                  id={`cs-toggle-${cs.id}`}
                  key={cs.id}
                  onClick={() => setActiveCaseStudyId(cs.id)}
                  className={`px-4 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm border transition-all duration-300 ${
                    activeCaseStudyId === cs.id
                      ? "bg-white/5 border-cyan-500/40 text-cyan-400 shadow-md"
                      : "bg-transparent border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {cs.client} Teardown
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              id={`case-study-details-${activeCaseStudy.id}`}
              key={activeCaseStudy.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B0F19B0] border border-white/15 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Side Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">{activeCaseStudy.category}</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">{activeCaseStudy.title}</h3>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div>
                    <strong className="text-white text-xs font-bold uppercase tracking-wide block mb-1">THE PROBLEM:</strong>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{activeCaseStudy.problem}</p>
                  </div>
                  <div>
                    <strong className="text-white text-xs font-bold uppercase tracking-wide block mb-1">OUR SOLUTION:</strong>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{activeCaseStudy.solution}</p>
                  </div>
                  <div>
                    <strong className="text-white text-xs font-bold uppercase tracking-wide block mb-1">THE RESULTS:</strong>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{activeCaseStudy.results}</p>
                  </div>
                </div>

                {/* Growth metrics cards */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {activeCaseStudy.stats.map((st, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <div className="font-display text-lg sm:text-2xl font-extrabold text-white">{st.val}</div>
                      <div className="text-[10px] font-semibold text-gray-400 tracking-wider mt-1">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Visual Chart Representation */}
              <div className="lg:col-span-6">
                {renderGrowthChart(activeCaseStudy.growthData)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ====================================
            PORTFOLIO SHOWCASE BLOCK WITH FILTERS
            ==================================== */}
        <div id="portfolio-showcase-section" className="py-12 border-t border-white/5">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Interactive Showcase</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">Our Featured Deliverables</h2>
          </div>

          {/* Filtering Tab buttons */}
          <div id="portfolio-filters" className="flex flex-wrap justify-center gap-2.5 mb-12">
            {filters.map((flt) => {
              const isActive = selectedFilter === flt;
              return (
                <button
                  id={`filter-btn-${flt}`}
                  key={flt}
                  onClick={() => setSelectedFilter(flt)}
                  className={`px-4.5 py-2.5 rounded-full font-display font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {flt}
                </button>
              );
            })}
          </div>

          {/* Portfolio grid */}
          <motion.div
            id="portfolio-items-grid"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  id={`portfolio-card-${item.id}`}
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl bg-[#0B0F19B0] border border-white/10 hover:border-cyan-500/30 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    {/* Visual Media with hovering zoom and metric overlay */}
                    <div className="aspect-[4/3] overflow-hidden bg-[#090F19] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />

                      {/* Performance Metric overlay badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-[#0B0F19D0] backdrop-blur-md border border-white/15 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">{item.metrics.label}: <span className="text-cyan-400">{item.metrics.value}</span></span>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">{item.category} • {item.client}</span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags and project action details */}
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-medium text-gray-400 uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-cyan-400">
                      <span>EXPLORE PROJECT METRICS</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
