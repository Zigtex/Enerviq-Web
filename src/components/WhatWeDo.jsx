import wwd1 from "../assets/wwd1.svg";
import wwd2 from "../assets/wwd2.svg";
import wwd3 from "../assets/wwd3.svg";

const WhatWeDo = () => {
  return (
     <section id="what-we-do" 
     className="relative bg-black min-h-screen pt-12 sm:pt-16
 pb-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* subtle background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
        {/* Pill */}
         <div className="inline-block mt-4 sm:mt-2 mb-3 px-4 py-2 rounded-full border border-white/10 text-[14px] sm:text-lg tracking-wide text-sky-400">
          What We Do
        </div>


        {/* Heading */}
         <h2
  className="
    mt-4
    font-alexandria
    font-normal
    text-[#E5E5E5]
    text-center
    text-[28px]
    sm:text-[42px]
    lg:text-[56px]
    leading-[1.1]
    tracking-tight
    max-w-[780px]
    mx-auto
  "
>
  Engineering And Growth <br className="hidden sm:block" />
  Under One Roof
</h2>

        {/* Subtext */}
           <p className="mt-5 text-center text-[14px] sm:text-[18px] text-gray-500 max-w-[720px] mx-auto leading-[1.6]">

          We don’t just build products that look good, or run campaigns that sound smart.
          We build systems that work together from day one.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">

          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] px-6 sm:px-8 py-8 sm:py-10 min-h-[260px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_0_32px_rgba(56,189,248,0.15)]">

            <img src={wwd1} alt="Strategy" className="mx-auto h-12 w-12" />
            <h3 className="mt-4 text-3xl font-medium text-slate-100">
              Strategy
            </h3>
            <p className="mt-8 text-sl text-slate-400 leading-relaxed">
              We turn messy ideas into clear plans that actually move the business.
            </p>
          </div>

          {/* Card 2 */}
           <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] px-6 sm:px-8 py-8 sm:py-10 min-h-[260px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_0_32px_rgba(56,189,248,0.15)]">
            <img src={wwd2} alt="Execution" className="mx-auto h-12 w-12" />
            <h3 className="mt-6 text-3xl font-medium text-slate-100">
              Execution
            </h3>
            <p className="mt-8 text-sl text-slate-400 leading-relaxed">
              We design and build digital products that ship, scale, and don’t fall apart.
            </p>
          </div>

          {/* Card 3 */}
           <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] px-6 sm:px-8 py-8 sm:py-10 min-h-[260px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_0_32px_rgba(56,189,248,0.15)]">
            <img src={wwd3} alt="Scale" className="mx-auto h-12 w-12" />
            <h3 className="mt-8 text-3xl font-medium text-slate-100">
              Scale
            </h3>
            <p className="mt-8 text-sl text-slate-400 leading-relaxed">
              We help good systems grow fast, clean, and without breaking everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
