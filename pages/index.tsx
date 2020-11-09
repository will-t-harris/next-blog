import { useState } from "react"
import Head from "next/head"
import "twin.macro"
import Tippy from "@tippyjs/react"
import CopyToClipboard from "react-copy-to-clipboard"

export default function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const onCopy = () => {
    setIsCopied(true)
  }
  return (
    <main tw="bg-gray-200">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 tw="mb-8 lg:mb-8 mx-auto lg:mx-0 text-4xl font-bold">Hi, I'm Will</h2>
      <p tw="mb-8 lg:mb-4 px-8 lg:mx-0 lg:px-0 text-3xl font-medium">
        I'm a software developer, content creator, and bikepacker from San
        Francisco.{" "}
      </p>
      <p tw="lg:mb-4 px-8 lg:mx-0 lg:px-0 text-3xl font-medium">
        I'm currently focused on{" "}
        <a tw="text-pink-600 hover:underline" href="https://reactjs.org/">
          React
        </a>
        ,{" "}
        <a tw="text-pink-600 hover:underline" href="https://www.gatsbyjs.org/">
          Gatsby
        </a>
        , and the{" "}
        <a tw="text-pink-600 hover:underline" href="https://jamstack.org/">
          Jamstack
        </a>
        .
      </p>
      <Tippy
        content={isCopied ? "Email copied" : "Click to copy"}
        theme="material"
        hideOnClick={false}
      >
        <p tw="px-8 lg:px-0 text-3xl font-medium">
          Want to get in touch? Email me:{" "}
          <CopyToClipboard onCopy={onCopy} text="will@willharris.dev">
            <span tw="text-pink-600 font-medium cursor-pointer">
              will@willharris.dev
            </span>
          </CopyToClipboard>
        </p>
      </Tippy>
    </main>
  )
}
