import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles,
  TrendingUp,
  DollarSign,
  GraduationCap,
  Users,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  Flame,
  Globe2,
  Quote
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

        {/* Unified 2-Column Founder & Genesis Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Team Profile (Founding Team • IIT Patna Ecosystem) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border-2 border-[#12100E] p-6 sm:p-8 shadow-[5px_5px_0px_#12100E] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#EDE6D8]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#736B5E] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C22918]" />
                  <span>Founding Team & Leadership</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#FAF7F0] border border-[#D6CEC1] text-[#047857] font-mono text-[10px] font-bold">
                  IIT Patna Ecosystem
                </span>
              </div>

              {/* Team Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#12100E] text-white flex items-center justify-center border-2 border-[#12100E] shadow-[3px_3px_0px_#C22918] shrink-0">
                  <Users className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-editorial text-2xl font-black text-[#12100E]">
                    Team Foodieree
                  </h4>
                  <p className="text-xs font-mono font-bold text-[#C22918]">
                    Founders, Engineers & Operators • IIT Patna
                  </p>
                </div>
              </div>

              {/* Team Mission Statement */}
              <blockquote className="p-4 rounded-xl bg-[#FAF7F0] border-l-4 border-[#047857] text-xs sm:text-sm text-[#4A453E] leading-relaxed mb-5 font-sans">
                &ldquo;We are a multidisciplinary team of student innovators and engineers from <strong>IIT Patna</strong> building Foodieree — a hyperlocal food discovery and ordering ecosystem designed to bridge short-form culinary storytelling with seamless neighborhood dining and doorstep delivery.&rdquo;
              </blockquote>

              {/* Key Highlights */}
              <div className="space-y-2 text-xs font-mono text-[#2E2A24]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#047857] shrink-0" />
                  <span>Student Innovators & Technologists at IIT Patna</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#047857] shrink-0" />
                  <span>Full-Stack Engineering, AI Discovery & Logistics Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#047857] shrink-0" />
                  <span>Accelerated & Incubation-Backed by FasterCapital</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#EDE6D8]">
              <a
                href="https://fastercapital.com/incubation-pending/foodieree.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#047857] hover:text-[#064E3B] hover:underline"
              >
                <span>Read Venture Profile on FasterCapital</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: The Genesis & The 3 Core Commitments */}
          <div className="lg:col-span-7 rounded-2xl bg-white border-2 border-[#12100E] p-6 sm:p-8 shadow-[5px_5px_0px_#12100E] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#EDE6D8]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#736B5E] flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#C22918]" />
                  <span>The Genesis & Solution</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono text-[10px] font-bold">
                  Zero Platform & Delivery Fee
                </span>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] leading-tight mb-3">
                Born From Frustration Over Late-Night Chai at IIT Patna
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-[#4A453E] leading-relaxed mb-6">
                <p>
                  The idea of Foodieree was born out of a shared frustration among tech and design friends from college. We constantly watched mouth-watering food videos online, but had no direct way to order that bubbling dish locally.
                </p>
                <p>
                  During our work on a previous startup <strong>FreeHydr8</strong> (distributing free water bottles in college events through brand sponsorships), we met several local restaurant owners. One owner shared how he had spent heavily on social media influencers to promote his eatery, yet saw <em>zero real footfall or orders</em>.
                </p>
                <p>
                  That highlighted the broken link between online food hype and actual customer orders. Over countless chai breaks at IIT Patna, we built <strong>Foodieree</strong>: combining short-form 15s video feeds, mood-based dine-in search, and instant direct checkout.
                </p>
              </div>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="pt-4 border-t border-[#EDE6D8] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                <div className="text-[10px] text-[#736B5E] uppercase font-bold">PLATFORM FEE</div>
                <div className="font-editorial text-lg font-black text-[#047857]">₹0 Free</div>
                <div className="text-[10.5px] text-[#57524A] mt-0.5">0% predatory aggregator cuts</div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                <div className="text-[10px] text-[#736B5E] uppercase font-bold">DELIVERY RADAR</div>
                <div className="font-editorial text-lg font-black text-[#047857]">₹0 Delivery</div>
                <div className="text-[10.5px] text-[#57524A] mt-0.5">Strict 10 KM hot express radar</div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                <div className="text-[10px] text-[#736B5E] uppercase font-bold">CREATOR SHARING</div>
                <div className="font-editorial text-lg font-black text-[#C22918]">Direct Cash</div>
                <div className="text-[10.5px] text-[#57524A] mt-0.5">Earn commissions on reel orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
