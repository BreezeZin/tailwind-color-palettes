import React, { Component } from "react"
import Editor from "./Editor"

class Playground extends Component {
  state = {
    html: require("./EditorDefault.html"),
  }

  handleEditorChange = html => {
    this.setState({
      html,
    })
  }

  render() {
    return (
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="border mt-8 lg:w-1/2 lg:mr-4 lg:mt-0">
          <Editor html={this.state.html} onChange={this.handleEditorChange} />
        </div>
        <div className="border break-words p-2 overflow-auto bg-white lg:w-1/2 lg:ml-4">
          <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
        </div>
      </div>
    )
  }
}

export default Playground
