import React, { useContext } from "react"
import Modal from "./Modal"
import OutputCode from "./OutputCode"
import copy from "copy-to-clipboard"
import NotyfContext from "./NotyfContext"
import "notyf/notyf.min.css"

function ExportModal({ output, closeModal }) {
  const notyf = useContext(NotyfContext)
  const modalFooter = (
    <div className="flex-grow">
      <button
        className="button button--primary flex"
        onClick={() => {
          copy(output)
          notyf.success("Copied!")
        }}
      >
        Copy to clipboard
      </button>
    </div>
  )

  return (
    <div>
      <Modal
        title="Tailwind Configuration"
        footer={modalFooter}
        closeModal={closeModal}
      >
        <p className="mb-1">
          Copy and paste the code into your Tailwind configuation file
        </p>
        <p className="mb-4">
          For more information visit the{" "}
          <a
            href="https://tailwindcss.com/docs/configuration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline focus:underline"
          >
            Tailwind CSS configuation guide
          </a>
        </p>
        <OutputCode output={output} />
      </Modal>
    </div>
  )
}

export default ExportModal
