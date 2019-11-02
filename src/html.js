import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

export default function HTML(props) {
  /*
   * Prevent inline styling for styles.css as it is very
   * large because of all the classes tailwinds need to generate
   */
  if (process.env.NODE_ENV === "production") {
    for (const component of props.headComponents) {
      if (component.type === "style") {
        const index = props.headComponents.indexOf(component)
        const link = (
          <link rel="stylesheet" href={component.props["data-href"]} />
        )
        props.headComponents.splice(index, 1, link)
      }
    }
  }

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={withPrefix("/favicon.ico")}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
