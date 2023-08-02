/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing:{
        "1" : "1rem", //16px
        "2" : "1.25rem", //20px
        "4" : "1.563rem", //25px
        "8" : "2.441rem", //31.25px
        "16" : "2.438rem", //39.06px
        "24" : "3.052rem", //48.83px
        "32" : "3.815rem", //61.04px
        "48" : "4.768rem", //76.29px
        "64" : "5.96rem",  //95.37px
        "96" : "9.313rem", //149.01px
        "128" : "14.552rem" //232.83px
      },
      colors: {
        "esmerald":"#50C878",
        "dark-gray":"#2c2c2c",
        "dark":"#0f0f0f",
        "light":"#f7f7f7"
      },
      fontFamily:{
        "poppins": "Poppins"
      },
      fontSize:{
        "h1": "61px",
        "h2":"49px",
        "h3":"39px",
        "h4":"31px",
        "h5":"25px",
        "h6":"20px",
        "p":"16px"
      }
    },
  },
  plugins: [],
}
