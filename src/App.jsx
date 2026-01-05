import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import WhatWeDo from "./components/WhatWeDo";
import FAQs from "./components/FAQ's";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Approach from "./components/Approach";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Approach />
              <Services />
              <HowWeWork />
              <WhatWeDo />
              <FAQs />
              <Contact />
            </>
          }
        />
        {/* Optional separate pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
