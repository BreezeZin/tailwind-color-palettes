import React from "react"
import Modal from "./Modal"
import ColorEditor from "./ColorEditor"

function ColorEditorModal({ name, data, closeModal }) {
  return (
    <div>
      <Modal title={`Edit color: ${name}`} closeModal={closeModal}>
        <div>
          {Object.entries(data).map(([weight, hex], index) => (
            <div key={index} className="mb-2">
              <ColorEditor name={name} weight={weight} defaultHex={hex} />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default ColorEditorModal
