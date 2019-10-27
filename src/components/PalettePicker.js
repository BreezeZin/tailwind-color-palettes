import React, { Component } from "react"
import PaletteList from "./PaletteList"
import SelectedPalettes from "./SelectedPalettes"
import generateOutput from "../util/export"
import ExportModal from "./ExportModal"
import ColorEditorModal from "./ColorEditorModal"

const { colors } = require("../../colors")

class PalettePicker extends Component {
  state = {
    colors: colors,
    selected: [],
    exportModalOpen: false,
    configExport: "",
    colorEditorModalOpen: false,
    colorEditorName: "",
    colorEditorData: {},
  }

  handlePaletteSelected = colorName => {
    this.setState({
      selected: this.state.selected.includes(colorName)
        ? this.state.selected.filter(name => name !== colorName)
        : [colorName, ...this.state.selected],
    })
  }

  handleExport = () => {
    this.setState({
      configExport: generateOutput(this.state.selected, this.state.colors),
      exportModalOpen: true,
    })
  }

  handleColorEdit = (name, data) => {
    this.setState({
      colorEditorModalOpen: true,
      colorEditorName: name,
      colorEditorData: data,
    })
  }

  handleExportCloseModal = () => {
    this.setState({ exportModalOpen: false })
  }

  handleColorEditorCloseModal = () => {
    this.setState({ colorEditorModalOpen: false })
  }

  render() {
    return (
      <div>
        <div className="bg-white border border-gray-300">
          <div>
            <PaletteList
              colors={this.state.colors}
              selected={this.state.selected}
              onSelected={this.handlePaletteSelected}
            />
          </div>
          <div className="border-t">
            <SelectedPalettes
              colors={this.state.colors}
              selected={this.state.selected}
              onSelected={this.handlePaletteSelected}
              colorEdit={this.handleColorEdit}
            />
          </div>
        </div>
        {this.state.selected.length > 0 && (
          <button
            className="flex items-center bg-white border-r border-b border-l text-gray-800 hover:bg-gray-200 hover:text-black"
            onClick={this.handleExport}
          >
            <span className="px-4 py-2 flex items-center">
              Export colors into Tailwind
              <span
                className="ml-2 inline-block py-1 px-2 text-xs font-bold leading-none text-white rounded-full"
                style={{
                  backgroundColor: "#007bff",
                  paddingLeft: "0.6em",
                  paddingRight: "0.6em",
                }}
              >
                {this.state.selected.length}
              </span>
            </span>

            <span className="px-4 py-2 border-l">
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z"></path>
              </svg>
            </span>
          </button>
        )}
        {this.state.exportModalOpen && (
          <ExportModal
            output={this.state.configExport}
            closeModal={this.handleExportCloseModal}
          />
        )}
        {this.state.colorEditorModalOpen && (
          <ColorEditorModal
            name={this.state.colorEditorName}
            data={this.state.colorEditorData}
            closeModal={this.handleColorEditorCloseModal}
          />
        )}
      </div>
    )
  }
}

export default PalettePicker
