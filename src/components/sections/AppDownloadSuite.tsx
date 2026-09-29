"use client";

import {
  Smartphone,
  Store,
  Bike,
  Sparkles,
  Award,
  ArrowRight,
  ExternalLink,
  Flame,
  CheckCircle2,
  Users,
  Utensils,
  Video,
  Mail
} from "lucide-react";

interface AppItem {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: any;
  iconBg: string;
  accentBorder: string;
  playStoreUrl: string;
  description: string;
  tag: string;
}

const apps: AppItem[] = [
  {
    id: "customer",
    name: "Foodieree Food Lovers",
    subtitle: "Reels & Delivery App",
    badge: "15S REELS • ₹0 DELIVERY",
    badgeColor: "bg-[#C22918] text-white",
    icon: Smartphone,
    iconBg: "bg-[#C22918] text-white",
    accentBorder: "hover:border-[#C22918] hover:shadow-[4px_4px_0px_#C22918]",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodieree.customer",
    description: "Watch live sizzling cooking reels & order with ₹0 delivery & platform fees.",
    tag: "FOR DINERS",
  },
  {
    id: "vendor",
    name: "Foodieree Vendor OS",
    subtitle: "Restaurant & Kitchen Portal",
    badge: "0% COMMISSION • 100% PROFIT",
    badgeColor: "bg-[#047857] text-white",
    icon: Store,
    iconBg: "bg-[#047857] text-white",
    accentBorder: "hover:border-[#047857] hover:shadow-[4px_4px_0px_#047857]",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodieree.vendor",
    description: "Publish video menus, manage orders instantly, and keep 100% of earnings.",
    tag: "FOR KITCHENS",
  },
  {
    id: "partner",
    name: "Foodieree Partner",
    subtitle: "Delivery Captain Portal",
    badge: "INSTANT DAILY UPI PAYOUTS",
    badgeColor: "bg-[#12100E] text-amber-400",
    icon: Bike,
    iconBg: "bg-[#12100E] text-amber-400",
    accentBorder: "hover:border-[#12100E] hover:shadow-[4px_4px_0px_#12100E]",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodieree.partner",
    description: "Short 10 KM hyper-local routes with transparent earnings & daily UPI settlements.",
    tag: "FOR RIDERS",
  },
];

