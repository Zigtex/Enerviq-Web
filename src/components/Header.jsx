import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Frame 3.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section function
  const navigate = useNavigate();
const location = useLocation();

const handleNav = (id) => {
  setMenuOpen(false);

  if (location.pathname === "/") {
    // Scroll on home page
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    // Navigate to home page first, then scroll
    navigate("/", { replace: false });
    // Wait for DOM to render
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // 100ms delay ensures section exists
  }
};
return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="EnervIQ"
          className="h-10 cursor-pointer"
          onClick={() => handleNav("home")}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-sm text-slate-400">
          <button onClick={() => handleNav("home")} className="hover:text-white">
            Home
          </button>
          <button onClick={() => handleNav("services")} className="hover:text-white">
            Services
          </button>
          <button onClick={() => handleNav("how-we-work")} className="hover:text-white">
            How We Work
          </button>
          <button onClick={() => handleNav("faqs")} className="hover:text-white">
            FAQs
          </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav("contact")}
            className="hidden md:inline-flex px-5 py-2 text-[14px] font-medium rounded-full text-white bg-sky-500 hover:bg-sky-400 transition shadow-[0_6px_18px_rgba(56,189,248,0.35)]"
          >
            Book a Call
          </button>

          {/* Hamburger – mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-6 text-base text-slate-300">
            <button onClick={() => handleNav("home")} className="text-left hover:text-white">
              Home
            </button>
            <button onClick={() => handleNav("services")} className="text-left hover:text-white">
              Services
            </button>
            <button onClick={() => handleNav("how-we-work")} className="text-left hover:text-white">
              How We Work
            </button>
            <button onClick={() => handleNav("faqs")} className="text-left hover:text-white">
              FAQs
            </button>
            <button onClick={() => handleNav("contact")} className="mt-4 w-full px-6 py-3 text-[14px] font-medium rounded-full text-white bg-sky-500 hover:bg-sky-400 transition">
              Book a Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;