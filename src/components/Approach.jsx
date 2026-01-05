import React from "react";
import ScrollRevealText from "./UIEffect/ScrollRevealText";

const Approach = () => {
  const approachText = `We Built EnerviQ Around A Simple Idea:
Build And Grow As One System, Not Two Departments.
Most Software Is Built In Isolation.
Most Marketing Is Run On Assumptions.
Then Everyone Wonders Why Growth Feels Forced.
We’ve Seen It Enough Times To Stop Pretending It Works That Way.`;

  return (
    <section className="relative min-h-[72vh] py-32 mt-1 ">
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--Gray-4, #242424ff)" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0b1226]/20" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <ScrollRevealText
          className="text-[#E5E5E5] font-alexandria text-[18px] leading-[1.6] sm:text-[38px] sm:leading-[140%] tracking-[0.38px] capitalize font-normal ml-1 sm:ml-1"
          baseOpacity={0.12}
          blurStrength={6}
          stagger={0.06}
        >
          {approachText}
        </ScrollRevealText>
      </div>
    </section>
  );
};

export default Approach;
