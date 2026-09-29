import { ArrowRight, Smartphone, Sparkles, Flame, Award, ExternalLink } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="join" className="py-16 md:py-24 bg-[#F6F2E9] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#12100E] text-white p-8 sm:p-14 md:p-16 border-2 border-[#12100E] shadow-[8px_8px_0px_#047857] text-center overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#047857]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF3B14]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Stamp Badge */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 mb-5">
            <span className="stamp-badge bg-emerald-600 text-white border-white">
              <Award className="w-3.5 h-3.5" />
              Incubated by FasterCapital
            </span>
            <span className="stamp-badge bg-[#FF3B14] text-white border-white">
              <Sparkles className="w-3.5 h-3.5" />
              ₹0 Platform Fee • ₹0 Delivery Fee
            </span>
          </div>

          {/* Heading */}
          <h2 className="relative z-10 font-editorial text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.06] max-w-3xl mx-auto mb-5">
            Your next craving is waiting.{" "}
            <span className="text-gradient-orange italic font-serif block sm:inline">
              Taste the story.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="relative z-10 text-sm sm:text-base text-[#EDE6D8] font-normal leading-relaxed max-w-xl mx-auto mb-8 font-sans">
            Discover authentic local street food, support neighborhood restaurant creators, and experience 15-second food reels across Bihar and India.
          </p>

          {/* CTA Buttons & Store Links */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto mb-6">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-black hover:bg-[#1A1815] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-emerald-500 shadow-[3px_3px_0px_#047857] active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.006 2.006 0 0 1-.61-.714V2.528c.18-.285.39-.529.609-.714z" fill="#00D2FF"/>
                <path d="M17.18 8.613l-3.388 3.387 3.388 3.388 3.844-2.18c1.096-.622 1.096-1.974 0-2.595L17.18 8.613z" fill="#FFCE00"/>
                <path d="M3.609 1.814l10.183 10.186 3.388-3.387L6.87.545C5.45-.262 4.31.218 3.609 1.814z" fill="#00F076"/>
                <path d="M3.609 22.186c.701 1.596 1.841 2.076 3.261 1.269l10.31-5.842-3.388-3.388L3.609 22.186z" fill="#FF3A44"/>
              </svg>
              <span>Get on Google Play</span>
            </a>

            {/* Apple App Store (Coming Soon) */}
            <div
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#221F1C] border border-white/20 text-white/80 font-mono text-xs cursor-not-allowed"
              title="iOS App is currently under development"
            >
              <svg className="w-4 h-4 shrink-0 fill-current text-white/70" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.92-2.84-.9.04-2 .6-2.64 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.03-.5 2.65-1.25z"/>
              </svg>
              <span>App Store</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold uppercase">
                Soon
              </span>
            </div>
          </div>

          {/* FasterCapital Official Link */}
          <div className="relative z-10 pt-4 border-t border-white/10 text-xs font-mono text-[#A8A090]">
            <span>Portfolio Member: </span>
            <a
              href="https://fastercapital.com/incubation-pending/foodieree.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-bold inline-flex items-center gap-1"
            >
              <span>FasterCapital Incubation Record</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

