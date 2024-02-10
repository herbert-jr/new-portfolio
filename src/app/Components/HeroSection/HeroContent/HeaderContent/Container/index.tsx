'use client'

import React from 'react'

import { MotionProps, motion, useScroll, useTransform } from 'framer-motion'

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

function Container({ children, ...rest }: ContainerProps) {
  const { scrollYProgress } = useScroll({
    offset: [0, '100vh'],
  })

  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '-100%'])
  return (
    <motion.header
      initial={{ y: '-100%', opacity: 0 }}
      animate={{
        y: '0%',
        opacity: [0, 0, 0, 1],
        transition: { delay: 2.1, duration: 1, ease: [0.34, 1, 0.64, 1] },
      }}
      style={{ y }}
      {...(rest as MotionProps)}
    >
      {children}
    </motion.header>
  )
}

export default Container
