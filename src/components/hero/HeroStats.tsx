import { Video, Store, Bike, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Video,
    value: "100%",
    label: "Video-First Discovery",
    desc: "Short food reels of real dishes",
  },
  {
    icon: Sparkles,
    value: "10 KM",
    label: "Hyper-Local Radius",
    desc: "Street food & hidden gems",
  },
  {
    icon: Store,
    value: "3-Sided",
    label: "Connected Ecosystem",
    desc: "Users, Restaurants & Riders",
  },
  {
    icon: Bike,
    value: "< 30m",
    label: "Seamless Delivery",
    desc: "Direct from kitchen to table",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 md:mt-16 pt-8 border-t border-[#E8E1D5]">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="p-4 rounded-2xl bg-white/70 border border-[#E8E1D5]/70 hover:border-[#FF5023]/40 transition-colors shadow-xs"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFF2EE] text-[#FF5023] flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-xl sm:text-2xl text-[#141210]">
                {stat.value}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#141210]">
              {stat.label}
            </div>
            <div className="text-[11px] text-[#8C857B] mt-0.5 leading-snug">
              {stat.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
}
