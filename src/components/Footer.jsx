import React from "react";
import logo from "../assets/Frame 3.svg";
//import footerArrow from "../assets/footerArrow.svg";
//import footerRound from "../assets/footerRound.svg";
import { useNavigate, useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Footer = () => {
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
    }, 100); // small delay for DOM render
  }
};

  return (
    <footer className="bg-black mt-16">
        <div className="max-w-[1200px] 2xl:max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-16 lg:py-20">

        {/* Top Section */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">


                {/* Logo */}
            <img
            src={logo}
            alt="Enerviq Logo"
            className="h-12 sm:h-11 lg:h-14 mb-6 mx-auto sm:mx-0"
          />
            
          <div>
             <h4 className="text-white font-medium text-lg sm:text-base lg:text-sl xl:text-xl mb-4 lg:mb-6 tracking-wide text-center sm:text-left">            
              Quick Links
             </h4>
          <ul className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] lg:text-[16px] text-gray-400 text-center sm:text-left">
  <li>
    <button
      onClick={() => handleScroll("home")}
      className="cursor-pointer text-gray-400 hover:text-white transition"
    >
      Home
    </button>
  </li>
  <li>
    <button
      onClick={() => handleScroll("services")}
      className="cursor-pointer text-gray-400 hover:text-white transition"
    >
      Services
    </button>
  </li>
  <li>
    <button
      onClick={() => handleScroll("how-we-work")}
      className="cursor-pointer text-gray-400 hover:text-white transition"
    >
      How We Work
    </button>
  </li>
  <li>
    <button
      onClick={() => handleScroll("faqs")}
      className="cursor-pointer text-gray-400 hover:text-white transition"
    >
      FAQs
    </button>
  </li>
</ul>

          </div>

          {/* Social Media */}
          <div>
             <h4 className="text-white font-medium text-center sm:text-left text-base lg:text-sl xl:text-xl mb-4 lg:mb-6 tracking-wide">
                Social Media
            </h4>
              <ul className="space-y-3 text-lg sm:text-base lg:text-sl text-gray-400 flex flex-col items-center sm:items-start">
  <li>
    <a 
      href="" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      Instagram
    </a>
  </li>
  <li>
    <a 
      href="https://www.linkedin.com/company/enerviq/about/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      LinkedIn
    </a>
  </li>
</ul>
          </div>

          {/* Newsletter */}
           
        </div>
        {/* Bottom Section */}
         <div className="mt-14 sm:mt-16 lg:mt-20 text-center text-[13px] sm:text-[14px] text-gray-500">

             © <b>EnervIQ</b> 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
