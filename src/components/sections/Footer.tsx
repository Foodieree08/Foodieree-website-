import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Heart, MapPin, Building2, ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#12100E] text-[#D8D0C0] pt-14 pb-10 border-t-4 border-[#12100E]">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#2E2822]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-3 group">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Foodieree Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-editorial text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                FOODIEREE
              </span>
            </Link>

            <p className="text-xs text-[#A8A090] leading-relaxed mb-4 max-w-sm font-sans">
              The official portfolio and platform for Foodieree Technologies Private Limited. Discovering hyper-local food and empowering neighborhood culinary heritage through short-form food reels.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-[#24211D] border border-white/10 text-amber-400 font-bold">
                CIN: U63120BR2026PTC084565
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1">
              <span>Index & Sections</span>
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="/#reels" className="hover:text-[#FF3B14] transition-colors">
                  → 15s Food Reels
                </a>
              </li>
              <li>
                <a href="/#ecosystem" className="hover:text-[#FF3B14] transition-colors">
                  → 3-App Tri-Party Network
                </a>
              </li>
              <li>
                <a href="/#story" className="hover:text-[#FF3B14] transition-colors text-emerald-400 font-bold">
                  → Story & FasterCapital Incubation
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-[#FF3B14] transition-colors">
                  → Frequently Asked Questions
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-amber-400 hover:text-white transition-colors flex items-center gap-1 font-bold">
                  → Official Privacy Policy <span className="text-[9px] px-1 py-0.2 bg-amber-400/20 text-amber-300 rounded">NEW</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Registered Address Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF3B14]" />
              <span>Registered Office (Bihar)</span>
            </h4>
            <address className="not-italic text-xs font-mono leading-relaxed text-[#A8A090] space-y-0.5">
              <p className="text-white font-bold">
                FOODIEREE TECHNOLOGIES PRIVATE LIMITED
              </p>
              <p>ROSHANBIHAR, BAILEY ROAD, D/C21/0, DANAPUR, PATNA,</p>
              <p>Danapur Bazar, Dinapur-Cum-Khagaul,</p>
              <p>Patna – 801503, Bihar, India.</p>
            </address>

            <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href="mailto:info@foodieree.com"
                className="hover:text-[#FF3B14] transition-colors flex items-center gap-1.5 text-white"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF3B14]" />
                <span>info@foodieree.com</span>
              </a>

              <a
                href="https://fastercapital.com/incubation-pending/foodieree.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>FasterCapital ↗</span>
              </a>

              <a
                href="https://www.linkedin.com/company/106590228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:underline flex items-center gap-1 text-[11px] font-bold"
              >
                <span>LinkedIn ↗</span>
              </a>

              <a
                href="https://www.instagram.com/foodieree/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:underline flex items-center gap-1 text-[11px] font-bold"
              >
                <span>Instagram ↗</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61581905852579"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:underline flex items-center gap-1 text-[11px] font-bold"
              >
                <span>Facebook ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dual Download Bar: Google Play (Active) + Apple App Store (Coming Soon) */}
        <div className="py-5 my-5 border-t border-b border-[#2E2822]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  Get the Official Foodieree Applications
                </h4>
              </div>
              <p className="text-[11px] font-mono text-[#A8A090]">
                Customer, Vendor & Partner Apps on Google Play Store • iOS Coming Soon
              </p>
            </div>

            {/* Play Store & App Store Buttons */}
            <div className="flex items-center flex-wrap gap-3">
              {/* Google Play Button (Active Link) */}
              <a
                href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black border border-white/20 hover:border-emerald-400 text-white transition-all active:scale-95 group shadow-sm"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.006 2.006 0 0 1-.61-.714V2.528c.18-.285.39-.529.609-.714z" fill="#00D2FF"/>
                  <path d="M17.18 8.613l-3.388 3.387 3.388 3.388 3.844-2.18c1.096-.622 1.096-1.974 0-2.595L17.18 8.613z" fill="#FFCE00"/>
                  <path d="M3.609 1.814l10.183 10.186 3.388-3.387L6.87.545C5.45-.262 4.31.218 3.609 1.814z" fill="#00F076"/>
                  <path d="M3.609 22.186c.701 1.596 1.841 2.076 3.261 1.269l10.31-5.842-3.388-3.388L3.609 22.186z" fill="#FF3A44"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] font-mono uppercase text-[#A8A090]">GET IT ON</div>
                  <div className="text-xs font-bold font-sans group-hover:text-emerald-400 transition-colors">Google Play</div>
                </div>
              </a>

              {/* Apple App Store Button (Coming Soon) */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#1C1916] border border-white/15 text-white/80 select-none relative group cursor-not-allowed"
                title="iOS App is currently under development"
              >
                <svg className="w-5 h-5 shrink-0 fill-current text-white/70" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.92-2.84-.9.04-2 .6-2.64 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.03-.5 2.65-1.25z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] font-mono uppercase text-[#A8A090]">Download on the</div>
                  <div className="text-xs font-bold font-sans text-white/90">App Store</div>
                </div>
                <span className="ml-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-mono font-bold uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#736B5E]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 Foodieree Technologies Private Limited. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <Link href="/privacy-policy" className="text-[#A8A090] hover:text-white underline underline-offset-2 transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#A8A090]">
              Printed with <Heart className="w-3 h-3 text-[#FF3B14] fill-current" /> in Patna, Bihar
            </span>
            <a
              href="#"
              className="p-1.5 rounded bg-[#24211D] text-white hover:bg-[#FF3B14] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
