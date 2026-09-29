import { UtensilsCrossed, Sparkles, Flame, Coffee, Pizza, Compass, MapPin, ChefHat } from "lucide-react";

const tickerItems = [
  { label: "HANDI CHAMPARAN MEAT & BIRYANI", icon: Flame, tag: "HOT DISPATCH" },
  { label: "10 KM HYPER-LOCAL RADIUS", icon: Compass, tag: "PROXIMITY" },
  { label: "CRISPY GHEE MASALA DOSA", icon: Sparkles, tag: "DAKSHIN SAGAR" },
  { label: "WOOD-FIRED NEAPOLITAN PIZZA", icon: Pizza, tag: "GOURMET" },
  { label: "STREET GOLGAPPA & CHAAT GALI", icon: UtensilsCrossed, tag: "STREET CULTURE" },
  { label: "ARTISANAL SAFFRON KADAK CHAI", icon: Coffee, tag: "MORNING RITUAL" },
  { label: "DANAPUR & PATNA CREATOR NETWORK", icon: ChefHat, tag: "CREATORS" },
  { label: "20 MIN LIVE TRANSIT DELIVERY", icon: MapPin, tag: "SWIFT" },
];

export default function BrandTicker() {
  return (
    <section className="py-3.5 bg-[#FAF7F0] border-b-2 border-[#12100E] overflow-hidden select-none">
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 shrink-0">
          {tickerItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`a-${index}`}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-white border border-[#12100E] text-[#12100E] shadow-[2px_2px_0px_#12100E]"
              >
                <div className="w-5 h-5 rounded bg-[#FF3B14] text-white flex items-center justify-center">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded bg-amber-400 text-black">
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>

        {/* Duplicate loop for seamless infinite marquee */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 shrink-0" aria-hidden="true">
          {tickerItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`b-${index}`}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-white border border-[#12100E] text-[#12100E] shadow-[2px_2px_0px_#12100E]"
              >
                <div className="w-5 h-5 rounded bg-[#FF3B14] text-white flex items-center justify-center">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded bg-amber-400 text-black">
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
