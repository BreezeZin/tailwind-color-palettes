import React, { Component } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"

class OutputCode extends Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  componentDidUpdate() {
    Prism.highlightAll()
  }

  render() {
    return (
      <div className="text-sm">
        <div>
          <pre>
            <code className="language-javascript">
              {`// tailwind.config.js \n${this.props.output}`}
            </code>
          </pre>
        </div>
      </div>
    )
  }
}

export default OutputCode
