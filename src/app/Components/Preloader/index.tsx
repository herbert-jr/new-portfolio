'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
}

const phraseVariants = {
  initial: { y: '110%' },
  animate: {
    y: 0,
  },
  exit: {
    y: '-100%',
  },
}

function Preloader() {
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [isLoaded])

  return (
    <motion.div
      variants={slideUp}
      animate={isLoaded ? 'initial' : 'exit'}
      className="fixed w-svw h-svh inset-0 flex items-center
  justify-center bg-copy z-40"
    >
      <div
        className="flex flex-col items-center justify-center uppercase
      text-5xl font-extrabold leading-[1.15] tracking-[-0.04em]"
      >
        <div className="w-fit h-fit overflow-hidden">
          <motion.span
            className="text-copy-light flex relative"
            variants={phraseVariants}
            initial="initial"
            animate={isLoaded ? 'animate' : 'exit'}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            Dev Junior
          </motion.span>
        </div>
        <div className="w-fit h-fit overflow-hidden">
          <motion.span
            className="text-background-burger flex relative"
            variants={phraseVariants}
            initial="initial"
            animate={isLoaded ? 'animate' : 'exit'}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            © Portfólio
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export default Preloader
