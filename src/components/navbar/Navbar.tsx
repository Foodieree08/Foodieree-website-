"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Smartphone, Store, Bike, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: "Food Reels", href: "/#reels" },
  { name: "Comparison", href: "/#ecosystem" },
  { name: "Our Story", href: "/#story" },
  { name: "FAQs", href: "/#faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setAppsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAppsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#D6CEC1] select-none shadow-xs">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Clean Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 mix-blend-multiply group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.jpg"
                alt="Foodieree Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex items-center">
              <span className="font-editorial text-2xl sm:text-3xl font-black tracking-tight text-[#12100E] leading-none">
                FOODIEREE
              </span>
            </div>
          </Link>

          {/* Center: Clean & Minimal Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 h-full">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-sans font-semibold text-[#4A453E] hover:text-[#C22918] transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right: Get App Pill Dropdown & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop Dropdown Button */}
            <div
              className="relative hidden sm:block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setAppsOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12100E] hover:bg-[#C22918] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-all cursor-pointer"
                aria-expanded={appsOpen}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Get App</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    appsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Smooth Dropdown Menu */}
              <AnimatePresence>
                {appsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-full pt-2 w-76 z-50"
                  >
                    <div className="bg-white border-2 border-[#12100E] rounded-2xl p-2.5 shadow-[5px_5px_0px_#12100E] overflow-hidden">
                      {/* Customer App */}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F0] transition-all mb-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#C22918] text-white flex items-center justify-center shrink-0">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-xs font-bold text-[#12100E] group-hover/item:text-[#C22918] transition-colors">
                              Customer App
                            </span>
                            <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.2 rounded bg-red-100 text-red-700">
                              PLAY STORE
                            </span>
                          </div>
                          <p className="text-[11px] text-[#736B5E] truncate">
                            Food Ordering & Discovery
                          </p>
                        </div>
                      </a>

                      {/* Restaurant Partner App */}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.foodieree.vendor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F0] transition-all mb-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#047857] text-white flex items-center justify-center shrink-0">
                          <Store className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-xs font-bold text-[#12100E] group-hover/item:text-[#047857] transition-colors">
                              Restaurant Partner App
                            </span>
                            <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                              0% COMMISSION
                            </span>
                          </div>
                          <p className="text-[11px] text-[#736B5E] truncate">
                            Merchant & Kitchen Portal
                          </p>
                        </div>
                      </a>

                      {/* Delivery Partner App */}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.foodieree.partner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F0] transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#12100E] text-amber-400 flex items-center justify-center shrink-0">
                          <Bike className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-xs font-bold text-[#12100E] group-hover/item:text-amber-600 transition-colors">
                              Delivery Partner App
                            </span>
                            <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                              DAILY PAYOUTS
                            </span>
                          </div>
                          <p className="text-[11px] text-[#736B5E] truncate">
                            Fleet Logistics & Payouts
                          </p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden p-2 rounded-lg bg-white border border-[#D6CEC1] text-[#12100E] shadow-xs active:scale-95 transition-transform"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF7F0] border-t border-[#D6CEC1] px-5 sm:px-8 py-5 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-sans font-semibold py-2 text-[#12100E] hover:text-[#C22918] border-b border-[#D6CEC1]/40"
                >
                  {item.name}
                </a>
              ))}

              <div className="text-[10px] font-mono uppercase text-[#736B5E] tracking-wider mt-2">
                Download Official Applications:
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <a
                  href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-2 rounded-xl bg-[#C22918] text-white text-center text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs flex flex-col items-center justify-center gap-1 active:scale-95"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>CUSTOMER</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.foodieree.vendor"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-2 rounded-xl bg-[#047857] text-white text-center text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs flex flex-col items-center justify-center gap-1 active:scale-95"
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>VENDOR</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.foodieree.partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-2 rounded-xl bg-[#12100E] text-amber-400 text-center text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs flex flex-col items-center justify-center gap-1 active:scale-95"
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>PARTNER</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
