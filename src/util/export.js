import { getColor } from "./colors"
const beautifyJs = require("js-beautify")

function getCurrentColorData(colorName, colorData) {
  const currentColor = {}
  Object.keys(colorData).forEach(weight => {
    currentColor[weight] = getColor(colorName, weight)
  })

  return currentColor
}

function exportForTailwindConfig(selected, allColors) {
  const colorOutput = {}
  selected.forEach(colorName => {
    colorOutput[colorName] = getCurrentColorData(
      colorName,
      allColors[colorName]
    )
  })

  // eslint-disable-next-line
  const removeQuotesOnColorWeights = /\"(\d+)\":/g

  let output = `
    module.exports = {
      theme: {
        extend: {
          colors: ${JSON.stringify(colorOutput, null, 2).replace(
            removeQuotesOnColorWeights,
            "$1:"
          )}
        }
      }
    }`

  return beautifyJs(output, {
    indent_size: 2,
  })
}

export default exportForTailwindConfig
