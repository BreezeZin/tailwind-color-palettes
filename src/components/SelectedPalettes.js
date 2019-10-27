import React from "react"
import SelectedPalette from "./SelectedPalette"

function SelectedPalettes({ colors, selected, onSelected, colorEdit }) {
  if (selected.length < 1) {
    return <div className="p-4 text-gray-500">No colors selected</div>
  }

  return (
    <div className="flex flex-wrap pb-4 pr-4">
      {selected.map((colorName, index) => (
        <SelectedPalette
          key={index}
          name={colorName}
          data={colors[colorName]}
          onSelected={onSelected}
          colorEdit={colorEdit}
        />
      ))}
    </div>
  )
}

export default SelectedPalettes
