/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('assets/img/hero-bg.png')",
        "charity": "url('assets/img/charity-bg.png')",
        "volunteer": "url('assets/img/volunteer-bg.png')",
        "partnership": "url('assets/img/partnership-bg.png')",
        "cosmosomke": "url('assets/img/cosmosomke-bg.png')",
        "about-cosmosomke": "url('assets/img/about-cosmosomke.png')",
        "primary-gradient": "linear-gradient(180deg, #ffa800 0%, #ff8a00 100%)",
        "goal-gradient": "linear-gradient(248.97deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "menu": "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.08) 100%)",
        "carousel-badges": "linear-gradient(0deg, rgba(8, 11, 16, 0) 0%, rgba(8, 11, 16, 0.25) 100%)",
        "carousel-background": "linear-gradient(180deg, rgba(8, 11, 16, 0) 0%, rgba(8, 11, 16, 0.5) 100%)",
      },
      colors: {
        "primary": "#ffa800",
        "primary-20": "rgba(255, 168, 0, 0.2)",
        "success": "#a0d911",
        "success-20": "rgba(160, 217, 17, 0.2)",
        "danger": "#f5222d",
        "white-5": "rgba(255, 255, 255, 0.05)",
        "white-8": "rgba(255, 255, 255, 0.08)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-30": "rgba(255, 255, 255, 0.3)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "dark": "#080b10",
        "dark-2": "#212328",
        "dark-3": "#37393d",
        "dark-4": "#2c2e33",
        "gray": "#a8acba",
        "dark-gray": "#2d3034",
        "dark-gray-2": "#303030",
        "dark-gray-20": "rgba(168, 172, 186, 0.2)",
        "shadow": "rgba(48, 48, 48, 0.4)",
        "kaspi": "#f24535",
        "disabled": "#6e6e6e",
        "btn-disabled": "#bfbebe",
      },
      boxShadow: {
        "primary-40": "0px 0px 16px 0px rgba(255, 168, 0, 0.4)",
        "black-8": "0px 0px 24px 0px rgba(0, 0, 0, 0.08)",
        "menu": "0px 0px 4px 0px rgba(48, 48, 48, 0.25)",
      },
    },
  },
  plugins: [],
};

export {};
