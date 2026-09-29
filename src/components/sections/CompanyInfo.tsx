import { Building2, ShieldCheck, MapPin, FileText, CheckCircle2 } from "lucide-react";

export default function CompanyInfo() {
  return (
    <section id="company" className="py-10 sm:py-14 bg-[#FAF7F0] border-b-2 border-[#12100E] relative">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Compact Official Gazette Card */}
        <div className="rounded-2xl bg-white border-2 border-[#12100E] p-5 sm:p-7 shadow-[4px_4px_0px_#12100E]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Official Branding & CIN */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="stamp-badge-punchy">
                  Official Corporate Record
                </span>
                <span className="stamp-badge bg-[#FAF7F0] text-[#12100E]">
                  MCA Verified
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C22918] text-white flex items-center justify-center border border-[#12100E] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial font-black text-lg sm:text-xl text-[#12100E] leading-tight">
                    FOODIEREE TECHNOLOGIES
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-[#736B5E] uppercase tracking-wider">
                    Private Limited • Incorporated Entity
                  </span>
                </div>
              </div>

              {/* CIN Badge */}
              <div className="p-3 rounded-lg bg-[#FAF7F0] border border-[#D6CEC1] flex items-center justify-between gap-2">
                <div className="text-[10.5px] font-mono font-bold text-[#736B5E] uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#C22918]" />
                  <span>CIN</span>
                </div>
                <div className="font-mono font-black text-xs sm:text-sm text-[#12100E] tracking-wide select-all bg-white px-2.5 py-1 rounded border border-[#12100E]">
                  U63120BR2026PTC084565
                </div>
              </div>
            </div>

            {/* Right Column: Registered Office & Registrar Info */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#D6CEC1] lg:pl-8 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#C22918] mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Registered Office Address</span>
                </div>

                <address className="not-italic font-mono text-xs sm:text-[13px] text-[#2E2A24] leading-relaxed">
                  <span className="font-bold text-[#12100E]">
                    ROSHANBIHAR, BAILEY ROAD, D/C21/0, DANAPUR, PATNA,
                  </span>{" "}
                  Danapur Bazar, Dinapur-Cum-Khagaul, Patna – 801503, Bihar, India.
                </address>
              </div>

              <div className="pt-3 border-t border-[#EDE6D8] grid grid-cols-3 gap-3 text-xs font-mono">
                <div>
                  <span className="font-bold text-[#12100E] block text-[11px]">Jurisdiction</span>
                  <span className="text-[#57524A] text-[11px]">RoC Bihar (Patna)</span>
                </div>
                <div>
                  <span className="font-bold text-[#12100E] block text-[11px]">Industry</span>
                  <span className="text-[#57524A] text-[11px]">Food-Tech & Delivery</span>
                </div>
                <div>
                  <span className="font-bold text-[#12100E] block text-[11px]">Legal Status</span>
                  <span className="text-[#047857] font-bold text-[11px] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Active Entity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