export default function AppDownloadSuite() {
  return (
    <section id="downloads" className="py-10 sm:py-14 bg-[#FAF7F0] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Compact Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#D6CEC1] gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="stamp-badge-punchy py-0.5 px-2 text-[10.5px]">
                <Smartphone className="w-3 h-3 fill-current" />
                Official App Suite
              </span>
              <span className="stamp-badge bg-emerald-700 text-white border-emerald-700 py-0.5 px-2 text-[10.5px]">
                ● Live on Google Play
              </span>
              <span className="stamp-badge bg-white text-[#12100E] py-0.5 px-2 text-[10.5px]">
                Apple iOS Coming Soon
              </span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-black text-[#12100E] tracking-tight">
              Download Official{" "}
              <span className="italic font-serif text-[#C22918]">
                Foodieree Applications.
              </span>
            </h2>
          </div>

          <span className="font-mono text-xs font-bold text-[#736B5E] hidden md:inline">
            3 PURPOSE-BUILT PLATFORMS ↘
          </span>
        </div>

        {/* 3 Compact App Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
          {apps.map((app) => {
            const IconComponent = app.icon;
            return (
              <div
                key={app.id}
                className={`rounded-2xl bg-white border-2 border-[#12100E] p-5 shadow-[4px_4px_0px_#12100E] flex flex-col justify-between transition-all duration-200 ${app.accentBorder}`}
              >
                <div>
                  {/* Top Row: Icon + Name + Tag */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${app.iconBg} flex items-center justify-center shrink-0 shadow-xs`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-editorial text-lg font-bold text-[#12100E] leading-snug">
                          {app.name}
                        </h3>
                        <span className="text-[11px] font-mono text-[#736B5E] block leading-none mt-0.5">
                          {app.subtitle}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#FAF7F0] border border-[#D6CEC1] text-[#12100E] shrink-0 uppercase">
                      {app.tag}
                    </span>
                  </div>

                  {/* Value Badge Pill */}
                  <div className="mb-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold uppercase tracking-wider ${app.badgeColor}`}>
                      {app.badge}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-[#57524A] leading-relaxed mb-4">
                    {app.description}
                  </p>
                </div>

                {/* Compact App Store Download Buttons */}
                <div className="pt-3 border-t border-[#EDE6D8] space-y-2">
                  {/* Google Play Store Button */}
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black hover:bg-[#201D1A] text-white transition-all active:scale-98 group/btn shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.006 2.006 0 0 1-.61-.714V2.528c.18-.285.39-.529.609-.714z" fill="#00D2FF"/>
                        <path d="M17.18 8.613l-3.388 3.387 3.388 3.388 3.844-2.18c1.096-.622 1.096-1.974 0-2.595L17.18 8.613z" fill="#FFCE00"/>
                        <path d="M3.609 1.814l10.183 10.186 3.388-3.387L6.87.545C5.45-.262 4.31.218 3.609 1.814z" fill="#00F076"/>
                        <path d="M3.609 22.186c.701 1.596 1.841 2.076 3.261 1.269l10.31-5.842-3.388-3.388L3.609 22.186z" fill="#FF3A44"/>
                      </svg>
                      <div className="text-left leading-none">
                        <span className="text-[8.5px] font-mono text-[#A8A090] uppercase block">GET IT ON</span>
                        <span className="text-xs font-bold font-sans text-white group-hover/btn:text-emerald-400 transition-colors">
                          Google Play
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded">
                      INSTALL ↗
                    </span>
                  </a>

                  {/* Apple App Store (Coming Soon) */}
                  <div
                    className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F0EBE0] border border-[#D6CEC1] text-[#736B5E] font-mono select-none cursor-not-allowed"
                    title="iOS App is coming soon to Apple App Store"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0 fill-current text-[#736B5E]" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.92-2.84-.9.04-2 .6-2.64 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.03-.5 2.65-1.25z"/>
                      </svg>
                      <div className="text-left leading-none">
                        <span className="text-[8px] font-mono text-[#A8A090] uppercase block">App Store</span>
                        <span className="text-[11px] font-bold text-[#57524A]">iOS Version</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-amber-200/80 text-amber-900 text-[9px] font-bold uppercase tracking-wider">
                      COMING SOON
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Community Traction Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white border border-[#12100E] shadow-[3px_3px_0px_#047857] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#047857] text-white flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="font-editorial text-2xl font-black text-[#12100E] leading-none">
                50+
              </div>
              <span className="text-xs font-mono font-bold text-[#57524A] uppercase tracking-wider mt-0.5 block">
                Vendors Onboarded
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#12100E] shadow-[3px_3px_0px_#C22918] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#C22918] text-white flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="font-editorial text-2xl font-black text-[#12100E] leading-none">
                30+
              </div>
              <span className="text-xs font-mono font-bold text-[#57524A] uppercase tracking-wider mt-0.5 block">
                Food Influencers
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#12100E] shadow-[3px_3px_0px_#12100E] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#12100E] text-amber-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-editorial text-2xl font-black text-[#12100E] leading-none">
                500+
              </div>
              <span className="text-xs font-mono font-bold text-[#57524A] uppercase tracking-wider mt-0.5 block">
                Food Lovers & Orders
              </span>
            </div>
          </div>
        </div>

        {/* Official Social Media & Contact Channels Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#12100E] text-white border-2 border-[#12100E] shadow-[4px_4px_0px_#047857] flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#C22918] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-editorial text-base sm:text-lg font-black text-white">
                  Join Foodieree Official Channels
                </h4>
                <span className="px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 text-[9px] font-mono font-bold uppercase">
                  Verified
                </span>
              </div>
              <p className="text-xs text-[#A8A090] font-sans">
                Follow updates, behind-the-scenes reels & corporate milestones across our official handles.
              </p>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/foodieree/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs active:scale-95 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/106590228/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs active:scale-95 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61581905852579"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1877F2] hover:bg-[#1565C0] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs active:scale-95 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            {/* Email Contact */}
            <a
              href="mailto:info@foodieree.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#221F1C] hover:bg-[#2E2A26] border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@foodieree.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
