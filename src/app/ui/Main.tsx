'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

function Main({ children, ...rest }: MainProps) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: unknown) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return <main {...rest}>{children}</main>
}

export default Main
