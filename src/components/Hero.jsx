import React from "react";
import heroImg from "../assets/Object.svg";
import "../styles/metallic.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

import GradualBlur from "./UIEffect/GradualBlur";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      // On home page → scroll directly
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Not on home page → navigate first, then scroll
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // 100ms delay allows DOM to render
    }
  };

  return (
    <section id="home"  
      className="relative w-full
      min-h-[92vh] md:min-h-screen
      overflow-hidden bg-black">

      {/* Atmosphere */}
      <div className="absolute left-0 top-0 h-full w-[75%] bg-gradient-to-r from-[#0b1226]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/80 to-transparent" />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          w-full max-w-[1440px] mx-auto
          px-4 md:px-10 lg:px-20
          pt-28 sm:pt-32
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          gap-14 md:gap-20
        "
      >
        {/* LEFT */}
        <div className="relative flex flex-col items-center md:items-start gap-8 sm:gap-12 max-w-[620px] flex-1 md:ml-8 lg:ml-12">
          {/* Heading */}
          <h1
            className="
              font-serif
              text-[41px] leading-[1.45]
              sm:text-[40px] sm:leading-[1.25]
              lg:text-[64px]
              text-slate-200
              tracking-tight
              text-center md:text-left
              mt-6 sm:mt-8
            "
          >
            We build what <br />
            <span className="relative">
              Businesses Actually
              <span
                aria-hidden
                className="
                  absolute left-[6%] top-[0.55em]
                  h-[1.5em] w-[4em]
                  bg-white/5 blur-2xl rounded-full
                "
              />
            </span>
            <br />
            Need.
          </h1>

          {/* REMOVED MOBILE IMAGE FROM HERE */}
          {/* Mobile image is now moved to bottom */}

          {/* Description */}
          <p
            className="
              text-[16px] leading-[1.7]
              sm:text-[18px]
              text-slate-500
              max-w-[560px]
              text-center md:text-left
            "
          >
            We design, build, and grow digital products without the usual chaos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row
            gap-4 sm:gap-6
            items-center md:items-start
            pb-6 sm:pb-0">
            <button
              onClick={() => handleScroll("contact")}
              className="
                w-full sm:w-fit
                px-6 py-3
                text-[14px] sm:text-[15px]
                font-medium
                rounded-full
                text-white
                bg-sky-400 hover:bg-sky-500
                transition
                shadow-[0_6px_18px_rgba(56,189,248,0.35)]
              "
            >
              Book a Call
            </button>
            <button
              onClick={() => handleScroll("services")}
              className="
                w-full sm:w-fit
                px-6 py-3
                text-[14px] sm:text-[15px]
                font-medium
                rounded-full
                text-slate-300
                border border-slate-600
                hover:border-slate-400
                transition
              "
            >
              Services
            </button>
          </div>
          
          {/* MOBILE IMAGE - ADDED HERE (BELOW BUTTONS) */}
          <div className="w-full flex justify-center md:hidden -mt-4 mb-8">
            <div className="metallic-logo w-[280px] sm:w-[320px] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
              <img src={heroImg} alt="Hero Graphic" />
            </div>
          </div>
        </div>

        {/* Desktop image - UNCHANGED */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="metallic-logo w-[420px] lg:w-[580px] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <img src={heroImg} alt="Hero Graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;