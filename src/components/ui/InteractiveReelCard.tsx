"use client";

import { useState } from "react";
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
}

export default function InteractiveReelCard({ reel }: InteractiveReelCardProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Extract Instagram reel ID from URL
  const getReelId = (url?: string) => {
    if (!url) return "";
    const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : "";
  };

  const reelId = getReelId(reel.instagramUrl);
  const embedUrl = reelId
    ? `https://www.instagram.com/reel/${reelId}/embed/`
    : "";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="relative w-full aspect-[9/16] min-h-[480px] sm:min-h-[520px] rounded-2xl overflow-hidden bg-black border-2 border-[#12100E] shadow-[5px_5px_0px_#12100E]"
    >
      {/* Price Badge positioned to the left side of the bottom bookmark icon */}
      {reel.price && (
        <div className="absolute bottom-3 right-12 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/95 text-[#12100E] border-2 border-[#12100E] font-mono font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#12100E] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
            <span>{reel.price}</span>
          </span>
        </div>
      )}

      {!iframeLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-stone-300 font-mono text-xs gap-2 z-10">
          <div className="w-7 h-7 border-2 border-[#FF3B14] border-t-transparent rounded-full animate-spin" />
          <span>Loading Video...</span>
        </div>
      )}

      {embedUrl ? (
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          onLoad={() => setIframeLoaded(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
          Video unavailable
        </div>
      )}
    </motion.div>
  );
}
