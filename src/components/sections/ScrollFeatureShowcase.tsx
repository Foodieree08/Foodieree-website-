"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Flame,
  Play,
  Utensils,
  Video,
  Users,
  Compass,
  Sparkles,
  Percent,
  CheckCircle2,
  ArrowRight,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";

interface FeatureStep {
  id: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  bigTitle: string;
  highlightText: string;
  accentColor: string;
  description: string;
  keyPoint: string;
  tag: string;
}

const features: FeatureStep[] = [
  {
    id: "delivery",
    badge: "01 • DINER FREEDOM",
    badgeBg: "bg-emerald-600",
    badgeText: "text-white",
    bigTitle: "0% Delivery Fee",
    highlightText: "Zero Hidden Surcharges",
    accentColor: "#047857",
    description: "Enjoy your favorite piping-hot meals with completely free delivery on all local orders within a 10 km radius. No surprise surge pricing or rain charges.",
    keyPoint: "What you see on the menu is exactly what you pay at checkout.",
    tag: "FOR ALL FOOD LOVERS",
  },
  {
    id: "platform",
    badge: "02 • KITCHEN EMPOWERMENT",
    badgeBg: "bg-[#C22918]",
    badgeText: "text-white",
    bigTitle: "0% Platform Fee",
    highlightText: "100% Profit to Vendors",
    accentColor: "#C22918",
    description: "Say goodbye to 30% aggregator cuts. Foodieree charges 0% platform commissions, allowing local cloud kitchens, street vendors, and heritage restaurants to thrive.",
    keyPoint: "Restaurants keep 100% of their earnings with daily settlements.",
    tag: "FOR LOCAL KITCHENS",
  },
  {
    id: "creators",
    badge: "03 • CREATOR MONETIZATION",
    badgeBg: "bg-amber-500",
    badgeText: "text-black",
    bigTitle: "Up to 2% Per Order",
    highlightText: "Direct Reel Royalties",
    accentColor: "#D97706",
    description: "Food bloggers, influencers, and foodies earn up to 2% commission on every single dish ordered directly through their authentic 15-second sizzle video reels.",
    keyPoint: "Turn your passion for food reviews into a daily revenue stream.",
    tag: "FOR CONTENT CREATORS",
  },
];

const metricPills = [
  { label: "50+ VENDORS ONBOARDED", icon: Utensils, iconBg: "bg-[#047857]" },
  { label: "30+ FOOD CREATORS", icon: Video, iconBg: "bg-[#C22918]" },
  { label: "500+ FOODIES & ORDERS", icon: Users, iconBg: "bg-[#12100E]" },
  { label: "10 KM HYPER-LOCAL RADAR", icon: Compass, iconBg: "bg-amber-600" },
];

export default function ScrollFeatureShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cycle automatically or on user interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % features.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-10 sm:py-14 bg-[#FAF7F0] border-b-2 border-[#12100E] relative overflow-hidden select-none"
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Badges (From User Image 1) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#D6CEC1]">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="stamp-badge-punchy flex items-center gap-1.5 shadow-[3px_3px_0px_#12100E]">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>LIVE 15S SIZZLE FEEDS</span>
            </span>

            <a
              href="#reels"
              className="stamp-badge bg-[#047857] hover:bg-[#065F46] text-white border-2 border-[#12100E] flex items-center gap-1.5 transition-colors shadow-[3px_3px_0px_#12100E] cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>TAP TO PLAY ON WEBSITE</span>
            </a>
          </div>

          <div className="font-mono text-xs font-bold text-[#736B5E] hidden md:flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C22918]" />
            <span>THE FOODIEREE TRIPARTY PROMISE</span>
          </div>
        </div>

        {/* 4 Metric Pills in a Clean Row (From User Image 2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {metricPills.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={`metric-pill-${idx}`}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white border-2 border-[#12100E] shadow-[3px_3px_0px_#12100E] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#12100E] transition-all"
              >
                <div className={`w-7 h-7 rounded-lg ${metric.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-black tracking-wider uppercase text-[#12100E] whitespace-nowrap truncate">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Compact Scroll & Interactive Big Text Animation Showcase */}
        <div className="rounded-3xl bg-white border-2 border-[#12100E] p-6 sm:p-10 shadow-[6px_6px_0px_#12100E] relative overflow-hidden">
          
          {/* Step Selector Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 mb-8 overflow-x-auto no-scrollbar pb-1 border-b border-[#EDE6D8]">
            {features.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveStep(idx)}
                className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                  activeStep === idx
                    ? `${item.badgeBg} ${item.badgeText} shadow-[2px_2px_0px_#12100E] scale-102`
                    : "bg-[#FAF7F0] text-[#736B5E] hover:text-[#12100E] border border-[#D6CEC1]"
                }`}
              >
                <span>{item.bigTitle}</span>
                {activeStep === idx && (
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* Animated Big Text Display */}
          <div className="min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[activeStep].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Left Side: Big Typography */}
                <div className="lg:col-span-7">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider ${features[activeStep].badgeBg} ${features[activeStep].badgeText} mb-3`}>
                    {features[activeStep].badge}
                  </span>

                  <h3 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black text-[#12100E] tracking-tight leading-[1.05] mb-2">
                    {features[activeStep].bigTitle}
                  </h3>

                  <p
                    className="font-editorial text-2xl sm:text-3xl font-black italic mb-3"
                    style={{ color: features[activeStep].accentColor }}
                  >
                    {features[activeStep].highlightText}
                  </p>

                  <p className="text-sm sm:text-base text-[#57524A] font-medium leading-relaxed max-w-xl">
                    {features[activeStep].description}
                  </p>
                </div>

                {/* Right Side: Key Value Box */}
                <div className="lg:col-span-5">
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F0] border-2 border-[#12100E] shadow-[4px_4px_0px_#12100E] flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#736B5E]">
                        {features[activeStep].tag}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: features[activeStep].accentColor }}
                      />
                      <p className="text-xs sm:text-sm font-sans font-bold text-[#12100E] leading-snug">
                        {features[activeStep].keyPoint}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D6CEC1] flex items-center justify-between">
                      <span className="text-[10.5px] font-mono font-bold text-[#736B5E]">
                        Step {activeStep + 1} of 3
                      </span>
                      <a
                        href="#downloads"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12100E] hover:text-[#C22918] transition-colors"
                      >
                        <span>Get App</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator Bar */}
          <div className="mt-8 pt-4 border-t border-[#EDE6D8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {features.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Go to feature ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeStep === i
                      ? "w-8 bg-[#12100E]"
                      : "w-2 bg-[#D6CEC1] hover:bg-[#8C8275]"
                  }`}
                />
              ))}
            </div>

            <span className="text-[11px] font-mono font-bold text-[#736B5E]">
              Auto-cycling &bull; Click tabs to explore
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
