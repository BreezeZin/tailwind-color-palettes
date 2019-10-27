const { varFormat } = require("../../colors")

export function getColor(name, weight) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(varFormat(name, weight))
    .trim()
    .toUpperCase()
}

export function setColor(name, weight, hex) {
  hex = hex.trim()
  if (hex.charAt(0) !== "#") {
    hex = `#${hex}`
  }
  if (!validHexFormat(hex)) {
    throw new Error("Invalid color")
  }
  document.documentElement.style.setProperty(varFormat(name, weight), hex)
}

export function validHexFormat(value) {
  return /^#[0-9A-F]{6}$/i.test(value)
}
