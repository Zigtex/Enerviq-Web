// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", "system-ui", "sans-serif"],
//         display: ["Amethysta", "serif"],
//       },
//       colors: {
//         gray4: "#0F0F0F",
//         brand: {
//           light: "#38bdf8",
//           DEFAULT: "#0ea5e9",
//           dark: "#0284c7",
//         },
//       },
//     },
//   },
//   plugins: [],
// };


 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
      },
      colors: {
        grayBase: "#242424",   // main section background
        grayDeep: "#0F0F0F",   // darker sections
        whiteSoft: "#E5E5E5",  // Figma white
        accent: "#38BDF8",     // CTA blue (Book a Call)
        navyGlow: "#0b1226",   // subtle glow gradients
      },
    },
  },
  plugins: [],
};
