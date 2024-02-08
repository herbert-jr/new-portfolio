'use client'

import Lenis from '@studio-freight/lenis'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

interface LinksProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link: string
  title: string
}

function Links({ link, title, ...rest }: LinksProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: unknown) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    linkRef.current?.addEventListener('click', () => {
      lenis.scrollTo(link)
    })
    requestAnimationFrame(raf)
  }, [link])

  return (
    <Link href={link} passHref legacyBehavior>
      <a ref={linkRef} {...rest}>
        {title}
      </a>
    </Link>
  )
}

export default Links
