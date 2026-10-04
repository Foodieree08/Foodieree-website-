"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Store,
  Bike,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Flame,
  Star,
  ShoppingBag
} from "lucide-react";

interface AppSlide {
  id: string;
  tabLabel: string;
  badge: string;
  icon: any;
  accentColor: string;
  headline: string;
  description: string;
  points: string[];
  ctaText: string;
  ctaHref: string;
  mockup: {
    title: string;
    subtitle: string;
    image: string;
    stat: string;
    badgeText: string;
  };
}

const slides: AppSlide[] = [
  {
    id: "user",
    tabLabel: "Customer App",
    badge: "01 • CUSTOMER APP",
    icon: Smartphone,
    accentColor: "#C22918",
    headline: "Watch 15s Sizzling Reels. Crave & Order Instantly.",
    description: "Discover authentic street food, chef specials & regional heritage recipes within 10 km through immersive short video feeds.",
    points: [
      "10 KM Hyper-Local Proximity Radar for maximum food freshness",
      "1-Tap Instant Craving Checkout directly from the video reel",
      "Discover & support verified local food creators across your city"
    ],
    ctaText: "Explore Food Reels",
    ctaHref: "#reels",
    mockup: {
      title: "Handi Butter Chicken",
      subtitle: "Royal Handi Darbar • 1.4 km",
      image: "/images/hero_food_reel.jpg",
      stat: "₹180 • 20 mins delivery",
      badgeText: "🔥 42.8k Likes"
    }
  },
  {
    id: "restaurant",
    tabLabel: "Restaurant Partner App",
    badge: "02 • RESTAURANT PARTNER APP",
    icon: Store,
    accentColor: "#047857",
    headline: "Turn Short Video Reels into High Daily Orders.",
    description: "Publish engaging video menus with 0% setup fees and reach thousands of hungry foodies across your city without predatory commissions.",
    points: [
      "3.8x Higher Conversion compared to static photo menus",
      "Automated Kitchen Queue & Live Dispatch Management",
      "Same-Day Revenue Settlements & Transparent Daily Analytics"
    ],
    ctaText: "Partner Your Kitchen",
    ctaHref: "#ecosystem",
    mockup: {
      title: "Grand Darbar Kitchen",
      subtitle: "Bailey Road, Patna",
      image: "/images/restaurant_chef.jpg",
      stat: "₹38,450 Revenue • 84 Orders",
      badgeText: "● Live & Accepting"
    }
  },
  {
    id: "rider",
    tabLabel: "Delivery Partner App",
    badge: "03 • DELIVERY PARTNER APP",
    icon: Bike,
    accentColor: "#D97706",
    headline: "Short Local Routes. Maximum Daily Earnings.",
    description: "Designed specifically for delivery partners. Short 10 KM delivery legs mean less physical fatigue, fast round trips, and guaranteed daily UPI payouts.",
    points: [
      "Short 10 KM Delivery Legs for quick turnarounds & high volume",
      "Daily Instant UPI Transfers with peak & monsoon bonus multipliers",
      "Comprehensive Partner Accident Insurance & zero kitchen wait times"
    ],
    ctaText: "Ride With Foodieree",
    ctaHref: "#ecosystem",
    mockup: {
      title: "Active Delivery Leg",
      subtitle: "Royal Handi → Bailey Road",
      image: "/images/biryani_feast.jpg",
      stat: "₹78 Payout • ETA: 5 mins",
      badgeText: "⚡ Smart Navigation"
    }
  }
];

export default function HeroAppSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = slides[currentIdx];

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full rounded-2xl bg-white border-2 border-[#12100E] shadow-[5px_5px_0px_#12100E] p-4 sm:p-7 md:p-10 transition-all overflow-hidden"
    >
      {/* Top 3 App Navigation Tabs & Controls - Responsive on Mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D6CEC1] gap-3 mb-5 sm:mb-8">
        {/* 3 Tab Selector Buttons (Full Width 3-Column on Mobile, Flex on Desktop) */}
        <div className="grid grid-cols-3 sm:flex sm:items-center gap-1.5 sm:gap-2.5 w-full sm:w-auto">
          {slides.map((s, idx) => {
            const isSelected = currentIdx === idx;
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#12100E] text-white shadow-sm scale-102"
                    : "bg-[#FAF7F0] text-[#57524A] hover:text-[#12100E] border border-[#D6CEC1]"
                }`}
              >
                <TabIcon
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: isSelected ? s.accentColor : "currentColor" }}
                />
                <span className="hidden sm:inline">{s.tabLabel}</span>
                <span className="sm:hidden truncate">{s.id.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Prev/Next Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
          <span className="text-[10px] font-mono text-[#736B5E] sm:hidden uppercase font-semibold">
            {slide.tabLabel} App ({currentIdx + 1}/3)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FAF7F0] hover:bg-[#12100E] hover:text-white text-[#12100E] border border-[#D6CEC1] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#736B5E] font-bold px-1 min-w-[50px] text-center">
              0{currentIdx + 1} / 0{slides.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FAF7F0] hover:bg-[#12100E] hover:text-white text-[#12100E] border border-[#D6CEC1] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Animated Full-Width Slide Body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
        >
          {/* Left Column: Bold Headline & Detailed Bullets */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Punchy Editorial Stamp Badges */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
                <span className="stamp-badge-punchy text-[9.5px] sm:text-[10.5px]">
                  <Flame className="w-3 h-3 fill-current" />
                  Special Report • Tri-Party Network
                </span>
                <span className="stamp-badge bg-white text-black text-[9.5px] sm:text-[10.5px]">
                  3 Connected Apps
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[9.5px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: slide.accentColor }}
                >
                  {slide.badge}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-[38px] font-black text-[#12100E] leading-tight mb-3">
                {slide.headline}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-[#57524A] font-medium leading-relaxed mb-4 sm:mb-5 max-w-xl">
                {slide.description}
              </p>

              {/* 3 Key Bullets */}
              <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                {slide.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#2E2A24]">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: slide.accentColor }}
                    />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={slide.ctaHref}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 sm:px-6 py-3 rounded-lg text-white font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#12100E] border border-[#12100E] active:scale-95 transition-all"
                style={{ backgroundColor: slide.accentColor }}
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card Preview */}
          <div className="lg:col-span-5 flex items-center justify-center mt-2 lg:mt-0">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#12100E] p-4 text-white shadow-[6px_6px_0px_#12100E] border-2 border-[#12100E]">
              {/* Card Image */}
              <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden mb-3 border border-white/15">
                <Image
                  src={slide.mockup.image}
                  alt={slide.mockup.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded text-[10px] font-mono font-bold text-white shadow"
                    style={{ backgroundColor: slide.accentColor }}
                  >
                    {slide.mockup.badgeText}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-white leading-tight">
                    {slide.mockup.title}
                  </h4>
                  <p className="text-[11px] font-mono text-[#D6CEC1]">
                    {slide.mockup.subtitle}
                  </p>
                </div>
              </div>

              {/* Stat Bar */}
              <div className="p-2.5 rounded-lg bg-[#24211D] border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#A8A196]">Overview:</span>
                <span className="font-bold text-white" style={{ color: slide.accentColor }}>
                  {slide.mockup.stat}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
