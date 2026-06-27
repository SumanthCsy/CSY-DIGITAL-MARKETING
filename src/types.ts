export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  category: "Development" | "SEO & SMM" | "Advertising" | "Branding & Design" | "Video & Content" | "AI & Consulting";
  description: string;
  features: string[];
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string };
  projectUrl?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  category: string;
  problem: string;
  solution: string;
  results: string;
  growthData: { name: string; value: number }[];
  stats: { label: string; val: string; trend?: "up" | "down" }[];
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  type: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services" | "Pricing" | "Process";
}
