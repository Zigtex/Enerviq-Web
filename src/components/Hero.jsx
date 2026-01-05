import React from "react";
import heroImg from "../assets/Object.svg";
import "../styles/metallic.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
    className="relative w-full min-h-screen overflow-hidden bg-black">

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
        <div className="relative flex flex-col items-start gap-8 sm:gap-12 max-w-[620px] flex-1">

          {/* Heading */}
          <h1
            className="
              font-serif
              text-[26px] leading-[1.3]
              sm:text-[40px] sm:leading-[1.25]
              lg:text-[64px]
              text-slate-200
              tracking-tight
              ml-2 sm:ml-14
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

          {/* Mobile image */}
          <div className="w-full flex justify-center md:hidden">
            <div className="metallic-logo w-[240px] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
              <img src={heroImg} alt="Hero Graphic" />
            </div>
          </div>

          {/* Description */}
          <p
            className="
              text-[14px] leading-[1.7]
              sm:text-[18px]
              text-slate-500
              max-w-[560px]
               ml-1 sm:ml-14
            "
          >
            We design, build, and grow digital products without the usual chaos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6  ml-1 sm:ml-14">
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
        </div>

        {/* Desktop image */}
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
