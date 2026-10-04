"use client";

import {
  Smartphone,
  Store,
  Bike,
  Sparkles,
  Utensils,
  Video,
  Users,
  Compass,
  ArrowRight
} from "lucide-react";

interface AppItem {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: any;
  iconBg: string;
  playStoreUrl: string;
  tag: string;
}

const apps: AppItem[] = [
  {
    id: "customer",
    name: "Customer App",
    subtitle: "Food Ordering & Discovery",
    badge: "15S REELS • ₹0 DELIVERY",
    badgeColor: "bg-[#C22918] text-white",
    icon: Smartphone,
    iconBg: "bg-[#C22918] text-white",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodieree.customer",
    tag: "CUSTOMERS",
  },
  {
    id: "vendor",
    name: "Restaurant Partner App",
    subtitle: "Merchant & Kitchen Portal",
    badge: "0% COMMISSION • 100% PROFIT",
    badgeColor: "bg-[#047857] text-white",
    icon: Store,
    iconBg: "bg-[#047857] text-white",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodieree.vendor",
    tag: "MERCHANTS",
  },
  {
    id: "partner",
    name: "Delivery Partner App",
    subtitle: "Fleet Logistics & Payouts",
    badge: "INSTANT DAILY UPI PAYOUTS",
    badgeColor: "bg-[#12100E] text-amber-400",
    icon: Bike,
    iconBg: "bg-[#12100E] text-amber-400",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.foodieree.partner",
    tag: "RIDERS",
  },
];

const metricItems = [
  { label: "50+ VENDORS ONBOARDED", icon: Utensils, bg: "bg-[#047857]" },
  { label: "30+ FOOD CREATORS", icon: Video, bg: "bg-[#C22918]" },
  { label: "500+ FOODIES & ORDERS", icon: Users, bg: "bg-[#12100E]" },
  { label: "10 KM HYPER-LOCAL RADAR", icon: Compass, bg: "bg-amber-600" },
];

