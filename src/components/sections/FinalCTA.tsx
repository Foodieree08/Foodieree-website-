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

