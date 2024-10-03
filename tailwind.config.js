import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        generalBackgroundColor: "#F2F2F2",
        commonBorderColor: "#181A1E",
        
        //Darkmode
        primaryColorDark: "#3366FF",
        yellowColorDark: "#E6A800",
        purpleColorDark: "#8B6EFF",
        irisBlueColorDark: "#009BAA",
        headingColorDark: "#F2F2F2",
        textColorDark: "#F2F2F2",
        generalBackgroundColorDark: "#191D24", 
        commonBorderColorDark: "#EEF0F2",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, addBase, theme }) {
      const colors = theme('colors');
      const newUtilities = {};

      // Loop through color definitions to generate dark mode styles
      for (const [name, value] of Object.entries(colors)) {
        if (name.endsWith('Color')) {
          const darkColorName = `${name}Dark`;
          const darkColorValue = colors[darkColorName];

          if (darkColorValue) { // If the dark mode color exists
            // Light mode styles
            newUtilities[`.bg-${name}`] = { backgroundColor: value };
            newUtilities[`.border-${name}`] = { borderColor: value };
            newUtilities[`.text-${name}`] = { color: value };
            newUtilities[`.hover\\:bg-${name}:hover`] = { backgroundColor: value };
            newUtilities[`.hover\\:border-${name}:hover`] = { borderColor: value };
            // Dark mode styles - these will apply when the parent element has the class `dark`
            newUtilities[`.dark .bg-${name}`] = { backgroundColor: darkColorValue };
            newUtilities[`.dark .border-${name}`] = { borderColor: darkColorValue };
            newUtilities[`.dark .text-${name}`] = { color: darkColorValue };
            newUtilities[`.dark .hover\\:bg-${name}:hover`] = { backgroundColor: darkColorValue };
            newUtilities[`.dark .hover\\:border-${name}:hover`] = { borderColor: darkColorValue };
          }
        }
      }

      // Add the new utilities for responsive and hover variants
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}

