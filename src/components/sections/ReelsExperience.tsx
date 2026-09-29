"use client";

import { useState } from "react";
import InteractiveReelCard, { ReelItem } from "@/components/ui/InteractiveReelCard";
import ReelsModalPlayer from "@/components/ui/ReelsModalPlayer";
import { ArrowRight, Flame, Store, Sparkles, Video, Play } from "lucide-react";

const reelsData: ReelItem[] = [
  {
    id: "r1",
    title: "Handi Champaran Butter Chicken",
    restaurant: "Royal Handi Darbar",
    location: "Bailey Road, Danapur",
    distance: "1.4 km",
    creator: "@foodieree",
    price: "₹380",
    rating: "4.9",
    likes: "42.8K",
    image: "/images/hero_food_reel.jpg",
    tags: ["HOT DISPATCH", "Handi Clay Pot"],
    instagramUrl: "https://www.instagram.com/foodieree/reels/?hl=en",
  },
  {
    id: "r2",
    title: "Nawabi Dum Gosht Biryani",
    restaurant: "Mughal Treat Kitchen",
    location: "Fraser Road, Patna",
    distance: "3.2 km",
    creator: "@foodieree",
    price: "₹420",
    rating: "4.8",
    likes: "58.1K",
    image: "/images/biryani_feast.jpg",
    tags: ["ROYAL FEAST", "Dum Handi"],
    instagramUrl: "https://www.instagram.com/foodieree/reels/?hl=en",
  },
  {
    id: "r3",
    title: "Fire & Spice Pani Puri Splash",
    restaurant: "Gali No. 4 Street Cart",
    location: "Boring Canal Road",
    distance: "2.1 km",
    creator: "@foodieree",
    price: "₹60",
    rating: "4.9",
    likes: "36.4K",
    image: "/images/street_chaat.jpg",
    tags: ["STREET LEGEND", "Spicy Mint"],
    instagramUrl: "https://www.instagram.com/foodieree/reels/?hl=en",
  },
  {
    id: "r4",
    title: "Crispy Golden Ghee Masala Dosa",
    restaurant: "Dakshin Sagar Cafe",
    location: "Kankarbagh, Patna",
    distance: "4.8 km",
    creator: "@foodieree",
    price: "₹140",
    rating: "4.8",
    likes: "29.7K",
    image: "/images/crispy_dosa.jpg",
    tags: ["BREAKFAST HIT", "Ghee Roast"],
    instagramUrl: "https://www.instagram.com/foodieree/reels/?hl=en",
  },
  {
    id: "r5",
    title: "Wood-Fired Truffle Margherita",
    restaurant: "Napoli Fire Artisanal",
    location: "Raja Bazar, Patna",
    distance: "2.9 km",
    creator: "@foodieree",
    price: "₹490",
    rating: "4.7",
    likes: "31.2K",
    image: "/images/artisan_pizza.jpg",
    tags: ["ARTISANAL", "Wood-Fired"],
    instagramUrl: "https://www.instagram.com/foodieree/reels/?hl=en",
  },
];

export default function ReelsExperience() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const openReel = (index: number) => {
    setActiveReelIndex(index);
    setModalOpen(true);
  };

  return (
    <section id="reels" className="py-14 sm:py-20 bg-[#F7F3EB] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-[#D6CEC1] gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="stamp-badge-punchy">
                <Flame className="w-3 h-3 fill-current" />
                Live 15s Sizzle Feeds
              </span>
              <span className="stamp-badge bg-[#047857] text-white border-transparent flex items-center gap-1">
                <Play className="w-3 h-3 fill-current" />
                Tap to Play on Website
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-[#12100E] tracking-tight leading-[1.1]">
              Don&apos;t search for food.{" "}
              <span className="italic font-serif text-[#C22918] block sm:inline">
                Let food find you.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#57524A] mt-2.5 font-medium leading-relaxed">
              Watch 15-second authentic video reels live from sizzling woks and tandoors across Patna. Tap any card to play the full reel player right on the website!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openReel(0)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12100E] hover:bg-[#C22918] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#12100E] active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Play All Reels</span>
            </button>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between text-xs font-mono text-[#736B5E] mb-3 px-1">
          <span className="flex items-center gap-1.5 font-bold text-[#C22918]">
            <Flame className="w-3.5 h-3.5 fill-[#C22918]" />
            Tap card to watch reel
          </span>
          <span className="text-[11px] text-[#A8A196]">Scroll ↔</span>
        </div>

        {/* Responsive Grid on Desktop / Smooth Swipeable Carousel on Mobile */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 no-scrollbar scroll-smooth">
          {reelsData.map((reel, index) => (
            <div
              key={reel.id}
              className="w-[78vw] max-w-[290px] sm:w-auto shrink-0 snap-center sm:shrink sm:snap-align-none"
            >
              <InteractiveReelCard
                reel={reel}
                onOpenPlayer={() => openReel(index)}
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Interactive Reels Modal Player */}
        <ReelsModalPlayer
          reels={reelsData}
          initialIndex={activeReelIndex}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        {/* Restaurant Partner Video Reel Menu Business Callout */}
        <div className="mt-10 p-5 sm:p-6 rounded-xl bg-white border border-[#12100E] shadow-[4px_4px_0px_#12100E] flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#047857] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Store className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#047857]">
                Restaurant Partner Network
              </div>
              <h3 className="font-editorial text-lg sm:text-xl font-black text-[#12100E]">
                Own a Restaurant or Kitchen? Boost Business with Video Reel Menus.
              </h3>
              <p className="text-xs text-[#57524A]">
                Convert 3.8x more hungry diners with 15-second sizzle video menus. 0% onboarding fees & automated order queue.
              </p>
            </div>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.foodieree.vendor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#047857] hover:bg-[#065F46] text-white font-mono text-xs font-black uppercase tracking-wider shadow-sm active:scale-95 transition-all shrink-0"
          >
            <span>Partner Your Kitchen</span>
            <ArrowRight className="w-4 h-4 text-emerald-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
