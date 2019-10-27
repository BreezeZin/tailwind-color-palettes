const { colors, colorVar, varFormat } = require("./colors")

module.exports = {
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1280px",
    },
    extend: {},
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "active"],
    borderStyle: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      // create root pseudo-class with css variables
      const colorVariables = {}
      Object.entries(colors).forEach(([name, data]) => {
        Object.entries(data).forEach(([weight, hex]) => {
          colorVariables[varFormat(name, weight)] = hex
        })
      })
      addComponents({
        ":root": colorVariables,
      })

      const variants = {
        bg: "background-color",
        text: "color",
        placeholder: "color",
        border: "border-color",
      }

      // create the 4 color utilities with css variables
      const newUtilities = {}
      Object.entries(colors).forEach(([colorName, colorData]) => {
        Object.keys(colorData).forEach(colorWeight => {
          Object.entries(variants).forEach(([utility, property]) => {
            let suffix = utility === "placeholder" ? "::placeholder" : ""
            newUtilities[`.${utility}-${colorName}-${colorWeight}${suffix}`] = {
              [property]: colorVar(colorName, colorWeight),
            }
          })
        })
      })
      addUtilities(newUtilities, ["responsive", "hover", "focus"])
    },
  ],
}
