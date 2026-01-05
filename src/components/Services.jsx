import React, { useState } from "react";
import ServiceComp1  from "../assets/ServiceSideImage.svg";
import ServiceComp2 from "../assets/ServiceComp2.svg";
import ServiceComp3 from "../assets/ServiceComp3.svg";


const CONTENT = {
  web: {
    image : ServiceComp1,
    title1: "Custom Web Designs",
    points1: [
      "Interfaces designed around brand, user behavior, and conversion goals.",
      "Every layout, interaction, and component tailored to purpose.",
      "Built to stand out, scale cleanly, and age well.",
    ],
    title2: "Template based Development",
    points2: [
      "Pre-built frameworks adapted for speed and cost efficiency.",
      "Ideal for quick launches where flexibility is limited.",
      "Structured, reliable, and focused on getting live fast.",
    ],
  },
  growth: {
    image : ServiceComp2,
    title1: "MVP and Roadmap Planning",
    points1: [
      "Clear definition of what to build first and what can wait.",
      "Features prioritized around validation, speed, and scalability.",
      "Focused roadmap that reduces risk before serious investment.",
    ],
    title2: "Scalability and Performance Planning",
    points2: [
      "Systems designed to handle growth before it becomes a problem.",
      "Architecture decisions made with traffic and usage spikes in mind.",
      "Built to scale cleanly without costly rewrites later.",
    ],
  },
  digital: {
    image : ServiceComp3,
    title1: "Web Application Development",
    points1: [
      "Custom applications shaped around real workflows.",
      "Secure, scalable, long-term maintainable systems.",
      "From dashboards to customer-facing platforms.",
    ],
    title2: "SaaS Product Development",
    points2: [
      "End-to-end SaaS built for launch and scale.",
      "Clean UX and performance baked in from day one.",
      "Ready for real users and real growth.",
    ],
  },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
     <section id="services" 
     className="relative bg-black pt-3 sm:pt-10 pb-20 sm:pb-28 px-3 sm:px-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
      {/* Label */}
        <div className="flex justify-center mt-1 sm:mt-1 mb-3">
          <span className="px-7 py-2 rounded-full text-lg tracking-wide text-sky-500 border border-white/15 bg-black/60">
            Services
          </span>
        </div>
      {/* Heading */}
        <h2 className="text-[28px] sm:text-[46px] lg:text-[66px] font-medium text-white mb-4">
          What We Offer
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-[560px] mx-auto mb-16 leading-relaxed text-[14px] sm:text-lg">
          Services built to support real products, real growth, and real business goals.
          From custom software to digital solutions.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-20 flex-wrap">
          {[
            { id: "web", label: "Website Development" },
            { id: "growth", label: "Growth Consultation" },
            { id: "digital", label: "Digital Solutions" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 sm:px-14 py-4 sm:py-5
                min-w-[260px]
                rounded-xl cursor-pointer
                border
                text-[14px] sm:text-lg
                backdrop-blur-md
                transition-all duration-300 ease-out
                ${
                  activeTab === tab.id
                    ? "bg-gray-800 border-gray-500 text-white"
                    : "bg-white/[0.02] border-white/10 text-gray-400 hover:bg-gray-800/70 hover:text-white"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="
          relative
          mx-auto
          max-w-[1100px] lg:max-w-[1200px]
          rounded-2xl
          border border-white/10
          bg-gradient-to-br from-white/[0.04] to-white/[0.01]
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(255,255,255,0.05)]
          p-6 sm:p-10 lg:p-14
        ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <div
              key={activeTab}
              className="text-left animate-[fadeSlide_0.4s_ease-out]"
            >
              <h3 className="text-[20px] sm:text-[28px] font-medium text-white mb-6">
                {CONTENT[activeTab].title1}
              </h3>

              <ul className="space-y-3 text-gray-400 text-[14px] sm:text-lg mb-10">
                {CONTENT[activeTab].points1.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <h3 className="text-[20px] sm:text-[28px] font-medium text-white mt-14 mb-6">
                {CONTENT[activeTab].title2}
              </h3>

              <ul className="space-y-3 text-gray-400 text-[14px] sm:text-lg">
                {CONTENT[activeTab].points2.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Right Image (same image for all tabs) */}
            <div className="flex justify-center">
              <img
              src={CONTENT[activeTab].image}
              alt="Service Illustration"
              className="w-[280px] sm:w-[340px] md:w-[380px] image-float"
            />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
