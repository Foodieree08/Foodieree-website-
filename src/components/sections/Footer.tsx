import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141418] text-[#d4d4d8] pt-16 pb-12 border-t border-white/10 font-sans selection:bg-[#FF3B14] selection:text-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10 items-start">
          
          {/* Column 1: Brand, Tagline, Socials & Download App (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Brand Logo */}
            <Link href="/" className="inline-block group w-fit">
              <div className="relative h-16 w-64 sm:h-20 sm:w-72 group-hover:scale-105 transition-transform origin-left">
                <Image
                  src="/images/footer-logo.png"
                  alt="FoodieRee"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-md font-normal">
              Bringing delicious food to your doorstep with care and convenience. Experience authentic Indian culinary discovery with 15-second food reels and zero user fees.
            </p>

            {/* Follow Us */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/80 block">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/foodieree/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-[#22222a] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white/90 hover:text-white transition-all flex items-center justify-center border border-white/10 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/106590228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#22222a] hover:bg-[#0A66C2] text-white/90 hover:text-white transition-all flex items-center justify-center border border-white/10 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61581905852579"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-[#22222a] hover:bg-[#1877F2] text-white/90 hover:text-white transition-all flex items-center justify-center border border-white/10 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Download the App */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/80 block">
                Get Foodieree App
              </span>
              <div className="flex items-center flex-wrap gap-3">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#09090b] border border-white/20 hover:border-emerald-400 text-white transition-all group shadow-sm active:scale-95"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.006 2.006 0 0 1-.61-.714V2.528c.18-.285.39-.529.609-.714z" fill="#00D2FF"/>
                    <path d="M17.18 8.613l-3.388 3.387 3.388 3.388 3.844-2.18c1.096-.622 1.096-1.974 0-2.595L17.18 8.613z" fill="#FFCE00"/>
                    <path d="M3.609 1.814l10.183 10.186 3.388-3.387L6.87.545C5.45-.262 4.31.218 3.609 1.814z" fill="#00F076"/>
                    <path d="M3.609 22.186c.701 1.596 1.841 2.076 3.261 1.269l10.31-5.842-3.388-3.388L3.609 22.186z" fill="#FF3A44"/>
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] uppercase tracking-wider text-white/60 font-medium">GET IT ON</div>
                    <div className="text-sm font-bold text-white mt-0.5">Google Play</div>
                  </div>
                </a>

                {/* Apple App Store */}
                <div
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#09090b] border border-white/20 text-white select-none cursor-default shadow-sm"
                >
                  <svg className="w-5 h-5 shrink-0 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.92-2.84-.9.04-2 .6-2.64 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.03-.5 2.65-1.25z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] uppercase tracking-wider text-amber-300/80 font-medium">COMING SOON</div>
                    <div className="text-sm font-bold text-white mt-0.5">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Support (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <div className="w-fit">
              <h4 className="text-base font-bold text-white tracking-wide uppercase font-mono">
                Support &amp; Legal
              </h4>
              <div className="w-10 h-0.5 bg-[#FF3B14] mt-2 rounded-full" />
            </div>

            <ul className="space-y-3 text-xs text-[#d4d4d8] pt-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF3B14] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#customer-terms"
                  className="hover:text-[#FF3B14] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Customer Terms &amp; Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#restaurant-terms"
                  className="hover:text-[#FF3B14] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Restaurant Terms &amp; Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#FF3B14] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#refund-cancellation"
                  className="hover:text-[#FF3B14] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Refund &amp; Cancellation Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#grievance-redressal"
                  className="hover:text-[#FF3B14] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Grievance Redressal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Corporate Office (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-1">
              Registered Office
            </h4>

            <div className="space-y-5 text-xs sm:text-sm text-white leading-relaxed pt-1">
              <div className="space-y-2 pb-1">
                <p className="font-bold text-white text-sm sm:text-[15px] tracking-wide leading-snug">
                  FOODIEREE TECHNOLOGIES PRIVATE LIMITED
                </p>
                <p className="text-xs text-[#a1a1aa] tracking-wider pt-0.5">
                  CIN: U63120BR2026PTC084565
                </p>
              </div>

              <div className="space-y-2 text-[#d4d4d8] pt-1">
                <p>Roshanbihar, Bailey Road, D/C21/0,</p>
                <p>Danapur, Danapur Bazar, Dinapur-cum-Khagaul,</p>
                <p>Patna, Bihar, India – 801503</p>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:info@foodieree.com"
                  className="text-white hover:underline inline-block text-xs sm:text-sm font-medium"
                >
                  info@foodieree.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Made In India & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a1a1aa] font-mono">
          <p>© {new Date().getFullYear()} Foodieree Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/60">Made with ❤️ in Bihar, India</span>
            <a href="#" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

