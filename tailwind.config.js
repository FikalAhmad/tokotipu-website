/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "girl-fashion": "url('./images/girl-fashion.png')",
      },
      colors: {
        "krem-aja": "#F4EEA9",
        "coklat-krem": "#F0BB62",
        "ijo-muda": "#519259",
        "ijo-tua": "#064635",
      },
      fontFamily: {
        jakartalight: "jakartaLight",
        jakartaregular: "jakartaRegular",
        jakartamedium: "jakartaMedium",
        jakartabold: "jakartaBold",
      },
    },
  },
  plugins: [],
};
