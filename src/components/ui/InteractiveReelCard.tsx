"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Heart,
  Bookmark,
  MapPin,
  Star,
  ShoppingBag,
  Flame,
  Volume2,
  VolumeX,
  ExternalLink
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
}

export default function InteractiveReelCard({ reel }: InteractiveReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current && reel.video) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && reel.video) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMute = !isMuted;
      videoRef.current.muted = nextMute;
      setIsMuted(nextMute);
      if (!isPlaying) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      onClick={togglePlayPause}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-[#12100E] p-3.5 shadow-md border-2 border-[#12100E] group select-none flex flex-col justify-between cursor-pointer"
    >
      {/* Top Stream Progress Bar */}
      {isPlaying && (
        <div className="absolute top-0 inset-x-0 z-30 h-1 bg-white/20">
          <div
            className="h-full bg-[#FF3B14] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Video Stream Layer with Poster Fallback */}
      {reel.video ? (
        <video
          ref={videoRef}
          src={reel.video}
          poster={reel.image}
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <Image
          src={reel.image}
          alt={`${reel.title} at ${reel.restaurant}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/50 pointer-events-none" />

      {/* Top Header Information & In-Place Controls */}
      <div className="relative z-20 flex items-center justify-between">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
          <Flame className="w-2.5 h-2.5 text-[#FF3B14] fill-current" />
          <span>{reel.tags[0]}</span>
        </span>

        {/* Audio Toggle & Rating */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleMute}
            className={`p-1 rounded-full border text-xs transition-colors cursor-pointer ${
              isMuted
                ? "bg-black/70 text-white/80 border-white/20 hover:text-amber-300"
                : "bg-[#047857] text-white border-emerald-400 scale-105"
            }`}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-emerald-300" />}
          </button>

          <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold flex items-center gap-1 border border-white/15">
            <Star className="w-2.5 h-2.5 fill-amber-300" />
            <span>{reel.rating}</span>
          </span>
        </div>
      </div>

      {/* Right Side Social Metric Column */}
      <div className="relative z-30 self-end flex flex-col items-center gap-2.5 text-white">
        {/* Like */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="flex flex-col items-center gap-0.5 cursor-pointer"
        >
          <div className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${isLiked ? "bg-[#C22918] text-white" : "bg-black/60 text-white/90 hover:bg-black/80"}`}>
            <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-white" : ""}`} />
          </div>
          <span className="text-[9.5px] font-mono font-bold text-white/90">
            {isLiked ? "Liked" : reel.likes}
          </span>
        </button>

        {/* Save */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className="flex flex-col items-center gap-0.5 cursor-pointer"
        >
          <div className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${isSaved ? "bg-amber-400 text-black" : "bg-black/60 text-white/90 hover:bg-black/80"}`}>
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-black" : ""}`} />
          </div>
          <span className="text-[9.5px] font-mono font-bold text-white/90">Save</span>
        </button>

        {/* Instagram Link Direct */}
        {reel.instagramUrl && (
          <a
            href={reel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-0.5 cursor-pointer group/insta"
            title="Watch full reel on Instagram"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md group-hover/insta:scale-110 transition-transform">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-mono font-bold text-white/90">Insta</span>
          </a>
        )}
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
          className="p-2 rounded-xl bg-white/95 backdrop-blur-md text-[#12100E] flex items-center justify-between shadow-md gap-2"
        >
          <div className="pl-1 leading-none">
            <span className="font-mono font-black text-sm text-[#12100E] block">
              {reel.price}
            </span>
            <span className="text-[7.5px] sm:text-[8px] font-mono text-[#047857] font-bold block whitespace-nowrap mt-0.5">
              0% Delivery Fee • 0% Platform Fee
            </span>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#C22918] hover:bg-[#A82012] text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 active:scale-95 transition-all shadow-xs shrink-0"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
