import React from "react"
import PaletteStrip from "./PaletteStrip"
const classNames = require("classnames")

function PaletteList({ colors, selected, onSelected }) {
  return (
    <div
      className="overflow-auto flex flex-wrap  p-2"
      style={{ maxHeight: "13.3125rem" }}
    >
      {Object.entries(colors).map(([colorName, colorData], index) => {
        return (
          <div
            key={index}
            onClick={() => {
              onSelected(colorName)
            }}
            className={classNames(
              "border-2 border-transparent mr-1 cursor-pointer active:border-blue-500 hover:border-gray-400",
              {
                hidden: selected.includes(colorName),
              }
            )}
          >
            <PaletteStrip name={colorName} data={colorData} />
          </div>
        )
      })}
    </div>
  )
}

export default PaletteList
