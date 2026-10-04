"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  User,
  Building2,
  CheckCircle2,
  Clock,
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";

const userRoles = [
  { id: "customer", label: "Diner / Customer", icon: "🍔" },
  { id: "restaurant", label: "Restaurant Partner", icon: "🏪" },
  { id: "creator", label: "Food Creator / Influencer", icon: "🎥" },
  { id: "delivery", label: "Delivery Partner", icon: "🛵" },
  { id: "investor", label: "Investor / VC", icon: "📈" },
  { id: "other", label: "General / Business", icon: "💼" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "customer",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#12100E] font-sans selection:bg-[#FF3B14] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area with Animated Background Orbs */}
      <main className="flex-1 relative overflow-hidden pt-6 pb-20 sm:pb-28">
        {/* Animated Background Ambience */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-24 -right-24 w-96 h-96 sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-br from-[#FF3B14]/15 via-[#FF7A1A]/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -35, 25, 0],
              y: [0, 35, -25, 0],
              scale: [1, 0.9, 1.08, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 -left-32 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#F59E0B]/15 via-[#FF3B14]/8 to-transparent blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(#12100E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-mono text-[#736B5E] mb-6 sm:mb-8"
          >
            <Link href="/" className="hover:text-[#FF3B14] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#12100E] font-bold">Contact Us</span>
          </motion.nav>

          {/* Hero Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12100E] text-[#FAF7F0] text-xs font-mono font-bold tracking-wider uppercase mb-5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              Direct Support &amp; Official Inquiries
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black text-[#12100E] tracking-tight leading-[1.1] mb-5"
            >
              You can find us{" "}
              <span className="bg-gradient-to-r from-[#FF3B14] via-[#FF7A1A] to-[#F59E0B] bg-clip-text text-transparent underline decoration-[#FF3B14]/30 decoration-wavy decoration-2">
                here
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#57524A] leading-relaxed max-w-2xl mx-auto"
            >
              Find instant help for your orders, explore restaurant &amp; creator partnerships, or get in touch directly with our corporate team.
            </motion.p>
          </div>

          {/* Main 2-Column Grid (Form on Left, Details on Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Interactive Contact Form (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white rounded-3xl border-2 border-[#12100E] p-6 sm:p-10 shadow-[6px_6px_0px_#12100E] relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-[#FAF7F0]">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF3B14] to-[#FF7A1A] text-white flex items-center justify-center border-2 border-[#12100E] shadow-[2px_2px_0px_#12100E] shrink-0">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#12100E] tracking-tight font-editorial">
                    Send us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#736B5E] mt-0.5">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>
              </div>

              {/* Form Success State */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 px-6 text-center space-y-5 bg-[#FAF7F0] rounded-2xl border border-[#D6CEC1]"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 border-2 border-[#22C55E] text-[#16A34A] flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-[#12100E] font-editorial">
                        Message Received!
                      </h3>
                      <p className="text-sm text-[#57524A] max-w-md mx-auto">
                        Thank you, <strong className="text-[#12100E]">{formData.name || "friend"}</strong>. We have logged your query and our team will respond to <span className="font-mono font-bold text-[#FF3B14]">{formData.email}</span> within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          role: "customer",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-[#12100E] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#FF3B14] transition-colors shadow-[2px_2px_0px_#12100E]"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    {/* Role / Persona Selector */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12100E] mb-2.5">
                        You are a <span className="text-[#FF3B14]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                        {userRoles.map((role) => {
                          const active = formData.role === role.id;
                          return (
                            <button
                              key={role.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, role: role.id })}
                              className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                                active
                                  ? "bg-[#12100E] text-white border-[#12100E] shadow-[2px_2px_0px_#FF3B14]"
                                  : "bg-[#FAF7F0] text-[#3E3831] border-[#D6CEC1] hover:border-[#12100E]"
                              }`}
                            >
                              <span className="text-base">{role.icon}</span>
                              <span className="truncate">{role.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12100E] mb-2">
                          Your Full Name <span className="text-[#FF3B14]">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#736B5E] pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAF7F0] border-2 border-[#D6CEC1] focus:border-[#12100E] focus:bg-white text-sm text-[#12100E] placeholder:text-[#9E9589] font-medium outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12100E] mb-2">
                          Email Address <span className="text-[#FF3B14]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#736B5E] pointer-events-none" />
                          <input
                            type="email"
                            required
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAF7F0] border-2 border-[#D6CEC1] focus:border-[#12100E] focus:bg-white text-sm text-[#12100E] placeholder:text-[#9E9589] font-medium outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Mobile & Subject Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12100E] mb-2">
                          Mobile Number <span className="text-[#FF3B14]">*</span>
                        </label>
                        <div className="relative flex">
                          <div className="flex items-center justify-center px-3.5 rounded-l-xl bg-[#EDE6D8] border-2 border-r-0 border-[#D6CEC1] text-xs font-mono font-bold text-[#12100E] shrink-0">
                            +91
                          </div>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            placeholder="98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-r-xl bg-[#FAF7F0] border-2 border-[#D6CEC1] focus:border-[#12100E] focus:bg-white text-sm text-[#12100E] placeholder:text-[#9E9589] font-medium outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12100E] mb-2">
                          Subject / Topic <span className="text-[#FF3B14]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Creator Collab / Order Query"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F0] border-2 border-[#D6CEC1] focus:border-[#12100E] focus:bg-white text-sm text-[#12100E] placeholder:text-[#9E9589] font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#12100E]">
                          Your Message / Comment <span className="text-[#FF3B14]">*</span>
                        </label>
                        <span className="text-[11px] font-mono text-[#736B5E]">
                          {formData.message.length}/500 chars
                        </span>
                      </div>
                      <textarea
                        required
                        rows={4}
                        maxLength={500}
                        placeholder="Tell us what you need help with, share feedback, or describe your partnership proposal..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F0] border-2 border-[#D6CEC1] focus:border-[#12100E] focus:bg-white text-sm text-[#12100E] placeholder:text-[#9E9589] font-medium outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-[#FF3B14] hover:bg-[#E02E08] active:translate-x-0.5 active:translate-y-0.5 text-white font-bold text-base tracking-wide flex items-center justify-center gap-3 border-2 border-[#12100E] shadow-[4px_4px_0px_#12100E] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting Query...
                        </div>
                      ) : (
                        <>
                          <span>Submit Query</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right Column: Corporate Details & Live Support (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              {/* Card 1: Official Corporate Entity & Registered Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-3xl border-2 border-[#12100E] p-6 sm:p-8 shadow-[6px_6px_0px_#12100E]"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1e293b] text-[#38bdf8] flex items-center justify-center border-2 border-[#12100E] shadow-[2px_2px_0px_#12100E] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#FF3B14] uppercase tracking-wider block">
                      Registered Office
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#12100E] font-editorial leading-tight">
                      Get in Touch
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-[13px] text-[#3E3831] leading-relaxed pt-2 border-t border-[#EDE6D8]">
                  {/* Entity Name & CIN */}
                  <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1] space-y-1.5">
                    <p className="font-bold text-sm text-[#12100E] tracking-tight">
                      FOODIEREE TECHNOLOGIES PRIVATE LIMITED
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] text-[#736B5E] tracking-wider">
                        CIN: U63120BR2026PTC084565
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy("U63120BR2026PTC084565", "cin")}
                        className="p-1 rounded text-[#736B5E] hover:text-[#12100E] transition-colors"
                        title="Copy CIN"
                      >
                        {copiedField === "cin" ? (
                          <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Address Details */}
                  <div className="space-y-1 font-mono text-xs text-[#2E2A24] pt-1">
                    <p className="font-bold text-[#12100E]">Roshanbihar, Bailey Road, D/C21/0,</p>
                    <p>Danapur, Danapur Bazar, Dinapur-cum-Khagaul,</p>
                    <p className="font-bold">Patna, Bihar, India – 801503</p>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="pt-3 border-t border-[#EDE6D8] space-y-2.5">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F0] border border-[#D6CEC1]">
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#FF3B14]" />
                        <span className="font-mono text-xs font-semibold text-[#12100E]">
                          info@foodieree.com
                        </span>
                      </div>
                      <a
                        href="mailto:info@foodieree.com"
                        className="text-xs font-mono font-bold text-[#FF3B14] hover:underline"
                      >
                        Email Us →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Live Support Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#18181c] text-white rounded-3xl border-2 border-[#12100E] p-6 sm:p-8 shadow-[6px_6px_0px_#FF7A1A]"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F59E0B]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white font-editorial">
                        We&apos;re Here to Help
                      </h4>
                      <p className="text-[11px] text-white/60">
                        Operational 7 days a week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 text-[#4ADE80] text-[10.5px] font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
                    Live Online
                  </div>
                </div>

                <p className="text-xs text-[#d4d4d8] leading-relaxed mb-4">
                  Have questions regarding our <strong className="text-white">0% Delivery Fee</strong>, <strong className="text-white">0% Platform Fee</strong> for users, or wish to register your cloud kitchen/creator handle? Our team responds within 2-4 hours.
                </p>

                <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/60 block">Customer Inquiries</span>
                    <span className="text-white font-bold">Under 2 Hours</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/60 block">Partner Onboarding</span>
                    <span className="text-[#F59E0B] font-bold">Same-Day Desk</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Download Foodieree Customer App */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-5 rounded-2xl bg-gradient-to-r from-[#FF3B14] to-[#FF7A1A] border-2 border-[#12100E] text-white shadow-[4px_4px_0px_#12100E] flex items-center justify-between gap-4"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-wider text-amber-200">
                    <Smartphone className="w-4 h-4" />
                    <span>Foodieree App</span>
                  </div>
                  <p className="text-sm font-black font-editorial">
                    Order Food with Zero Platform Fee
                  </p>
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.foodieree.customer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white text-[#12100E] hover:bg-[#FAF7F0] text-xs font-bold font-mono tracking-wide shrink-0 border border-[#12100E] shadow-[2px_2px_0px_#12100E] active:scale-95 transition-all"
                >
                  Get on Play Store →
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
