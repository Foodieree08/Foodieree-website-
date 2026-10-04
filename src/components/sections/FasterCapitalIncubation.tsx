import {
  ExternalLink,
  Award,
  TrendingUp,
  ArrowRight,
  Flame,
  Globe2,
} from "lucide-react";

export default function FasterCapitalIncubation() {
  return (
    <section id="story" className="py-14 sm:py-20 bg-[#FAF7F0] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 pb-5 border-b border-[#D6CEC1] gap-4">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="stamp-badge-punchy">
                <Flame className="w-3.5 h-3.5 fill-current" />
                Who We Are
              </span>
              <span className="stamp-badge bg-[#047857] text-white border-[#047857]">
                <Globe2 className="w-3 h-3" />
                Incubated by FasterCapital
              </span>
              <span className="stamp-badge bg-white text-[#12100E]">
                IIT Patna Innovation
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-[#12100E] tracking-tight leading-[1.1]">
              From IIT Patna to Global Incubation.{" "}
              <span className="italic font-serif text-[#C22918] block sm:inline">
                Born for the real food heroes.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#57524A] mt-3 font-medium leading-relaxed">
              Foodieree was founded in Patna, Bihar to celebrate authentic regional recipes, bustling street carts, and honest neighborhood kitchens overlooked by legacy delivery apps—now officially accepted into FasterCapital&apos;s global incubation portfolio.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://fastercapital.com/incubation-pending/foodieree.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#047857] hover:bg-[#065F46] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#12100E] border border-[#12100E] active:scale-95 transition-all"
            >
              <span>FasterCapital Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Big FasterCapital Acceleration Showcase Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#059669] via-[#047857] to-[#064E3B] text-white p-8 sm:p-12 md:p-14 border-2 border-[#12100E] shadow-[8px_8px_0px_#12100E] relative overflow-hidden mb-10">
          {/* Ambient Lighting Graphics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 border border-white/25 text-emerald-200 text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Award className="w-4 h-4 text-emerald-300" />
              <span>GLOBAL VENTURE PORTFOLIO & TECHNICAL ACCELERATION</span>
            </div>

            <h3 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
              incubated by FasterCapital
            </h3>

            <p className="text-sm sm:text-lg text-emerald-50 leading-relaxed font-sans max-w-2xl mx-auto mb-7 font-normal">
              FoodieRee has joined FasterCapital&apos;s prestigious global program to accelerate technical co-founding, business expansion, and $1,000K capital raising for hyperlocal video food commerce.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="https://fastercapital.com/incubation-pending/foodieree.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#047857] hover:bg-[#F7F3EB] font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-md active:scale-95 transition-all"
              >
                <span>View Portfolio Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-black/30 border border-white/20 text-white font-mono text-xs">
                <TrendingUp className="w-4 h-4 text-amber-300" />
                <span>Target: <strong>$1,000K</strong> Capital Raising</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
