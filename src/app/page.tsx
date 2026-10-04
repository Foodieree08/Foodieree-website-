import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import BrandTicker from "@/components/sections/BrandTicker";
import ReelsExperience from "@/components/sections/ReelsExperience";
import ScrollTriPartyShowcase from "@/components/sections/ScrollTriPartyShowcase";
import Ecosystem from "@/components/sections/Ecosystem";
import FasterCapitalIncubation from "@/components/sections/FasterCapitalIncubation";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF9] text-[#141210]">
      {/* Sticky Premium Broadsheet Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <Hero />

        {/* 2. Fast Cuisine Ticker */}
        <BrandTicker />

        {/* 3. 15-Second Food Reels Discovery */}
        <ReelsExperience />

        {/* 4. Full Scroll-Driven Animation (0% Delivery Fee -> 0% Platform Fee -> Up to 2% Creators) */}
        <ScrollTriPartyShowcase />

        {/* 5. Comparison Matrix & Hyperlocal Edge */}
        <Ecosystem />

        {/* 6. The Foodieree Story: Founder IIT Patna & FasterCapital Incubation */}
        <FasterCapitalIncubation />

        {/* 7. Frequently Asked Questions */}
        <FAQSection />

        {/* 8. Call to Action */}
        <FinalCTA />
      </main>

      {/* 9. Brand Footer */}
      <Footer />
    </div>
  );
}

