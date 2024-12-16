/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1677BD",
        whitegray: "#F2F2F2",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
      },
    },
  },
  plugins: [],
};

