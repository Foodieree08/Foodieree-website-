"use client";

import { Bike, Sparkles, Video, ArrowRight } from "lucide-react";

interface PillarCard {
  id: string;
  stepNum: string;
  tag: string;
  badge: string;
  title: string;
  oneLiner: string;
  bgClass: string;
  textColor: string;
  subtextColor: string;
  pillBg: string;
  pillText: string;
  btnBg: string;
  btnText: string;
  btnBorder: string;
  btnLink: string;
  btnLabel: string;
  icon: any;
}

const pillars: PillarCard[] = [
  {
    id: "delivery",
    stepNum: "01",
    tag: "FOR USERS",
    badge: "FREE DELIVERY",
    title: "0% Delivery Fee",
    oneLiner: "Zero delivery surge charges for users. What you see is what you pay at checkout.",
    bgClass: "bg-[#047857]",
    textColor: "text-white",
    subtextColor: "text-emerald-100",
    pillBg: "bg-white text-[#047857]",
    pillText: "text-[#047857]",
    btnBg: "bg-white text-[#12100E] hover:bg-emerald-50",
    btnText: "text-[#12100E]",
    btnBorder: "border-[#12100E]",
    btnLink: "https://play.google.com/store/apps/details?id=com.foodieree.customer",
    btnLabel: "ORDER NOW",
    icon: Bike,
  },
  {
    id: "platform-fee",
    stepNum: "02",
    tag: "FOR USERS",
    badge: "ZERO PLATFORM CHARGE",
    title: "0% Platform Fee",
    oneLiner: "0% platform fee for users. No sneaky packaging fees or hidden service taxes.",
    bgClass: "bg-[#C22918]",
    textColor: "text-white",
    subtextColor: "text-red-100",
    pillBg: "bg-white text-[#C22918]",
    pillText: "text-[#C22918]",
    btnBg: "bg-white text-[#12100E] hover:bg-red-50",
    btnText: "text-[#12100E]",
    btnBorder: "border-[#12100E]",
    btnLink: "https://play.google.com/store/apps/details?id=com.foodieree.customer",
    btnLabel: "GET APP",
    icon: Sparkles,
  },
  {
    id: "creators",
    stepNum: "03",
    tag: "FOR CREATORS",
    badge: "REEL COMMISSION",
    title: "Up to 2% Per Order Commission",
    oneLiner: "Earn up to 2% commission every time a customer orders food directly from your created video reel.",
    bgClass: "bg-[#FFB800]",
    textColor: "text-[#12100E]",
    subtextColor: "text-[#422C00]",
    pillBg: "bg-[#12100E] text-white",
    pillText: "text-white",
    btnBg: "bg-[#12100E] text-white hover:bg-[#2A241E]",
    btnText: "text-white",
    btnBorder: "border-[#12100E]",
    btnLink: "https://play.google.com/store/apps/details?id=com.foodieree.customer",
    btnLabel: "ORDER FROM REEL",
    icon: Video,
  },
];

export default function ScrollTriPartyShowcase() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F0] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* 3 Catchy Cards with Big Text */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pillars.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-2xl border-2 border-[#12100E] ${card.bgClass} p-6 sm:p-8 shadow-[6px_6px_0px_#12100E] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1`}
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-black uppercase tracking-wider border border-[#12100E] shadow-[1.5px_1.5px_0px_#12100E] ${card.pillBg}`}>
                        {card.badge}
                      </span>
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider opacity-85 ${card.textColor}`}>
                        {card.tag}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-lg border border-[#12100E] bg-white/15 flex items-center justify-center font-mono text-xs font-black ${card.textColor}`}>
                      {card.stepNum}
                    </div>
                  </div>

                  {/* Big Text Title */}
                  <h3 className={`font-editorial text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight leading-[1.06] mb-3 ${card.textColor}`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base font-medium leading-snug mb-8 ${card.subtextColor}`}>
                    {card.oneLiner}
                  </p>
                </div>

                {/* Bottom Action Badge Button */}
                <div className="pt-4 border-t border-black/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center">
                      <IconComponent className={`w-4 h-4 ${card.textColor}`} />
                    </div>
                    <span className={`text-[11px] font-mono font-bold uppercase ${card.textColor} opacity-80`}>
                      Foodieree Advantage
                    </span>
                  </div>

                  <a
                    href={card.btnLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-[#12100E] font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#12100E] active:scale-95 transition-all cursor-pointer ${card.btnBg}`}
                  >
                    <span>{card.btnLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
