import { useState } from "react";
import PlusIcon from "../assets/Plus.svg";

const faqs = [
  {
    q: "Who usually works with Enerviq?",
    a: "EnervIQ works with founders and business teams who need reliable software built, but don’t want to manage technical complexity themselves. Clear communication and ownership of execution are central to how projects run."
  },
  {
    q: "How involved do I need to be in technical decisions?",
    a: "Only where it matters. Technical decisions are handled internally, with clarity shared in business terms so progress stays transparent and predictable."
  },
  {
    q: "Can you work with an idea that’s still evolving?",
    a: "Yes. Many projects begin with rough requirements and are refined through structured planning before development starts."
  },
  {
    q: "What does the development process look like?",
    a: "Work is broken into clear phases with defined milestones and regular updates. Progress is visible at every stage without requiring technical oversight."
  },
  {
    q: "How are timelines and scope managed?",
    a: "Projects are planned around realistic delivery timelines and business priorities. Changes are handled transparently, without surprises late in the process."
  },
  {
    q: "What’s the best way to get started?",
    a: "A short introductory call helps align on goals, scope, and fit. From there, next steps are outlined clearly before any commitment."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" 
    className="relative bg-black pt-1 pb-24 px-4 sm:px-6"
     style={{ backgroundColor: "oklch(14.7% 0.004 49.25)" }}
    >

        
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255, 255, 255, 0),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[66rem] mx-auto px-4 sm:px-6 pt-0 sm:pt-12
">
        {/* Badge */}
         <div className="flex justify-center mb-4">
            <div className="px-4 py-2 rounded-full border border-white/10 text-lg tracking-wide text-sky-400">
             FAQ's
        </div>
    </div>
        {/* Heading */}
        <h2 className="text-center font-alexandria font-normal text-whiteSoft text-[28px] sm:text-[40px] lg:text-[51px] leading-tight">
          Get Answers To Common Questions
        </h2>

        {/* Description */}
        <p className="mt-6 text-center text-[15px] sm:text-[20px] text-white/50 max-w-3xl mx-auto leading-relaxed">
          From basics to advanced topics, find everything you need to know right
          here. Let us help you simplify the process and find the clarity you're
          looking for.
        </p>

        {/* FAQ Items */}
        <div className="mt-14 space-y-7">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
                <div
  key={index}
  className="
    group
    relative
    rounded-xl
    border border-white/10
    bg-gradient-to-b from-white/[0.04] to-white/[0.01]
    backdrop-blur-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:border-sky-400/30
    hover:shadow-[0_0_32px_rgba(56,189,248,0.15)]
  "
>


  {/* Hover glow layer */}
   <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-lg"></div>

    <button
    onClick={() => setOpenIndex(isOpen ? null : index)}
    className="w-full flex items-center justify-between px-6 py-6 sm:px-9 sm:py-5 relative z-10"
  >
    <span className="text-[15px] sm:text-[17px] lg:text-[18px] text-white/90 text-left leading-snug">
      {item.q}
    </span>
    <img
      src={PlusIcon}
      alt="Toggle"
      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45 opacity-100" : "opacity-70"}`}
    />
  </button>

  {isOpen && (
    <div className="px-5 pb-4 text-sl text-white/60 leading-relaxed relative z-10">
      {item.a}
    </div>
  )}
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
