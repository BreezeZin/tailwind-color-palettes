import React from "react"
const { colorVar } = require("../../colors")

function PaletteStrip({ name, data }) {
  return (
    <>
      {Object.keys(data).map((weight, index) => {
        return (
          <div
            key={index}
            className={`w-8 h-8 m-1`}
            style={{
              backgroundColor: colorVar(name, weight),
            }}
          ></div>
        )
      })}
    </>
  )
}

export default PaletteStrip
