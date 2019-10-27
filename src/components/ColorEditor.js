import React, { Component } from "react"
import Pickr from "@simonwep/pickr"
import "@simonwep/pickr/dist/themes/classic.min.css"
import { getColor, setColor, validHexFormat } from "../util/colors"
const classNames = require("classnames")
const { colorVar } = require("../../colors")

class ColorEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickr: null,
      hex: getColor(props.name, props.weight),
    }
  }

  componentDidMount() {
    const pickr = this.createPickrInstance(this.props.weight, this.state.hex)
    pickr
      .on("save", (color, instance) => {
        let newColor = instance
          .getColor()
          .toHEXA()
          .toString()
          .trim()
        setColor(this.props.name, this.props.weight, newColor)
        this.setState({ hex: newColor })
        instance.hide()
      })
      .on("cancel", instance => {
        instance.hide()
      })

    this.setState({
      pickr,
    })
  }

  createPickrInstance = (weight, currentColor) => {
    return Pickr.create({
      el: `#color-${weight}`,
      container: "#pickr-container",
      theme: "classic",
      useAsButton: true,
      default: currentColor,
      components: {
        palette: true,
        preview: true,
        opacity: false,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: false,
          cmyk: false,
          input: true,
          cancel: true,
          clear: false,
          save: true,
        },
      },
      strings: {
        save: "Save",
        cancel: "Close",
      },
    })
  }

  handleHexCodeChange = hex => {
    if (hex.length === 6 && hex.charAt(0) !== "#") {
      hex = `#${hex}`
    }
    if (validHexFormat(hex)) {
      setColor(this.props.name, this.props.weight, hex)
      this.state.pickr.setColor(hex)
    }
    this.setState({ hex })
  }

  render() {
    return (
      <div className="flex">
        <div
          id={`color-${this.props.weight}`}
          className="w-10 h-10 mr-1"
          style={{
            backgroundColor: colorVar(this.props.name, this.props.weight),
          }}
        ></div>
        <input
          className="form-input uppercase"
          type="text"
          value={this.state.hex}
          onChange={event => {
            this.handleHexCodeChange(event.target.value)
          }}
        />
        <button
          className="button button--light ml-1"
          onClick={() => {
            this.state.pickr.show()
          }}
        >
          <svg
            className="w-4 h-4 fill-current text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" />
          </svg>
        </button>
        <button
          className={classNames("button ml-1", {
            "button--light": this.state.hex === this.props.defaultHex,
            "button--primary": this.state.hex !== this.props.defaultHex,
          })}
          onClick={() => {
            this.handleHexCodeChange(this.props.defaultHex)
          }}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path>
          </svg>
        </button>
        <div id="pickr-container"></div>
      </div>
    )
  }
}

export default ColorEditor
