"use client";

import {
  Flame,
  Check,
  X,
  Video,
  MapPin,
  Percent,
  Zap,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Bike,
  Store,
  Clock,
  Coins
} from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-14 sm:py-20 bg-[#FAF7F0] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 pb-5 border-b border-[#D6CEC1] gap-4">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="stamp-badge-punchy">
                <Flame className="w-3.5 h-3.5 fill-current" />
                Head-to-Head Comparison
              </span>
              <span className="stamp-badge bg-emerald-700 text-white border-emerald-700">
                <Sparkles className="w-3 h-3" />
                ₹0 Platform & Delivery Fee
              </span>
              <span className="stamp-badge bg-white text-[#12100E]">
                The Foodieree Advantage
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-[#12100E] tracking-tight leading-[1.1]">
              Foodieree vs.{" "}
              <span className="italic font-serif text-[#C22918] block sm:inline">
                Traditional Delivery Apps.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#57524A] mt-2.5 font-medium leading-relaxed">
              Why pay 30% aggregator commissions and wait 50 minutes for cold food? See how Foodieree fixes everything traditional food apps broke.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#047857] bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-lg">
              10X BETTER BY DESIGN ↘
            </span>
          </div>
        </div>

        {/* Side-by-Side Dual Card Comparison (Legacy vs Foodieree) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
          {/* Left Card: Traditional Delivery Apps (The Broken Legacy Model) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#EDE7DA] border-2 border-[#8C8275] p-6 sm:p-9 shadow-[5px_5px_0px_#8C8275] flex flex-col justify-between opacity-95">
            <div>
              {/* Header Strip */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D6CEC1]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#736B5E]">
                    ✕ The Legacy Problem
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-red-100 text-red-700 border border-red-200 text-[10px] font-mono font-bold uppercase">
                  Traditional Apps
                </span>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] mb-2 leading-tight">
                High Fees, Fake Photos & Cold Food
              </h4>
              <p className="text-xs sm:text-sm text-[#736B5E] mb-6 font-medium">
                Traditional delivery giants prioritize high commissions, leaving small kitchens struggling and food lovers with soggy meals.
              </p>

              {/* Negative Checklist */}
              <div className="space-y-4 text-xs sm:text-sm text-[#57524A]">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">25% – 35% Predatory Commissions</strong>
                    <span className="text-[11.5px] text-[#736B5E]">Kitchens and street vendors lose a third of their revenue on every order.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">₹40 – ₹80 Extra Delivery & Surge Fees</strong>
                    <span className="text-[11.5px] text-[#736B5E]">Hidden platform charges, rain surcharges, and distance penalties added at checkout.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">Deceptive Studio Stock Photos</strong>
                    <span className="text-[11.5px] text-[#736B5E]">Static pictures that look nothing like what is actually delivered to your doorstep.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">45+ Min Cold Cross-City Trips</strong>
                    <span className="text-[11.5px] text-[#736B5E]">Food travels across the city, losing its natural aroma, crunch, and heat.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">Delayed Weekly Payouts & 0% Creator Share</strong>
                    <span className="text-[11.5px] text-[#736B5E]">Riders and restaurants wait days for payouts, while food bloggers earn nothing.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D6CEC1] text-center">
              <span className="text-xs font-mono font-bold text-[#736B5E]">
                Traditional Model = Broken Economics
              </span>
            </div>
          </div>

          {/* Right Card: The Foodieree Standard (Winner / Standout) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border-2 border-[#12100E] p-6 sm:p-9 shadow-[8px_8px_0px_#047857] flex flex-col justify-between relative overflow-hidden">
            {/* Top Right Highlight Banner */}
            <div className="absolute top-0 right-0 bg-[#047857] text-white px-5 py-1.5 rounded-bl-2xl font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>THE WINNING STANDARD</span>
            </div>

            <div>
              {/* Header Strip */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EDE6D8]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#047857]">
                    ★ The Foodieree Solution
                  </h3>
                </div>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl font-black text-[#12100E] mb-2 leading-tight">
                Zero Fees, 15s Reels & Steaming Fresh
              </h4>
              <p className="text-xs sm:text-sm text-[#57524A] mb-6 font-medium">
                We empower neighborhood kitchens with 0% cuts, give food lovers 15-second video discovery, and deliver piping hot food for ₹0 delivery fee.
              </p>

              {/* Positive Checklist */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F0FAF4] border-2 border-emerald-400 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-[#047857] text-[14px]">₹0 Platform Fee (For All Users)</strong>
                      <span className="px-1.5 py-0.2 rounded bg-[#047857] text-white text-[9px] font-mono font-bold">100% TRANSPARENT</span>
                    </div>
                    <span className="text-[12px] text-[#2E2A24] font-medium">Zero platform surcharge and zero sneaky checkout fees for users.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F0FAF4] border-2 border-emerald-400 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-[#047857] text-[14px]">₹0 Delivery Fee (Zero Hidden Charges)</strong>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-700 text-white text-[9px] font-mono font-bold">FREE DELIVERY</span>
                    </div>
                    <span className="text-[12px] text-[#2E2A24] font-medium">No surprise platform charges or delivery markups. What you see is what you pay.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F0FAF4] border-2 border-emerald-400 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-[#047857] text-[14px]">Up to 2% Creator Commission Per Order</strong>
                      <span className="px-1.5 py-0.2 rounded bg-amber-500 text-black text-[9px] font-mono font-bold">REEL REWARD</span>
                    </div>
                    <span className="text-[12px] text-[#2E2A24] font-medium">Food creators & reviewers earn up to 2% commission on every order placed directly through their 15s video reel.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">15s Live Sizzling Video Reels</strong>
                    <span className="text-[11.5px] text-[#57524A]">100% authentic short videos captured live from sizzling woks and tandoors.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">Strict 10 KM Hot Express Radar</strong>
                    <span className="text-[11.5px] text-[#57524A]">Guarantees your food arrives steaming hot and fresh directly from local kitchens.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#D6CEC1]">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <strong className="text-[#12100E] block text-[13px]">Instant Daily UPI Settlements</strong>
                    <span className="text-[11.5px] text-[#57524A]">Instant daily UPI payouts for delivery captains with zero deduction delays.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EDE6D8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold text-[#047857]">
                ● 100% Video-Verified & Fair
              </span>
              <a
                href="#reels"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#12100E] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#25211D] transition-all active:scale-95 shadow-sm"
              >
                <span>Experience Food Reels</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Simple & Clean White Background 3-Step Flow Map */}
        <div className="pt-4 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 mb-8 border-b border-[#D6CEC1]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C22918] animate-pulse" />
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#C22918]">
                  Simple 3-Step Flow
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-black text-[#12100E]">
                From 15s Sizzle to Your Doorstep
              </h3>
            </div>

            <span className="text-xs font-mono font-bold text-[#736B5E] hidden sm:inline">
              HYPER-LOCAL EXPRESS ARRIVAL ↘
            </span>
          </div>

          {/* 3 Simple Flow Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
            {/* Step 01 */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center group">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#12100E] text-[#12100E] font-editorial font-black text-xl flex items-center justify-center shadow-[3px_3px_0px_#12100E] mb-4 group-hover:bg-[#C22918] group-hover:text-white transition-colors">
                01
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#12100E] mb-1.5">
                Watch 15s Sizzle Reel
              </h4>
              <p className="text-xs sm:text-sm text-[#57524A] leading-relaxed max-w-xs">
                Discover authentic dishes in 15-second video feeds captured live inside local kitchens within 10 km.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center group">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#12100E] text-[#12100E] font-editorial font-black text-xl flex items-center justify-center shadow-[3px_3px_0px_#12100E] mb-4 group-hover:bg-[#047857] group-hover:text-white transition-colors">
                02
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#12100E] mb-1.5">
                1-Tap Direct Checkout
              </h4>
              <p className="text-xs sm:text-sm text-[#57524A] leading-relaxed max-w-xs">
                Order the exact dish shown in the video with <strong>₹0 Platform Fee</strong> and <strong>₹0 Delivery Fee</strong> upfront.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center group">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#12100E] text-[#12100E] font-editorial font-black text-xl flex items-center justify-center shadow-[3px_3px_0px_#12100E] mb-4 group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                03
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#12100E] mb-1.5">
                10 KM Express Arrival
              </h4>
              <p className="text-xs sm:text-sm text-[#57524A] leading-relaxed max-w-xs">
                Hyper-local delivery captains navigate short routes to deliver your meal steaming hot and fresh to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
