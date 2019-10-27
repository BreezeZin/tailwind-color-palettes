import React from "react"
const classNames = require("classnames")
const { colorVar } = require("../../colors")

function SelectedPaletteStrip({ data, name }) {
  return Object.keys(data).map((weight, index) => {
    return (
      <div
        key={index}
        className={classNames("w-8 h-8", {
          "rounded-tl-lg": weight === "100",
          "rounded-tr-lg": weight === "900",
        })}
        style={{
          backgroundColor: colorVar(name, weight),
        }}
      ></div>
    )
  })
}

export default SelectedPaletteStrip
