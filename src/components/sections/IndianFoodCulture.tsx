import {
  Flame,
  Quote,
  ShieldCheck,
  MapPin,
  Video,
  Heart,
  Sparkles,
  Award,
  CheckCircle2,
  Building2,
  ArrowRight
} from "lucide-react";

export default function IndianFoodCulture() {
  return (
    <section id="culture" className="py-14 sm:py-20 bg-[#F7F3EB] border-b-2 border-[#12100E] relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 pb-5 border-b border-[#D6CEC1] gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="stamp-badge-punchy">
                <Flame className="w-3.5 h-3.5 fill-current" />
                Who We Are
              </span>
              <span className="stamp-badge bg-white text-[#12100E]">
                The Foodieree Manifesto
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-[#12100E] tracking-tight leading-[1.1]">
              Born for the real food heroes.{" "}
              <span className="italic font-serif text-[#C22918] block sm:inline">
                Championing local taste.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#57524A] mt-3 font-medium leading-relaxed">
              Foodieree was founded in Danapur, Patna to celebrate century-old family recipes, bustling street carts, and honest neighborhood kitchens overlooked by legacy delivery apps.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#736B5E] uppercase tracking-wider">
              OUR IDENTITY & PHILOSOPHY ↘
            </span>
          </div>
        </div>

        {/* Pure Text-Driven Luxury Broadsheet Manifesto Grid */}
        <div className="rounded-2xl bg-white border-2 border-[#12100E] shadow-[6px_6px_0px_#12100E] p-6 sm:p-10 md:p-14 mb-8">
          {/* Top Big Quote */}
          <div className="border-b border-[#EDE6D8] pb-8 mb-8">
            <div className="flex items-start gap-4">
              <span className="font-serif text-5xl sm:text-6xl text-[#C22918] leading-none select-none shrink-0 font-bold">
                “
              </span>
              <div>
                <p className="font-editorial text-xl sm:text-2xl lg:text-3xl font-black text-[#12100E] leading-snug">
                  Great food doesn&apos;t come from boardroom algorithms. It comes from the crackle of mustard oil, the aroma of earthen handis, and the soul of neighborhood cooks.
                </p>
                <div className="mt-3 flex items-center gap-2 font-mono text-xs text-[#736B5E]">
                  <span className="font-bold text-[#C22918]">— Foodieree Founding Creed</span>
                  <span>•</span>
                  <span>Danapur, Patna, Bihar</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Editorial Essay */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-sm sm:text-base leading-relaxed text-[#4A453E]">
            {/* Column 1: The Origin Story */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#C22918]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#12100E]">
                  01. The Origin Story
                </h3>
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#12100E]">
                Born in Bihar, Built for India
              </h4>
              <p>
                Foodieree was born on the streets of Danapur and Bailey Road, Patna. We looked at traditional delivery platforms and saw a broken system: sterile stock photos that looked nothing like real food, predatory 30% cuts that strangled small eateries, and long-distance deliveries that turned steaming hot delicacies cold and soggy.
              </p>
              <p className="text-xs sm:text-sm text-[#736B5E] font-medium">
                We knew our local street food icons and heritage clay-pot masters deserved something infinitely better.
              </p>
            </div>

            {/* Column 2: What We Believe */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#047857]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#12100E]">
                  02. Our Core Conviction
                </h3>
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#12100E]">
                Food is Sizzling, Visual & Emotional
              </h4>
              <p>
                You don’t crave a dish from a flat photo; you crave it when you hear the tarka hiss, see the butter melt over litti chokha, and watch the biryani steam rise. Foodieree replaces misleading studio graphics with authentic 15-second video feeds captured live inside kitchens.
              </p>
              <p className="text-xs sm:text-sm text-[#736B5E] font-medium">
                When you tap order on Foodieree, you know exactly what is being made for you.
              </p>
            </div>

            {/* Column 3: The Promise */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#12100E]">
                  03. The Foodieree Standard
                </h3>
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#12100E]">
                Hyper-Local & Uncompromisingly Fresh
              </h4>
              <p>
                We enforce a strict 10 km hyper-local radar. By keeping radius tight, orders travel quickly and safely from the pan to your plate. Food arrives piping hot, riders make manageable runs, and local culinary culture thrives without middlemen penalties.
              </p>
              <p className="text-xs sm:text-sm text-[#736B5E] font-medium">
                Fair economics, honest discovery, and pure local passion. That is who we are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
