import React from "react"
import "tailwindcss/dist/base.min.css"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/material.css"

interface Props {
  Component: React.ElementType
  pageProps: React.ReactPropTypes
}

const App = ({ Component, pageProps }: Props) => <Component {...pageProps} />

export default App