export default function AppDownloadSuite() {
  return (
    <section id="downloads" className="py-6 sm:py-8 bg-[#FAF7F0] border-b-2 border-[#12100E] relative overflow-hidden select-none">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 mb-4">
        {/* Compact Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#D6CEC1]">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="stamp-badge-punchy py-0.5 px-2 text-[10px]">
              <Smartphone className="w-3 h-3 fill-current" />
              Official App Suite
            </span>
            <span className="stamp-badge bg-emerald-700 text-white border-emerald-700 py-0.5 px-2 text-[10px]">
              ● Live on Google Play
            </span>
            <span className="stamp-badge bg-white text-[#12100E] py-0.5 px-2 text-[10px]">
              Apple iOS Coming Soon
            </span>
          </div>

          <h2 className="font-editorial text-lg sm:text-xl font-black text-[#12100E] tracking-tight flex items-center gap-2">
            <span>Download Official</span>
            <span className="italic font-serif text-[#C22918]">Foodieree Applications</span>
          </h2>
        </div>
      </div>

      {/* Infinite Compact App Marquee */}
      <div className="flex w-full overflow-hidden">
        {/* Track 1 */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 shrink-0 py-2">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={`m1-${app.id}`}
                className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white border-2 border-[#12100E] shadow-[3px_3px_0px_#12100E] hover:shadow-[5px_5px_0px_#C22918] hover:-translate-y-0.5 transition-all w-[340px] sm:w-[380px] shrink-0"
              >
                <div className={`w-11 h-11 rounded-xl ${app.iconBg} flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3 className="font-editorial font-black text-sm text-[#12100E] truncate">
                      {app.name}
                    </h3>
                    <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#FAF7F0] border border-[#D6CEC1] text-[#12100E] uppercase shrink-0">
                      {app.tag}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#736B5E] truncate mb-2">
                    {app.subtitle}
                  </p>

                  <div className="flex items-center gap-2">
                    {/* Google Play Button */}
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black hover:bg-[#C22918] text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.006 2.006 0 0 1-.61-.714V2.528c.18-.285.39-.529.609-.714z" fill="#00D2FF"/>
                        <path d="M17.18 8.613l-3.388 3.387 3.388 3.388 3.844-2.18c1.096-.622 1.096-1.974 0-2.595L17.18 8.613z" fill="#FFCE00"/>
                        <path d="M3.609 1.814l10.183 10.186 3.388-3.387L6.87.545C5.45-.262 4.31.218 3.609 1.814z" fill="#00F076"/>
                        <path d="M3.609 22.186c.701 1.596 1.841 2.076 3.261 1.269l10.31-5.842-3.388-3.388L3.609 22.186z" fill="#FF3A44"/>
                      </svg>
                      <span>Install ↗</span>
                    </a>

                    {/* iOS Pill */}
                    <span className="text-[9px] font-mono font-bold px-2 py-1 rounded-lg bg-[#FAF7F0] border border-[#D6CEC1] text-[#736B5E]">
                      iOS Soon
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Metric Badges in Marquee */}
          {metricItems.map((metric, idx) => {
            const MIcon = metric.icon;
            return (
              <div
                key={`m1-metric-${idx}`}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-[#12100E] text-[#12100E] shadow-[2px_2px_0px_#12100E] shrink-0"
              >
                <div className={`w-6 h-6 rounded-lg ${metric.bg} text-white flex items-center justify-center shrink-0`}>
                  <MIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-black tracking-wider uppercase whitespace-nowrap">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Duplicate Loop for seamless infinite marquee) */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 shrink-0 py-2" aria-hidden="true">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={`m2-${app.id}`}
                className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white border-2 border-[#12100E] shadow-[3px_3px_0px_#12100E] hover:shadow-[5px_5px_0px_#C22918] hover:-translate-y-0.5 transition-all w-[340px] sm:w-[380px] shrink-0"
              >
                <div className={`w-11 h-11 rounded-xl ${app.iconBg} flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3 className="font-editorial font-black text-sm text-[#12100E] truncate">
                      {app.name}
                    </h3>
                    <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#FAF7F0] border border-[#D6CEC1] text-[#12100E] uppercase shrink-0">
                      {app.tag}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#736B5E] truncate mb-2">
                    {app.subtitle}
                  </p>

                  <div className="flex items-center gap-2">
                    {/* Google Play Button */}
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black hover:bg-[#C22918] text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.006 2.006 0 0 1-.61-.714V2.528c.18-.285.39-.529.609-.714z" fill="#00D2FF"/>
                        <path d="M17.18 8.613l-3.388 3.387 3.388 3.388 3.844-2.18c1.096-.622 1.096-1.974 0-2.595L17.18 8.613z" fill="#FFCE00"/>
                        <path d="M3.609 1.814l10.183 10.186 3.388-3.387L6.87.545C5.45-.262 4.31.218 3.609 1.814z" fill="#00F076"/>
                        <path d="M3.609 22.186c.701 1.596 1.841 2.076 3.261 1.269l10.31-5.842-3.388-3.388L3.609 22.186z" fill="#FF3A44"/>
                      </svg>
                      <span>Install ↗</span>
                    </a>

                    {/* iOS Pill */}
                    <span className="text-[9px] font-mono font-bold px-2 py-1 rounded-lg bg-[#FAF7F0] border border-[#D6CEC1] text-[#736B5E]">
                      iOS Soon
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Metric Badges in Marquee */}
          {metricItems.map((metric, idx) => {
            const MIcon = metric.icon;
            return (
              <div
                key={`m2-metric-${idx}`}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-[#12100E] text-[#12100E] shadow-[2px_2px_0px_#12100E] shrink-0"
              >
                <div className={`w-6 h-6 rounded-lg ${metric.bg} text-white flex items-center justify-center shrink-0`}>
                  <MIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-black tracking-wider uppercase whitespace-nowrap">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
