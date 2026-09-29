"use client";

import Image from "next/image";
import {
  Heart,
  Bookmark,
  Share2,
  MapPin,
  Star,
  ShoppingBag,
  Play,
  Flame,
  Volume2
} from "lucide-react";
import { motion } from "motion/react";

export interface ReelItem {
  id: string;
  title: string;
  restaurant: string;
  location: string;
  distance: string;
  creator: string;
  price: string;
  rating: string;
  likes: string;
  image: string;
  video?: string;
  tags: string[];
  instagramUrl?: string;
}

interface InteractiveReelCardProps {
  reel: ReelItem;
  onOpenPlayer?: () => void;
}

export default function InteractiveReelCard({
  reel,
  onOpenPlayer,
}: InteractiveReelCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onOpenPlayer}
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-[#12100E] p-3.5 shadow-md border-2 border-[#12100E] group select-none flex flex-col justify-between cursor-pointer"
    >
      {/* Background Poster Image */}
      <Image
        src={reel.image}
        alt={`${reel.title} at ${reel.restaurant}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/50 pointer-events-none" />

      {/* Top Header Information */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
          <Flame className="w-2.5 h-2.5 text-[#FF3B14] fill-current" />
          <span>{reel.tags[0]}</span>
        </span>

        <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold flex items-center gap-1 border border-white/15">
          <Star className="w-2.5 h-2.5 fill-amber-300" />
          <span>{reel.rating}</span>
        </span>
      </div>

      {/* Center Play Badge on Hover & Default */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-1.5 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/30 text-white shadow-xl group-hover:scale-115 group-hover:bg-[#C22918] transition-all duration-300">
          <div className="w-11 h-11 rounded-full bg-white text-[#12100E] flex items-center justify-center shadow-md">
            <Play className="w-5 h-5 fill-current ml-0.5 text-[#12100E]" />
          </div>
          <span className="text-[10px] font-mono font-black uppercase tracking-wider">
            Tap to Play
          </span>
        </div>
      </div>

      {/* Right Side Social Metric Column */}
      <div className="relative z-30 self-end flex flex-col items-center gap-2.5 text-white">
        {/* Like */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/90">
            <Heart className="w-3.5 h-3.5 fill-white/80" />
          </div>
          <span className="text-[9.5px] font-mono font-bold text-white/90">{reel.likes}</span>
        </div>

        {/* Save */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/90">
            <Bookmark className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9.5px] font-mono font-bold text-white/90">Save</span>
        </div>
      </div>

      {/* Bottom Info & Order Bar */}
      <div className="relative z-30 text-white">
        {/* Creator Handle */}
        <div className="text-[10.5px] font-mono text-amber-300 font-bold mb-0.5 truncate flex items-center gap-1">
          <span>{reel.creator}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
        </div>

        {/* Dish Title */}
        <h4 className="font-editorial text-base sm:text-lg font-bold text-white leading-tight mb-1 line-clamp-1">
          {reel.title}
        </h4>

        {/* Restaurant & Location */}
        <div className="flex items-center gap-1 text-[11px] font-mono text-stone-300 mb-2 truncate">
          <MapPin className="w-3 h-3 text-[#C22918] shrink-0" />
          <span className="truncate">{reel.restaurant}</span>
          <span>•</span>
          <span className="text-white font-bold shrink-0">{reel.distance}</span>
        </div>

        {/* Order Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#12100E] flex items-center justify-between shadow-md"
        >
          <div className="pl-1.5 leading-none">
            <span className="font-mono font-black text-sm text-[#12100E] block">
              {reel.price}
            </span>
            <span className="text-[9px] font-mono text-[#047857] font-bold">₹0 DELIVERY</span>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#C22918] hover:bg-[#A82012] text-white font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1 active:scale-95 transition-all shadow-xs"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
