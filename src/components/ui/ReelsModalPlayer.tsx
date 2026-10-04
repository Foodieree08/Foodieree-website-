"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Heart,
  Bookmark,
  Share2,
  MapPin,
  Star,
  ShoppingBag,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Flame,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ReelItem } from "./InteractiveReelCard";

interface ReelsModalPlayerProps {
  reels: ReelItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReelsModalPlayer({
  reels,
  initialIndex,
  isOpen,
  onClose,
}: ReelsModalPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentReel = reels[currentIndex] || reels[0];

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsPlaying(true);
    setProgress(0);
  }, [initialIndex, isOpen]);

  // Sync video play/pause and mute state
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle video progress update
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(current);
    }
  };

  // Keyboard navigation (Esc to close, Arrow keys to switch)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentIndex((prev) => (prev + 1) % reels.length);
        setProgress(0);
        setIsPlaying(true);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
        setProgress(0);
        setIsPlaying(true);
      }
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
      if (e.key === "m" || e.key === "M") {
        setIsMuted((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, reels.length, onClose]);

  if (!isOpen) return null;

  const isCurrentLiked = liked[currentReel.id] || false;
  const isCurrentSaved = saved[currentReel.id] || false;

  const toggleLike = () => {
    setLiked((prev) => ({ ...prev, [currentReel.id]: !prev[currentReel.id] }));
  };

  const toggleSave = () => {
    setSaved((prev) => ({ ...prev, [currentReel.id]: !prev[currentReel.id] }));
  };

  const nextReel = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const prevReel = () => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer shadow-lg active:scale-95"
          aria-label="Close Reels Player"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Navigation Arrow (Desktop) */}
        <button
          onClick={prevReel}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer shadow-xl active:scale-95"
          aria-label="Previous Reel"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Next Navigation Arrow (Desktop) */}
        <button
          onClick={nextReel}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer shadow-xl active:scale-95"
          aria-label="Next Reel"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Central Vertical Phone Reel Container */}
        <motion.div
          key={currentReel.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-[380px] h-[85vh] max-h-[720px] rounded-3xl overflow-hidden bg-[#12100E] border-2 border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col justify-between select-none"
        >
          {/* Reel Progress Bar */}
          <div className="absolute top-0 inset-x-0 z-30 h-1 bg-white/30">
            <div
              className="h-full bg-[#FF3B14] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Real Video Layer with Fallback Poster */}
          <div
            className="absolute inset-0 z-0 cursor-pointer"
            onClick={togglePlayPause}
          >
            {currentReel.video ? (
              <video
                ref={videoRef}
                src={currentReel.video}
                poster={currentReel.image}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <Image
                src={currentReel.image}
                alt={currentReel.title}
                fill
                priority
                className={`object-cover object-center transition-transform duration-700 ${
                  isPlaying ? "scale-105" : "scale-100"
                }`}
              />
            )}

            {/* Dark Video Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Top Info Bar */}
          <div className="relative z-20 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#FF3B14] fill-current" />
                <span>{currentReel.tags[0]}</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-600/90 text-white font-mono text-[9px] font-bold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>REAL LIVE REEL</span>
              </span>
            </div>

            {/* Sound Mute Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-amber-300 transition-colors border border-white/20 cursor-pointer active:scale-95"
              aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>

          {/* Center Play Indicator when Paused */}
          {!isPlaying && (
            <div
              onClick={togglePlayPause}
              className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer bg-black/40 backdrop-blur-xs"
            >
              <div className="w-16 h-16 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl scale-110">
                <Play className="w-8 h-8 fill-current ml-1 text-[#12100E]" />
              </div>
            </div>
          )}

          {/* Right Interaction Sidebar */}
          <div className="relative z-20 self-end p-4 flex flex-col items-center gap-3 text-white">
            {/* Like */}
            <button
              onClick={toggleLike}
              className="flex flex-col items-center gap-1 cursor-pointer group"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                  isCurrentLiked
                    ? "bg-[#C22918] text-white scale-110 shadow-lg"
                    : "bg-black/60 text-white hover:bg-black/80"
                }`}
              >
                <Heart className={`w-5 h-5 ${isCurrentLiked ? "fill-white" : ""}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">
                {isCurrentLiked ? "Liked" : currentReel.likes}
              </span>
            </button>

            {/* Save */}
            <button
              onClick={toggleSave}
              className="flex flex-col items-center gap-1 cursor-pointer group"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                  isCurrentSaved
                    ? "bg-amber-400 text-black scale-110 shadow-lg"
                    : "bg-black/60 text-white hover:bg-black/80"
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isCurrentSaved ? "fill-black" : ""}`} />
              </div>
              <span className="text-[10px] font-mono font-bold">Save</span>
            </button>

            {/* Instagram Link */}
            <a
              href={currentReel.instagramUrl || "https://www.instagram.com/foodieree/reels/?hl=en"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 cursor-pointer group"
              title="Open Reel in Instagram"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono font-bold">Insta</span>
            </a>
          </div>

          {/* Bottom Dish & Order Panel */}
          <div className="relative z-20 p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white pt-6">
            <div className="flex items-center gap-1.5 text-amber-300 text-xs font-mono font-bold mb-1">
              <span>{currentReel.creator}</span>
              <span className="px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 text-[9px]">Verified</span>
            </div>

            <h3 className="font-editorial text-xl font-bold text-white leading-tight mb-1">
              {currentReel.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-300 mb-3">
              <span className="flex items-center gap-1 text-[#FF3B14]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentReel.restaurant}</span>
              </span>
              <span>•</span>
              <span className="text-white font-bold">{currentReel.distance}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-300 font-bold">
                <Star className="w-3 h-3 fill-amber-300" />
                {currentReel.rating}
              </span>
            </div>

            {/* 1-Tap Direct Checkout Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#C22918] hover:bg-[#A82012] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg active:scale-98 transition-all"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Order on Customer App</span>
              </div>
              <div className="flex items-center gap-1.5 font-black text-sm">
                <span>{currentReel.price}</span>
                <span className="text-[8.5px] px-2 py-0.5 rounded bg-black/40 font-bold text-emerald-300">
                  0% Delivery Fee • 0% Platform Fee
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
