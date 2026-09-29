"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Heart,
  Share2,
  Bookmark,
  Sparkles,
  MapPin,
  Star,
  Flame,
  Clock,
  Volume2,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none flex items-center justify-center pt-8 pb-4">
      {/* Decorative Glow Background */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5023]/25 via-[#FFA033]/20 to-[#10B981]/15 rounded-[48px] blur-3xl -z-10 animate-pulse-glow" />

      {/* Floating Animated SVG Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-5 hidden sm:block"
        viewBox="0 0 500 600"
        fill="none"
      >
        <path
          d="M 60 120 C 120 180, 180 200, 240 220"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          strokeDasharray="4 6"
          className="opacity-40"
        />
        <path
          d="M 440 280 C 380 320, 320 340, 260 380"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          strokeDasharray="4 6"
          className="opacity-40"
        />
        <defs>
          <linearGradient id="lineGradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF5023" />
            <stop offset="100%" stopColor="#FFA033" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#FF5023" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Smartphone Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[290px] sm:w-[320px] md:w-[340px] rounded-[44px] p-3 bg-gradient-to-b from-[#2A2723] via-[#1A1816] to-[#121110] shadow-[0_30px_70px_-15px_rgba(20,18,16,0.5),0_0_0_1px_rgba(255,255,255,0.15)]"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-white/10" />
          <div className="w-2 h-2 rounded-full bg-[#059669]/90 animate-pulse" />
        </div>

        {/* Screen Content */}
        <div className="relative w-full aspect-[9/18.5] rounded-[36px] overflow-hidden bg-black select-none">
          {/* Real Generated Food Reel Image */}
          <Image
            src="/images/hero_food_reel.jpg"
            alt="Sizzling Royal Butter Chicken Food Reel"
            fill
            priority
            sizes="(max-width: 640px) 290px, (max-width: 768px) 320px, 340px"
            className="object-cover object-center transform scale-105 hover:scale-110 transition-transform duration-700"
          />

          {/* Dark Gradient Overlay for Reel UI Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40 pointer-events-none" />

          {/* Reel Top Bar */}
          <div className="absolute top-9 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 text-[#FF5023] animate-bounce" />
              <span>Trending in Patna</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80">
              <Volume2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Right Action Rail (Reel Icons) */}
          <div className="absolute right-3 bottom-24 flex flex-col items-center gap-3 z-20 text-white">
            <div className="flex flex-col items-center gap-1 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform shadow-lg">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <span className="text-[11px] font-bold drop-shadow">48.2K</span>
            </div>

            <div className="flex flex-col items-center gap-1 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Bookmark className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold drop-shadow">12.4K</span>
            </div>

            <div className="flex flex-col items-center gap-1 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Share2 className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold drop-shadow">Share</span>
            </div>
          </div>

          {/* Bottom Reel Details & Quick Order Button */}
          <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF5023] to-[#FFA033] flex items-center justify-center text-[10px] font-bold text-white border border-white/40">
                FR
              </div>
              <span className="text-xs font-bold tracking-wide">@biharfoodstories</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 font-medium">Creator</span>
            </div>

            <p className="text-xs text-white/90 line-clamp-2 mb-2 font-normal leading-tight">
              Sizzling Handi Butter Chicken with Garlic Naan at Grand Darbar! Saffron aroma is unreal 🤤
            </p>

            {/* Quick Food Card inside Reel */}
            <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-xl text-[#141210] flex items-center justify-between border border-white/80 shadow-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#FF5023]">
                  <MapPin className="w-3 h-3" />
                  <span>Grand Darbar • 1.4 km</span>
                </div>
                <div className="text-xs font-black text-[#141210]">Handi Butter Chicken</div>
              </div>
              <button className="px-3 py-1.5 rounded-xl bg-[#FF5023] hover:bg-[#E84318] text-white text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-all">
                <ShoppingBag className="w-3 h-3" />
                <span>₹380</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: 10 KM Discovery Radar Badge (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="absolute -top-4 -left-4 sm:-left-12 z-20 p-3.5 rounded-2xl glass-card text-[#141210] shadow-xl animate-float max-w-[190px]"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#FFF2EE] border border-[#FFDCD2] flex items-center justify-center text-[#FF5023]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#FF5023] uppercase tracking-wider">
              10 KM Radius
            </div>
            <div className="text-xs font-extrabold text-[#141210]">
              Hyper-Local Cravings
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: Live Rating & Street Food Spotlight (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -15 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7 }}
        className="absolute top-16 -right-4 sm:-right-10 z-20 p-3 rounded-2xl glass-card text-[#141210] shadow-xl animate-float-alt max-w-[200px]"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#141210]">4.9 / 5</span>
        </div>
        <div className="text-[11px] text-[#57524A] font-medium flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-[#059669]" />
          <span>Verified Local Gem</span>
        </div>
      </motion.div>

      {/* Floating Card 3: Lightning Delivery Partner Status (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        className="absolute bottom-6 -left-4 sm:-left-10 z-20 p-3.5 rounded-2xl glass-card text-[#141210] shadow-xl animate-float max-w-[210px]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-[#141210] flex items-center gap-1">
              22 Mins Avg.
            </div>
            <div className="text-[11px] text-[#059669] font-bold">
              ⚡ Kitchen to Doorstep
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
