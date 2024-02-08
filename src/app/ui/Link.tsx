'use client'

import Link from 'next/link'

interface LinksProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

function Links({ href, children, ...rest }: LinksProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default Links
