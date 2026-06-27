import {
  ServiceItem,
  PortfolioItem,
  CaseStudyItem,
  StatItem,
  TestimonialItem,
  ProcessStep,
  PricingPlan,
  FAQItem
} from "./types";

export const BRAND_PARTNERS = [
  { name: "Website Maintain" },
  { name: "Insta Boost" },
  { name: "Social Media Boost" },
  { name: "Dashboard Development" },
  { name: "Technical SEO" },
  { name: "Google Paid Ads" },
  { name: "Meta Social Ads" },
  { name: "AI Chatbot Agents" },
  { name: "Explainer Reels" },
  { name: "Workflow Automation" }
];

export const STATS: StatItem[] = [
  {
    id: "clients",
    label: "Happy Clients",
    value: 100,
    suffix: "%",
    description: "Unmatched customer satisfaction and premium digital delivery."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    icon: "Code",
    title: "Web Engineering & Design",
    category: "Development",
    description: "Custom web applications, e-commerce architectures, and responsive interfaces built with Next.js, React, and high-fidelity frameworks.",
    features: [
      "Full-stack Web Development",
      "E-commerce Ecosystems (Shopify, Custom Node/React)",
      "High-Performance Landing Pages",
      "Interactive Portfolio & Creative Websites",
      "Responsive Enterprise Business Websites",
      "Comprehensive Website Redesign",
      "Ongoing Website Maintenance & Security SLA"
    ],
    badge: "Most Requested"
  },
  {
    id: "seo-optimization",
    icon: "Search",
    title: "SEO Strategy & Domination",
    category: "SEO & SMM",
    description: "Climb search rankings organically, claim featured snippets, and drive qualified transactional traffic with technical optimization and content strategy.",
    features: [
      "In-Depth Technical SEO Audits",
      "On-Page Keyword & Structural Optimization",
      "High-Authority Backlink Acquisition",
      "Google Business Profile Optimization",
      "Local Search Visibility Strategy",
      "Core Web Vitals & Loading Speed Optimization",
      "Competitor SERP Analysis & Strategy Planning"
    ],
    badge: "ROI Focused"
  },
  {
    id: "smm-organic",
    icon: "Users",
    title: "Social Media Engine",
    category: "SEO & SMM",
    description: "Cultivate highly engaged communities, automate customer workflows, and design scroll-stopping content schedules tailored to each channel.",
    features: [
      "Instagram Content, Reels & Story Marketing",
      "Facebook Group & Business Page Management",
      "LinkedIn Thought Leadership & B2B Content",
      "YouTube Channel Strategy & Scripting",
      "WhatsApp Funnels & Automated Broadcast Marketing",
      "Interactive Story-Driven Marketing Campaigns",
      "Community Management & Multi-channel Engagement"
    ]
  },
  {
    id: "paid-ads",
    icon: "TrendingUp",
    title: "Performance Marketing",
    category: "Advertising",
    description: "Scale your revenue fast using algorithmic ad campaigns across search and social platforms. Highly optimized CAC and maximized ROAS.",
    features: [
      "Google Ads (Search, Display, Performance Max)",
      "Meta Ads (Facebook & Instagram Lead Gen, Conversion)",
      "LinkedIn B2B Account-Based Marketing (ABM) Ads",
      "YouTube Video Overlay & In-stream Ads",
      "Retargeting Funnel Engineering",
      "A/B Testing on Copy, Creatives & Demographics",
      "Pixel/CAPI Server-Side Tracking Integration"
    ],
    badge: "High Growth"
  },
  {
    id: "branding-design",
    icon: "Palette",
    title: "Brand Strategy & Design",
    category: "Branding & Design",
    description: "Stand out with a modern visual signature. We design logos, design systems, and creative collateral that convey premium trustworthiness.",
    features: [
      "Bespoke Corporate Logo Design",
      "Full Typography & Color Palette Guidelines",
      "Social Media Graphic Templates (Canva/Figma)",
      "High-Impact Poster & Banner Design",
      "Product-focused Visual Posters",
      "Interactive Presentation & Pitch Deck Design",
      "Unified Branding System Guidelines"
    ]
  },
  {
    id: "video-production",
    icon: "Video",
    title: "Video Editing & Motion Graphics",
    category: "Video & Content",
    description: "Cinematic story-telling, interactive reels, product videography, and fluid motion graphics designed to keep users hooked.",
    features: [
      "High-Definition Product Videos & Shoots",
      "Fluid 2D/3D Motion Graphics & Explainer Videos",
      "Advanced Video Editing (Premiere, After Effects)",
      "Short-form Content Editing (Reels, TikToks, Shorts)",
      "Dynamic Text Animations & Subtitling",
      "Sound Design & Premium Color Grading",
      "Professional Product Photography & Staging"
    ],
    badge: "Engaging"
  },
  {
    id: "ai-solutions",
    icon: "Sparkles",
    title: "AI Integration & Automation",
    category: "AI & Consulting",
    description: "Reduce operational overhead and speed up user interactions with bespoke conversational chatbots and automated pipeline integrations.",
    features: [
      "Custom Generative AI Chatbots (OpenAI/Gemini)",
      "Automated CRM Integration (Zapier, Make, custom APIs)",
      "Lead Enrichment & Automated Follow-Up Workflows",
      "Smart FAQ Agents & Customer Support Automation",
      "AI-driven Sales Funnel Funneling",
      "Social Media Auto-replies & Trigger Flows"
    ],
    badge: "Next-Gen"
  },
  {
    id: "analytics-consulting",
    icon: "BarChart3",
    title: "Analytics & Digital Consulting",
    category: "AI & Consulting",
    description: "Transform raw data into strategic decisions. Clear conversion tracking, custom reporting dashboards, and weekly expert consulting.",
    features: [
      "Google Analytics 4 (GA4) Advanced Setup",
      "Custom Looker Studio Performance Dashboards",
      "Funnel Conversion Rate Optimization (CRO)",
      "Bi-Weekly Digital Strategy Consulting Sessions",
      "Comprehensive Competitor Intelligence Reports",
      "Technical Advisory on Tech Stack Scaling"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description: "Deep dive workshops to map your business objectives, operational challenges, and target demographics.",
    details: ["Stakeholder consulting", "Audience profiling", "Audit of current assets", "Project scoping"]
  },
  {
    step: 2,
    title: "Research",
    description: "Algorithmic analysis of market gaps, competitor ad spends, and trending high-intent keywords.",
    details: ["Keyword opportunity mapping", "Competitor ad funnel teardown", "Tech stack viability", "UX/UI benchmark analysis"]
  },
  {
    step: 3,
    title: "Strategy",
    description: "A tailored blueprint laying out the precise ad spend distribution, content buckets, and engineering designs.",
    details: ["ROAS projections", "Information architecture (IA)", "Creative storyboard design", "Phased execution map"]
  },
  {
    step: 4,
    title: "Design",
    description: "High-fidelity modern designs using glassmorphism, bold typography, and interactive responsive layouts.",
    details: ["Figma interactive prototyping", "Design system specification", "Motion/animation mapping", "Brand alignment sync"]
  },
  {
    step: 5,
    title: "Development",
    description: "Clean, performant TypeScript and React code, strictly optimized for speed and perfect mobile responsive performance.",
    details: ["Vite/Next.js setup", "Tailwind CSS grid systems", "Framer Motion micro-interactions", "SEO metadata embedding"]
  },
  {
    step: 6,
    title: "Marketing",
    description: "Ad campaigns launched, organic funnels opened, and high-frequency content schedules deployed.",
    details: ["Search/Social ad launch", "Conversion tracking validation", "A/B creative testing", "Email automation trigger sync"]
  },
  {
    step: 7,
    title: "Launch",
    description: "The official product release with server CDN optimization, domain setup, and high-volume testing.",
    details: ["Cloud Run container deployment", "Domain DNS verification", "Load and speed optimization", "Post-launch SEO indexing"]
  },
  {
    step: 8,
    title: "Support & Scale",
    description: "Continuous analytical tracking, weekly optimization loops, and technical maintenance under SLA.",
    details: ["Weekly reporting dashboards", "Meta/Google Pixel tuning", "Security core updates", "Conversion optimization loops"]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "project-1",
    title: "E-Commerce Scale Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    client: "Active Fashion Brand",
    description: "Complete performance marketing overhaul on Meta and Google Ads, paired with high-converting custom landing pages.",
    tags: ["Meta Ads", "Google Ads", "Conversion Rate Optimization"],
    metrics: { label: "Sales Growth", value: "3.5x ROAS" }
  },
  {
    id: "project-2",
    title: "Real Estate Lead Engine",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    client: "Premium Builders",
    description: "High-performance lead generation landing page optimized for speed, complete with automated CRM and instant WhatsApp notifications.",
    tags: ["React Web App", "Technical SEO", "Lead Gen Automation"],
    metrics: { label: "Verified Leads", value: "+450/mo" }
  },
  {
    id: "project-3",
    title: "B2B SaaS Organic Inbound",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    client: "SaaS Startup",
    description: "Technical SEO audit and strategic content pipeline to dominate local and international Google Search listings.",
    tags: ["Technical SEO", "On-page Optimization", "Keyword Map"],
    metrics: { label: "Organic Reach", value: "10K/mo" }
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-1",
    title: "Scaling SaaSify from ₹1,00,000 to ₹15,00,000 MRR",
    client: "SaaSify Inc",
    category: "Performance Marketing & CRO",
    problem: "SaaSify was burning ₹6,00,000/mo in unoptimized Meta ads with a poor website conversion rate of 1.1%. Customer Acquisition Cost (CAC) was unsustainable.",
    solution: "We completely redesigned their web presence with conversion-focused UX and built a deep funnel Google Search and Meta Ads campaign with retargeting.",
    results: "Within 6 months, their website conversion rate surged to 4.8% while monthly ad spend ROAS stabilized at 4.2x.",
    growthData: [
      { name: "Month 1", value: 100000 },
      { name: "Month 2", value: 240000 },
      { name: "Month 3", value: 450000 },
      { name: "Month 4", value: 720000 },
      { name: "Month 5", value: 1100000 },
      { name: "Month 6", value: 1500000 }
    ],
    stats: [
      { label: "MRR Growth", val: "15x" },
      { label: "Conversion Rate", val: "4.8%" },
      { label: "CAC Reduction", val: "-42%" }
    ]
  },
  {
    id: "cs-2",
    title: "SEO Domination for Sumeria Logistics",
    client: "Sumeria Logistics",
    category: "Technical SEO & Inbound Engine",
    problem: "Zero organic traffic outside brand search. Competitors claimed all premium local logistics keywords on Google Search, forcing reliance on cold calls.",
    solution: "Conducted a thorough technical SEO cleanup, restructured URL schema, and built out robust service-location landing pages with speed-optimizations.",
    results: "Secured #1 positions for 35 high-converting transactional keywords within 120 days. Organic leads became their primary source of B2B contracts.",
    growthData: [
      { name: "Month 1", value: 120 },
      { name: "Month 2", value: 450 },
      { name: "Month 3", value: 1100 },
      { name: "Month 4", value: 2800 },
      { name: "Month 5", value: 5400 },
      { name: "Month 6", value: 8700 }
    ],
    stats: [
      { label: "Organic Visitors", val: "8.7K/mo" },
      { label: "Qualified Leads", val: "+520%" },
      { label: "Google Business Rank", val: "#1 Local" }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Naveen",
    role: "Verified Client",
    company: "SMM & Creatives",
    photo: "",
    quote: "CSY Digital Marketing completely transformed our online presence. Their website design and social media creatives are modern, professional, and delivered on time. Highly recommended.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sravan",
    role: "Verified Client",
    company: "Custom App Design",
    photo: "",
    quote: "Excellent service and great communication. The team understood our business requirements and delivered a premium website with impressive animations.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Yeshwanth",
    role: "Verified Client",
    company: "Strategic Branding",
    photo: "",
    quote: "Professional work from start to finish. Their digital marketing strategies and creative designs helped our brand stand out online.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Hymad",
    role: "Verified Client",
    company: "Web Development",
    photo: "",
    quote: "Very satisfied with the quality of work. The website is fast, responsive, and looks premium. Looking forward to working together again.",
    rating: 5
  },
  {
    id: "test-5",
    name: "Sravan Kumar",
    role: "Verified Client",
    company: "Creative Design",
    photo: "",
    quote: "CSY Digital Marketing exceeded our expectations. Their attention to detail, creativity, and timely delivery made the entire experience smooth and hassle-free.",
    rating: 5
  },
  {
    id: "test-6",
    name: "Rajiv Kumar",
    role: "Verified Client",
    company: "SLA Management & Ads",
    photo: "",
    quote: "A reliable and talented team. From website development to social media management, everything was handled professionally. Highly recommended for businesses looking to grow online.",
    rating: 5
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: "price-starter",
    name: "Starter Pack",
    price: "₹5,999",
    period: "month",
    description: "Simple social media posts maintenance and boost ads management to establish consistent brand activity.",
    features: [
      "Simple Social Media Posts Maintenance",
      "Boost Ads Campaign Setup & Management",
      "Essential Account Handling",
      "Basic Creatives & Graphics",
      "Email & WhatsApp Support",
      "Monthly KPI Review"
    ],
    isPopular: false,
    buttonText: "Launch Starter Plan",
    type: "Starter"
  },
  {
    id: "price-web-social",
    name: "Web & Social Media",
    price: "₹9,999",
    period: "month",
    description: "Integrated custom web layouts and active social media management for a dual-force digital presence.",
    features: [
      "Web Layout Setup & Maintenance",
      "Full Social Media Graphic Creatives",
      "Regular Brand Posts & Copywriting",
      "Targeted Meta & Google Ad Campaigns",
      "Weekly Performance Tracking",
      "WhatsApp Group Support"
    ],
    isPopular: true,
    buttonText: "Scale Web & Social",
    type: "Web & Social"
  },
  {
    id: "price-growth-pro",
    name: "Advanced Scale Pro",
    price: "₹14,999",
    period: "month",
    description: "Ongoing website maintenance, technical SEO optimization, high-yield ad campaigns, and professional post content.",
    features: [
      "Website Maintenance & Technical SLA",
      "Technical SEO Optimization",
      "Search Engine & Paid Social Ads Setup",
      "Custom Brand Posts & Reels Planning",
      "Google Business Profile Rank SEO",
      "Conversion Rate Optimization (CRO)",
      "Priority SLA Response Support"
    ],
    isPopular: false,
    buttonText: "Go Pro & Scale",
    type: "Growth Pro"
  },
  {
    id: "price-enterprise-ai",
    name: "Enterprise AI Domination",
    price: "₹19,999 - ₹24,999",
    period: "month",
    description: "Full omnichannel marketing package including bespoke AI chat agents, workflow automation, and automated chatbots.",
    features: [
      "Custom Generative AI Chatbots Setup",
      "Automated Workflow & Chat Agents Integration",
      "React Web Portals & Custom Apps Development",
      "Full Web Maintenance, SEO, Ads & Auto Posts",
      "High ROAS Performance Ad Funnels",
      "Priority Support Guarantee (< 1 hour)",
      "Direct WhatsApp Hotline with Sumanth Csy"
    ],
    isPopular: false,
    buttonText: "Initiate AI Scaling",
    type: "Enterprise AI"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What makes CSY Digital Marketing different from other agencies?",
    answer: "We do not believe in superficial vanity metrics like likes or generic impressions. Led by Sumanth Csy, we integrate world-class software engineering with direct-response digital marketing. We build premium website experiences, configure advanced server-side tracking, and run algorithmic paid ads. Every campaign is engineered to directly scale your sales pipeline.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you handle ad budgets, or is that charged separately?",
    answer: "The retainer fees cover our expert strategic setup, creative designs, content copywriting, and campaign management. The ad spend (the budget paid directly to Google or Meta) is paid by your company. We manage, test, and optimize that spend to maximize your Return on Ad Spend (ROAS).",
    category: "Pricing"
  },
  {
    id: "faq-3",
    question: "How long does a website development project take?",
    answer: "High-fidelity landing pages or portfolio sites are completed in 1-2 weeks. Full custom enterprise business websites or B2B client portals typically take 3-5 weeks from discovery to official launch, adhering to our meticulous 8-step working process.",
    category: "Services"
  },
  {
    id: "faq-4",
    question: "Will Sumanth Csy be directly involved in our account?",
    answer: "Yes! Sumanth Csy actively conducts the initial Strategy workshops for all clients. Enterprise client accounts receive direct consultation and ongoing architectural reviews overseen by Sumanth. Starter and Pro plans are executed by our senior consultants and approved through Sumanth's visual review process.",
    category: "Process"
  },
  {
    id: "faq-5",
    question: "Can we switch or cancel plans at any point?",
    answer: "Yes, our retainers operate on rolling monthly commitments with a simple 30-day notice period. We believe our performance and ROAS results should keep you with us, not iron-clad long-term contracts. You can easily upgrade, downgrade, or scale your budget as your sales capacity changes.",
    category: "Pricing"
  }
];
