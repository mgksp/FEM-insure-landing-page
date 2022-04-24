module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dk-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",

        "dkr-violet": "hsl(270, 9%, 17%)",
        "dk-grayish-violet": "hsl(273, 4%, 51%)",
        "ltr-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "dm-display": ["DM Serif Display", "serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
