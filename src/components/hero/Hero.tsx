import HeroAppSlider from "./HeroAppSlider";

export default function Hero() {
  return (
    <section className="w-full bg-[#F7F3EB] pt-2 sm:pt-4 pb-6 sm:pb-8 border-b border-[#D6CEC1]/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-Width 3-App Interactive Hero Slideshow */}
        <HeroAppSlider />
      </div>
    </section>
  );
}
