import React from "react"
import Link from "next/link"
import "twin.macro"

import { ChainIcon } from "icons/ChainIcon"

export const Header = () => {
  return (
    <header tw="block w-full shadow-sm antialiased text-main bg-main">
      <nav tw="flex mx-auto">
        <Link href="/">
          <a>
            <ChainIcon />
          </a>
        </Link>
        <div tw="flex w-full md:justify-end self-center text-xl lg:text-2xl">
          <Link href="/garden">
            <a tw="mr-6 lg:mr-12">Digital Garden</a>
          </Link>
          <Link href="/bikes">
            <a tw="mr-6 lg:mr-12">Bikes</a>
          </Link>
          <Link href="/projects">
            <a tw="mr-6 lg:mr-12">Projects</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
