import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  Lock,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Foodieree Technologies Private Limited",
  description:
    "Official Privacy Policy of Foodieree Technologies Private Limited detailing data collection, storage, usage, and protection policies.",
  robots: {
    index: true,
    follow: true,
  },
};

const tableOfContents = [
  { id: "acceptance", num: "1", title: "User Acceptance" },
  { id: "definitions", num: "2", title: "Definitions" },
  { id: "collection", num: "3", title: "What Information Do We Collect?" },
  { id: "usage", num: "4", title: "Use of Information Collected" },
  { id: "disclosure", num: "5", title: "How and When Do We Disclose Information" },
  { id: "third-party", num: "6", title: "Third Party Content & Links" },
  { id: "collected-by-you", num: "7", title: "Information Collected by You" },
  { id: "modification", num: "8", title: "Change of Information & Cancellation" },
  { id: "security", num: "9", title: "Security" },
  { id: "children", num: "10", title: "Information of Children" },
  { id: "grievance", num: "11", title: "Grievance Officer" },
  { id: "changes", num: "12", title: "Changes to Privacy Policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#12100E] flex flex-col font-sans selection:bg-[#FF3B14] selection:text-white">
      {/* Top Gazette Header */}
      <header className="border-b border-[#D6CEC1] bg-[#F7F3EB] sticky top-0 z-40 backdrop-blur-md bg-[#F7F3EB]/95">
        <div className="w-full h-[3px] bg-[#C22918]" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#12100E] hover:text-[#C22918] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Main Gazette</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-7 h-7 shrink-0 mix-blend-multiply">
              <Image
                src="/images/logo.jpg"
                alt="Foodieree Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-editorial text-lg sm:text-xl font-black tracking-tight text-[#12100E]">
              FOODIEREE
            </span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#736B5E]">
            <span className="hidden sm:inline">OFFICIAL GAZETTE DISPATCH</span>
            <span className="px-2 py-0.5 rounded bg-[#12100E] text-white text-[10px] font-bold">
              LEGAL
            </span>
          </div>
        </div>
      </header>

      {/* Main Document Content */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Document Headline Banner */}
        <div className="bg-white rounded-2xl border-2 border-[#12100E] shadow-[6px_6px_0px_#12100E] p-6 sm:p-10 md:p-12 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="stamp-badge-punchy">
              <ShieldCheck className="w-3.5 h-3.5 fill-current" />
              Corporate Compliance
            </span>
            <span className="stamp-badge bg-[#FAF7F0] text-[#12100E]">
              CIN: U63120BR2026PTC084565
            </span>
            <span className="stamp-badge bg-emerald-100 text-emerald-800 border-emerald-300">
              Active Legal Dispatch
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-black text-[#12100E] tracking-tight leading-[1.1] mb-4">
            Foodieree Privacy Policies
          </h1>

          <p className="text-base sm:text-lg text-[#57524A] font-medium leading-relaxed max-w-4xl">
            Your privacy matters to <strong>Foodieree Technologies Private Limited</strong> (the “Company”, “we”, “FOODIEREE”, “us” or “our”). This Privacy Policy describes our policies and procedures on the collection, use, processing, storage, retrieval, disclosure, transfer and protection of your information.
          </p>

          {/* Quick Legal Metadata Strip */}
          <div className="mt-6 pt-6 border-t border-[#EDE6D8] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#736B5E]">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C22918] shrink-0" />
              <div>
                <span className="block text-[#A8A196] text-[10px] uppercase">Entity:</span>
                <span className="text-[#12100E] font-bold">Foodieree Technologies Pvt Ltd</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C22918] shrink-0" />
              <div>
                <span className="block text-[#A8A196] text-[10px] uppercase">Jurisdiction:</span>
                <span className="text-[#12100E] font-bold">Patna, Bihar, India</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C22918] shrink-0" />
              <div>
                <span className="block text-[#A8A196] text-[10px] uppercase">Grievance / Support:</span>
                <a href="mailto:support@foodieree.com" className="text-[#C22918] font-bold hover:underline">
                  support@foodieree.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Sidebar ToC + Full Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-xl border-2 border-[#12100E] shadow-[4px_4px_0px_#12100E] p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#12100E] mb-3 pb-2 border-b border-[#EDE6D8] flex items-center justify-between">
                <span>Table of Contents</span>
                <FileText className="w-3.5 h-3.5 text-[#C22918]" />
              </h3>
              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded text-xs font-mono text-[#57524A] hover:bg-[#FAF7F0] hover:text-[#C22918] transition-colors"
                  >
                    <span className="text-[#A8A196] font-bold w-5">{item.num}.</span>
                    <span className="truncate">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-[#FAF7F0] rounded-xl border border-[#D6CEC1] p-5 text-xs font-mono leading-relaxed text-[#57524A]">
              <div className="flex items-center gap-2 text-[#12100E] font-bold uppercase tracking-wider mb-2">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Data Privacy Guarantee</span>
              </div>
              <p>
                Foodieree does not sell, rent, or trade your personal data to third parties for targeted advertising. All information is processed in strict compliance with the Information Technology Act, 2000.
              </p>
            </div>
          </aside>

          {/* Full Policy Body Column */}
          <div className="lg:col-span-8 bg-white rounded-2xl border-2 border-[#12100E] shadow-[5px_5px_0px_#12100E] p-6 sm:p-10 md:p-12 space-y-10 text-[#2E2A24] leading-relaxed">
            {/* Preamble */}
            <section className="space-y-4 text-sm sm:text-base border-b border-[#EDE6D8] pb-8">
              <p>
                Your privacy matters to <strong>Foodieree Technologies Private Limited</strong> (the “Company”, “we”, “FOODIEREE”, “us” or “our”) This Privacy Policy (“Policy”) describes the policies and procedures on the collection, use, processing, storage, retrieval, disclosure, transfer and protection of your information, including personal information and sensitive personal data or information (“Information”), that FOODIEREE receives through your online access, interaction or use, of the Foodieree mobile applications (“Foodieree App”) or our website located at{" "}
                <a href="https://foodieree.com/" className="text-[#C22918] font-semibold underline underline-offset-2">
                  https://foodieree.com/
                </a>{" "}
                (the website and Foodieree App are collectively referred to as the “Platform”) or through your offline interaction with us including through mails, phones, in person, etc., or while availing our Services.
              </p>
              <p>
                The terms “you” and “your” refer to a Consumer (defined below), a Delivery Partner (defined below), a Restaurant Partner (defined below), or any other user of the Platform and / or availing the Services (defined below).
              </p>
              <p>
                The term “Services” refers to any services offered by FOODIEREE in accordance with the terms and conditions applicable to you (and available on the Platform) whether on the Platform or otherwise.
              </p>
              <p>
                Capital terms not defined herein have the meaning assigned to them in the terms and conditions applicable to you and available on Platform.
              </p>
              <div className="p-3.5 rounded-lg bg-[#FAF7F0] border-l-4 border-[#C22918] text-xs sm:text-sm font-mono text-[#57524A]">
                <strong>Important Notice:</strong> Please read this Policy before using the Platform or submitting any Information to us. This Policy is a part of and incorporated within, and is to be read along with, the terms and conditions applicable to the users of the Foodieree App available on the Platform.
              </div>
            </section>

            {/* 1. USER ACCEPTANCE */}
            <section id="acceptance" className="space-y-4 pt-2">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">01.</span> User Acceptance
              </h2>
              <p className="text-sm sm:text-base">
                By accessing or using the Platform or the Services, you agree and consent to this Policy, along with any amendments made by the Company at its sole discretion and posted on the Platform from time to time.
              </p>
              <p className="text-sm sm:text-base">
                Any collection, processing, retrieval, transfer, use, storage, disclosure and protection of your Information will be in accordance with this Policy and applicable laws including but not limited to Information Technology Act, 2000, Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 and other rules and regulations framed thereunder (as amended from time to time) (“Applicable Laws”). If you do not agree with the Policy, please do not use or access the Platform.
              </p>
              <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#D6CEC1] space-y-2 text-xs sm:text-sm">
                <p className="font-bold text-[#12100E] font-mono uppercase text-xs">You hereby represent to FOODIEREE that:</p>
                <ol className="list-decimal pl-5 space-y-1.5 text-[#4A453E]">
                  <li>The Information you provide to us from time to time, is and will be authentic, correct, current and updated and you have all the rights, permissions and consents as may be required to provide such Information to us.</li>
                  <li>Your providing of the Information as well as FOODIEREE’s consequent storage, collection, usage, transfer, access, or processing of such Information will not be in violation of any agreement, Applicable Laws, charter documents, judgments, orders and decrees.</li>
                  <li>If you disclose to us any Information relating to other people, you represent that you have the authority to do so and to permit us to use such Information in accordance with this Policy.</li>
                </ol>
              </div>
            </section>

            {/* 2. DEFINITIONS */}
            <section id="definitions" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">02.</span> Definitions
              </h2>
              <p className="text-sm sm:text-base">
                Unless otherwise provided in this Policy, the terms capitalized in the Policy shall have the meaning as provided hereunder:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Co-branded Services”</strong>
                  <span className="text-[#57524A]">Has the meaning assigned to the term in paragraph 5(c) hereto.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Delivery Partner”</strong>
                  <span className="text-[#57524A]">Third-party available to provide delivery services to the Consumer.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Device”</strong>
                  <span className="text-[#57524A]">Computer, mobile or other device used to access the Services.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Device Identifier”</strong>
                  <span className="text-[#57524A]">IP address or other unique identifier of the Device.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Consumer”</strong>
                  <span className="text-[#57524A]">Person availing food delivery services using the Platform.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Promotion”</strong>
                  <span className="text-[#57524A]">Any contest and other promotions offered by us.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Personal Information”</strong>
                  <span className="text-[#57524A]">Categories that reasonably identify you (name, email, mobile number).</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Restaurant Partner”</strong>
                  <span className="text-[#57524A]">Restaurants, bakeries, cloud kitchens listing on the Platform.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“TPSP”</strong>
                  <span className="text-[#57524A]">Third-party service provider.</span>
                </div>
                <div className="p-3 bg-[#FAF7F0] rounded-lg border border-[#EDE6D8]">
                  <strong className="text-[#12100E] block mb-1">“Usage Information”</strong>
                  <span className="text-[#57524A]">Has the meaning assigned in paragraph 3(II) hereto.</span>
                </div>
              </div>
            </section>

            {/* 3. WHAT INFORMATION DO WE COLLECT? */}
            <section id="collection" className="space-y-6 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">03.</span> What Information Do We Collect?
              </h2>

              {/* Subsection I */}
              <div className="space-y-3">
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#12100E]">
                  I. Information You Provide to Us
                </h3>
                <p className="text-sm">
                  <strong>Personal Information:</strong> We may ask you to provide certain Personal Information to us through various means including account registration forms, contact us forms, or when you interact with us. We ask only for information lawful and necessary for our Services.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-[#4A453E]">
                  <li>
                    <strong>Account Information:</strong> Name, address, email, phone number, gender, date of birth, photo, login details, payment details (as permitted by law), etc.
                  </li>
                  <li>
                    <strong>Saved Information:</strong> Phone number, address, billing details, emergency contact info for auto-completing requests.
                  </li>
                  <li>
                    <strong>Verification Information (Delivery & Restaurant Partners):</strong> Government IDs (Driving License, Aadhaar, PAN), KYC details, vehicle registration, fitness certificate, pollution certificate, insurance, selfies for real-time verification, and business ownership certificates.
                  </li>
                  <li>
                    <strong>Other Information:</strong> Customer support correspondence, ratings, reviews, comments, and referral details.
                  </li>
                </ul>

                <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs space-y-1.5 text-red-950 font-mono">
                  <p className="font-bold uppercase text-[11px]">User Content Restrictions:</p>
                  <p>You agree not to upload, display, or share information that is harmful, offensive, obscene, invasive of privacy, hateful, racially/ethnically objectionable, money-laundering related, patently false, or threatening the unity, integrity, defense, security, or sovereignty of India.</p>
                </div>
              </div>

              {/* Subsection II */}
              <div className="space-y-3 pt-3">
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#12100E]">
                  II. Information We Collect As You Access and Use Foodieree App
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-[#4A453E]">
                  <li><strong>Transaction Information:</strong> Order details, pick-up and drop-off addresses, payment transaction details.</li>
                  <li><strong>Location Data:</strong> Precise or approximate location data from Devices during active service/foreground to improve delivery radar, nearby show reels, and prevent fraud.</li>
                  <li><strong>Usage Information:</strong> Browser type, referring URLs, access timestamps, searches, and in-app navigation behavior.</li>
                  <li><strong>Device Information:</strong> Device identifier, OS version, hardware model, mobile network, gestures, and scrolling activities to optimize UI.</li>
                  <li><strong>SMS / Text Messages:</strong> For issuing/receiving OTPs and auto-filling financial transaction verifications with explicit permissions.</li>
                  <li><strong>Call Details:</strong> Call recordings and details when communicating with support or partners for order coordination.</li>
                  <li><strong>Cookies:</strong> Standard passive cookies for session preferences and app optimizations.</li>
                </ul>
              </div>

              {/* Subsection III */}
              <div className="space-y-2 pt-3">
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#12100E]">
                  III. Information Third Parties Provide About You
                </h3>
                <p className="text-sm">
                  We may collect information from affiliates, TPSPs, technical sub-contractors, payment service providers, analytics partners, and public databases.
                </p>
              </div>
            </section>

            {/* 4. USE OF INFORMATION COLLECTED */}
            <section id="usage" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">04.</span> Use of Information Collected
              </h2>
              <p className="text-sm sm:text-base">
                Our primary goal is to provide you with an enhanced, secure experience. We use your Information for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                {[
                  "Enabling access to Platform features",
                  "Identity & legal capacity verification",
                  "Analyzing feature usage & regional expansion",
                  "Sending security verification emails/SMS",
                  "Diagnosing server errors & admin support",
                  "Service-related crucial announcements",
                  "Preventing fraud, abuse & security attacks",
                  "Sharing order details with Delivery/Restaurant Partners",
                  "Dispatching hyper-local orders within 10 km radar",
                  "Sharing rider name & live tracking with consumers",
                  "Customizing app experience & video feeds",
                  "Enforcing terms & resolving disputes",
                  "Compliance with legal orders and Indian regulations",
                  "Zero targeted third-party ad tracking guarantee"
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-[#FAF7F0] rounded-md border border-[#EDE6D8] flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. HOW AND WHEN DO WE DISCLOSE INFORMATION TO THIRD PARTIES */}
            <section id="disclosure" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">05.</span> Disclosure to Third Parties
              </h2>
              <p className="text-sm">
                We do not sell, share, rent, or trade your personal information with third parties for commercial gains. Disclosures occur strictly under these situations:
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <p><strong>I. Explicit User Agreement:</strong> When you opt-in to third-party offers or external partner integrations.</p>
                <p><strong>II. Third Parties Providing Services on Our Behalf:</strong> Cloud hosting, payment gateway processing, background KYC checks, SMS OTP delivery, and map/geolocation providers bound by contractual data protection.</p>
                <p><strong>III. Co-Branded Services:</strong> Services offered in partnership with identified institutions (e.g. credit/rewards partners).</p>
                <p><strong>IV. Contests & Promotions:</strong> Administration, winner announcement, and prize fulfillment.</p>
                <p><strong>V. Administrative & Legal Reasons:</strong> Compliance with subpoenas, court decrees, Indian law enforcement requests, and fraud prevention.</p>
                <p><strong>VI. Affiliates & Business Transfer:</strong> Corporate restructuring, mergers, or acquisition of assets.</p>
                <p><strong>VII. Market Study & Platform Improvements:</strong> Aggregated, non-personally identifiable analytical research.</p>
              </div>
            </section>

            {/* 6. THIRD PARTY CONTENT AND LINKS */}
            <section id="third-party" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">06.</span> Third Party Content & Links
              </h2>
              <p className="text-sm">
                The Platform may contain links or integrated widgets (e.g. social sharing buttons) supplied by third parties. We are not responsible for the privacy practices of external websites. We encourage you to review their individual privacy declarations.
              </p>
            </section>

            {/* 7. INFORMATION COLLECTED BY YOU */}
            <section id="collected-by-you" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">07.</span> Information Collected by You
              </h2>
              <p className="text-sm">
                This Policy does not cover the usage of any information about you which is obtained directly by a Delivery Partner and/or Restaurant Partner during order handling outside of the Platform.
              </p>
            </section>

            {/* 8. CHANGE OF INFORMATION AND CANCELLATION */}
            <section id="modification" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">08.</span> Change of Information & Cancellation
              </h2>
              <p className="text-sm">
                You are responsible for maintaining accurate account information. You may correct, delete, or amend your profile details via app settings or by writing to support.
              </p>
              <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-[#D6CEC1] text-xs font-mono space-y-1">
                <p className="font-bold text-[#12100E]">Data Retention Policy:</p>
                <p className="text-[#57524A]">
                  Following account cancellation, certain records (order logs, trip history, transactions) are retained for <strong>180 days</strong> for dispute resolution, fraud prevention, and regulatory compliance before secure deletion or anonymization.
                </p>
              </div>
            </section>

            {/* 9. SECURITY */}
            <section id="security" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">09.</span> Security
              </h2>
              <p className="text-sm">
                We implement industry-standard security measures including SSL encryption, secure socket layers, firewalls, and encrypted databases. While we maintain rigorous controls, no digital transmission is 100% impenetrable. Never share your password or OTP with anyone.
              </p>
            </section>

            {/* 10. INFORMATION OF CHILDREN */}
            <section id="children" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">10.</span> Information of Children
              </h2>
              <p className="text-sm">
                We do not knowingly solicit or collect Information from children under the age of 18 years. Use of the Foodieree App is available only to persons who can enter into legally binding contracts under Applicable Laws.
              </p>
            </section>

            {/* 11. GRIEVANCE OFFICER */}
            <section id="grievance" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">11.</span> Grievance Officer & Contact Details
              </h2>
              <p className="text-sm">
                If you have questions, feedback, or complaints regarding how we process your information, our Grievance Officer will attempt to expeditiously redress your concerns:
              </p>

              <div className="p-5 rounded-xl bg-[#12100E] text-white border-2 border-[#12100E] space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Mail className="w-4 h-4" />
                  <span>OFFICIAL GRIEVANCE REDRESSAL DESK</span>
                </div>
                <div>
                  <p className="text-[#D8D0C0]">FOODIEREE TECHNOLOGIES PRIVATE LIMITED</p>
                  <p className="text-[#A8A090]">ROSHANBIHAR, BAILEY ROAD, D/C21/0, DANAPUR,</p>
                  <p className="text-[#A8A090]">Patna – 801503, Bihar, India.</p>
                </div>
                <div className="pt-2 border-t border-white/15 flex items-center gap-2">
                  <span className="text-[#A8A090]">Email:</span>
                  <a href="mailto:info@foodieree.com" className="text-emerald-400 font-bold hover:underline">
                    info@foodieree.com
                  </a>
                </div>
              </div>
            </section>

            {/* 12. CHANGES TO THE PRIVACY POLICY */}
            <section id="changes" className="space-y-4 pt-6 border-t border-[#EDE6D8]">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#12100E] flex items-center gap-2">
                <span className="text-[#C22918] font-mono">12.</span> Changes to the Privacy Policy
              </h2>
              <p className="text-sm">
                We reserve the right to update or modify this Policy from time to time. Any changes will be effective immediately upon posting the revised Policy on the Platform. We encourage you to periodically review this page for the latest updates. Continued use of our Platform constitutes acceptance of updated terms.
              </p>
            </section>

            {/* Bottom Back Button */}
            <div className="pt-8 border-t border-[#EDE6D8] flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12100E] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#25211D] transition-all active:scale-95 shadow-[3px_3px_0px_#12100E]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>

              <a
                href="#"
                className="text-xs font-mono text-[#736B5E] hover:text-[#C22918] font-bold"
              >
                ↑ Top of Document
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Reusable Brand Footer */}
      <Footer />
    </div>
  );
}
