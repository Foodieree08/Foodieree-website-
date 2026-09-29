"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  tag: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Foodieree?",
    answer:
      "Foodieree is a breakthrough hyperlocal food discovery and ordering platform powered by authentic 15-second food reels. It bridges the gap between mouth-watering food visuals online and direct ordering from local kitchens, street vendors, and heritage restaurants within a 10 km radius.",
    tag: "Core Platform"
  },
  {
    question: "How does the ₹0 Platform Fee & ₹0 Delivery Fee work?",
    answer:
      "Unlike traditional aggregators that charge 25% to 35% predatory commissions and heavy delivery surcharges, Foodieree offers zero platform setup fees for partner kitchens and zero delivery fee structures on hyper-local 10 km runs, ensuring restaurants keep their hard-earned profits and customers get piping-hot food at true menu prices.",
    tag: "Zero-Fee Economics"
  },
  {
    question: "Can local restaurants and street vendors join for free?",
    answer:
      "Yes! Any restaurant, cloud kitchen, sweet shop, or street food cart can register on the Foodieree Restaurant Partner portal for 100% free with 0% onboarding fees, gaining organic video reach, targeted promotions, and in-app advertising.",
    tag: "Kitchen Partners"
  },
  {
    question: "Do food creators and reviewers earn money?",
    answer:
      "Yes! Foodieree features a built-in creator monetization economy. Whenever a food blogger or foodie uploads a verified 15-second food reel that leads directly to orders, they earn direct cash commissions on every order generated.",
    tag: "Creator Monetization"
  },
  {
    question: "What are Mood-Based Restaurant Visits & Dine-in?",
    answer:
      "Beyond doorstep delivery, Foodieree allows food lovers to discover nearby restaurants tailored to their exact mood—including family dinners, romantic dates, business meetings, or friends' party spots within a 10 km radius.",
    tag: "Mood Discovery"
  },
  {
    question: "Where is Foodieree available?",
    answer:
      "Foodieree was founded in Danapur, Patna (Bihar) and is actively operating and scaling across Bihar and top Indian culinary hubs.",
    tag: "Availability"
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#F7F3EB] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="stamp-badge-punchy">
              <HelpCircle className="w-3.5 h-3.5 fill-current" />
              Frequently Asked Questions
            </span>
            <span className="stamp-badge bg-white text-[#12100E]">
              Everything You Need to Know
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-[#12100E] tracking-tight leading-[1.1] mb-3">
            Got Questions?{" "}
            <span className="italic font-serif text-[#C22918] block sm:inline">
              We&apos;ve Got Answers.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#57524A] font-medium leading-relaxed">
            Find quick answers about how Foodieree works, zero-fee economics, restaurant partnerships, creator monetization, and our hyper-local 10 km delivery network.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 max-w-4xl mx-auto mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 border-[#12100E] transition-all overflow-hidden ${
                  isOpen
                    ? "bg-white shadow-[5px_5px_0px_#12100E]"
                    : "bg-white/80 hover:bg-white shadow-[3px_3px_0px_#12100E]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FAF7F0] border border-[#D6CEC1] text-xs font-mono font-bold flex items-center justify-center shrink-0 text-[#12100E]">
                      0{idx + 1}
                    </span>
                    <span className="font-editorial text-lg sm:text-xl font-bold text-[#12100E]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#C22918] text-white"
                        : "bg-[#FAF7F0] text-[#12100E] border border-[#D6CEC1]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#EDE6D8] bg-[#FFFDF9]">
                    <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FAF7F0] border border-[#D6CEC1] text-[#736B5E] mb-2.5">
                      {faq.tag}
                    </div>
                    <p className="text-sm sm:text-base text-[#4A453E] leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#12100E] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_#C22918]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C22918] flex items-center justify-center text-white shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-editorial text-base sm:text-lg font-bold">
                Still have questions or want to partner?
              </h4>
              <p className="text-xs font-mono text-[#A8A090]">
                Write directly to our founder and engineering team.
              </p>
            </div>
          </div>

          <a
            href="mailto:contact@foodieree.com?subject=Inquiry%20Foodieree"
            className="px-4 py-2 rounded-lg bg-white text-[#12100E] hover:bg-[#FAF7F0] font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C22918]" />
          </a>
        </div>
      </div>
    </section>
  );
}
