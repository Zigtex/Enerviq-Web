import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const location = useLocation();

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ivqqv5k";
    const templateID = "template_urmb3o9";
    const publicKey = "ggzoC2To4IqdyDnB6";

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        showToast("Message sent successfully!", "success");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        showToast("Failed to send email. Please try again.", "error");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-6"
    >
      {/* Toast */}
       {toast.show && (
  <div
    className="
      
      fixed top-6 left-1/2 -translate-x-1/2
      flex items-center gap-3
      px-5 py-3 rounded-full
      text-white font-medium
      bg-sky-400/90
      shadow-[0_10px_30px_rgba(56,189,248,0.45)]
      backdrop-blur-md
      transition-all duration-500
      z-50
    "
  >
    <span className="text-lg">📩</span>
    {toast.message}
  </div>
)}


      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1226]/40 via-black to-black" />

      <div
        className="
           
          relative z-10 w-full
          max-w-[420px]
          sm:max-w-[520px]
          lg:max-w-[640px]
          xl:max-w-[720px]
          text-center
        "
      >
        {/* Top pill */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 rounded-full text-lg tracking-wide text-sky-400 border border-white/10 bg-white/5 mt-14">
            Contact us
          </span>
        </div>

                <h1 className="font-alexandria font-serif text-[26px] sm:text-[34px] lg:text-[44px] xl:text-[52px] text-white leading-tight mb-4">
          Chat To Our Friendly Team
        </h1>

        <p className="text-gray-400 text-[13px] sm:text-[15px] lg:text-[17px] xl:text-[18px] mb-10">
          We’d love to hear from you. Please fill out this form and shout us an
          email.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            relative
            rounded-2xl
            border border-white/10
            bg-gradient-to-b from-white/[0.03] to-white/[0.02]
            backdrop-blur-xl
            p-6 sm:p-8 lg:p-10 xl:p-12
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            space-y-4 lg:space-y-6
          "
        >
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white resize-none"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-sky-600 py-3 text-white font-medium hover:bg-sky-500"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
