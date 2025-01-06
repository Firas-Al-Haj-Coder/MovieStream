/** @type {import('tailwindcss').Config} */

// wir werden darkmode hier einfügen 
// und min height erweitern extend und unsere eigene Farben haben oder Screen Größe einstellen

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      fontSize: {
        sm: '0.7rem'
      }, 
      maxWidth: {
        sm: '15rem'
      }
    },
    plugins: [],
    darkMode: 'selector'
  }