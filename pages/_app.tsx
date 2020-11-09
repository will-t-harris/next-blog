import React from "react"
import type { AppProps } from "next/app"
import "tailwindcss/dist/base.min.css"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/material.css"

import { Header } from "components/Header/Header"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
