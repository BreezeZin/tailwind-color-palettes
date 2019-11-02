import React, { Component } from "react"
import "emmet-core"

const loadjs = require("loadjs")

class Editor extends Component {
  componentDidMount() {
    /*
     * Ace Editor
     *
     * Gatsby has problems with the "ace-builds" npm package for the editor
     * so using the CDN version instead.
     *
     * To enable the emmet functionality the "emmet-core" package needs to
     * be included.
     */
    loadjs(
      [
        "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.6/ace.js",
        "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.6/ext-emmet.js",
        "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.6/ext-language_tools.js",
      ],
      {
        success: this.setupEditor,
        async: false,
      }
    )
  }

  setupEditor = () => {
    const editor = window.ace.edit("editor", {
      mode: "ace/mode/html",
      theme: "ace/theme/chrome",
      wrap: true,
      enableEmmet: true,
      enableBasicAutocompletion: true,
      fontSize: 14,
      tabSize: 2,
      showPrintMargin: false,
      maxLines: "Infinity",
    })
    editor.setValue(this.props.html, -1)
    editor.on("change", () => {
      this.props.onChange(editor.getValue())
    })
    this.removeUnwantedErrorMessages(editor.getSession())
  }

  removeUnwantedErrorMessages = session => {
    session.on("changeAnnotation", () => {
      const filteredAnnotations = session
        .getAnnotations()
        .filter(annotation => {
          const messages = [
            // error for missing doctype
            "Start tag seen without seeing a doctype first",
            // error for ampersands within URLs
            "Named entity expected",
          ]
          return messages.every(message => !annotation.text.includes(message))
        })

      if (session.getAnnotations().length !== filteredAnnotations.length) {
        session.setAnnotations(filteredAnnotations)
      }
    })
  }

  render() {
    return (
      <pre
        id="editor"
        style={{ height: "100%", width: "100%", minHeight: "25rem" }}
      ></pre>
    )
  }
}

export default Editor
