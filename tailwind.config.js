/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    extend: {
      fontFamily: {
        "jose": 'Josefin Sans, sans-serif',
      },
      colors: {
        // primary
        brightBlue: "hsl(220, 98%, 61%)",
        // the gradient must be made like this and then you can write it in
        // tailwind like this for it to work:
        // bg-gradient-to-r from-grade1 to-grade2
        grade1: "hsl(192, 100%, 67%)",
        grade2: "hsl(280, 87%, 65%)",

        // Light Mode
        veryLightGrey: "hsl(0, 0%, 98%)",
        veryLightGreyBlue: "hsl(236, 33%, 92%)",
        lightGreyBlue: "hsl(233, 11%, 84%)",
        darkGreyBlue: "hsl(236, 9%, 61%)",
        veryDarkGreyBlue: "hsl(235, 19%, 35%)",

        // Dark Mode
        dVeryDarkBlue: "hsl(235, 21%, 11%)",
        dVeryDesatBlue: "hsl(235, 24%, 19%)",
        dLightGreyBlue: "hsl(234, 39%, 85%)",
        dLightHoverBlue: "hsl(236, 33%, 92%)",
        dDarkGreyBlue: "hsl(234, 11%, 52%)",
        dVeryDarkGreyBlue: "hsl(233, 14%, 35%)",
        dVeryDarkGreyBlue2: "hsl(237, 14%, 26%)",
        White: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}
