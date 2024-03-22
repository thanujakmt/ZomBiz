
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple" : "rgb(115, 112, 216)",
        "gray" : "rgb(136, 136, 136)",
        "light_gary" : "#44454f",
        "liteblue" : "rgb(115, 152, 216)",
        "bg_color" : "rgba(115,112,215,0.6)",
        "bg_color1" : "rgba(115,112,216,.8)",
        "bg_color2" : "rgba(115,112,215,.85)",
        "blue_voilet" : "rgb(85, 73, 180)",
        "very_light_blue" : "#f9faff",
        "light_purple" : "#908ddc",
        "light_purple1" : "rgba(65,62,126,.8)",
        "light_purple2" : "#7370d8",
        "navy_blue" : "#212135",
        "very_dark_navy_blue" : "#1a1a2a"
      },
      fontFamily : {
        "playfair" : ["Playfair Display", "serif"],
        "po" : ["Poppins","sans-serif"],
      },
      boxShadow : {
        "box" : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "box1" : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      backgroundImage : {
          "map" : "url('/images/footer/map.jpg')"
      }
    },
  },
  plugins: [],
}