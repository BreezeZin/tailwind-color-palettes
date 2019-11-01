import React, { Component } from "react"

class Modal extends Component {
  componentDidMount() {
    document.querySelector("body").style.overflow = "hidden"
  }

  componentWillUnmount() {
    document.querySelector("body").style.overflow = "auto"
  }

  render() {
    const { children, title, footer, closeModal } = this.props

    return (
      <div className="flex justify-center items-center fixed inset-0 z-10">
        <div
          className="bg-black fixed opacity-50 w-full h-full inset-0"
          onClick={closeModal}
        ></div>
        <div className="border bg-white relative z-20 flex flex-col modal">
          <div className="border-b flex justify-between flex-shrink-0">
            <h2 className="px-4 py-3 text-2xl">{title}</h2>
            <button
              className="w-12 flex justify-center items-center text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>
          </div>
          <div className="px-4 py-3 overflow-auto">{children}</div>
          <div className="px-4 py-3 border-t flex justify-end flex-shrink-0">
            {footer}
            <button className="ml-2 button button--light" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
