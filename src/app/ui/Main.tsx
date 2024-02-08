'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { PageLinks } from '../utils/data'

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

    PageLinks.forEach((link) => {
      const linkElement = document.querySelector('a[href="' + link.link + '"]')
      if (linkElement) {
        linkElement.addEventListener('click', () => {
          lenis.scrollTo(link.link)
        })
      }
    })

    requestAnimationFrame(raf)
  })
  return <main {...rest}>{children}</main>
}

export default Main
