import React from "react";
import HowItWorks from "../assets/Shape-1.1.svg"; // <-- use your uploaded image

import HowItWorksLogo1 from "../assets/howitworkslogo1.svg";
import HowItWorksLogo2 from "../assets/howitworkslogo2.svg";
import HowItWorksLogo3 from "../assets/howitworkslogo3.svg";

const HowWeWork = () => {
  return (
    <section id="how-we-work" 
    className="relative bg-gray pt-10 pb-32 overflow-hidden rounded-2xl"
    style={{ backgroundColor: "oklch(14.7% 0.004 49.25)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex justify-center mb-6">
          <span className="px-7 py-2 rounded-full text-lg tracking-wide text-sky-400 border border-white/10 bg-black/60">
            How we work
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[26px] sm:text-[42px] md:text-[64px] font-medium text-white mb-4">
          Clear Thinking. Structured Execution.
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 max-w-[680px] mx-auto mb-20 leading-relaxed text-[[14px] sm:text-lg">
          Every step follows a defined flow designed to remove guesswork,
          reduce rework, and keep momentum predictable.
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div className="relative flex justify-center">
            <img
              src={HowItWorks}
              alt="How we work 3D illustration"
              className="
  relative z-10
  w-[280px] sm:w-[360px] md:w-[460px]
  object-contain
  drop-shadow-[0_60px_120px_rgba(0,0,0,0.5)]
  transition-transform duration-700 ease-out
  hover:scale-[1.04]
"

            />
          </div>

          {/* Right Steps */}
          <div className="space-y-6">
            {[
              {
                title: "Define the Reality",
                desc: "Every engagement begins by aligning on the actual problem, not assumptions, so effort is spent where it creates real impact.",
                icon: HowItWorksLogo1,
              },
              {
                title: "Build With Intent",
                desc: "Every decision is deliberate, measurable, and tied to real outcomes — no filler, no vanity features.",
                icon :HowItWorksLogo2,
              },
              {
                title: "Optimize for Growth",
                desc: "What works is optimized and scaled deliberately, ensuring performance, stability, and long-term maintainability.",
                icon :HowItWorksLogo3,
              },
            ].map((step, idx) => (
               <div
  key={idx}
  className="
    rounded-xl
    border border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-6
    flex items-start gap-4

    transition-all duration-300 ease-out
    hover:border-sky-400/40
    hover:bg-white/[0.06]
    hover:shadow-[0_0_28px_rgba(56,189,248,0.18)]
    hover:-translate-y-1
  "
>
          <img src={step.icon} alt="" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="text-white text-[16px] sm:text-2xl font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-[14px] sm:text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowWeWork;
