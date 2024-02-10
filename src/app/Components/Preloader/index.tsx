'use client'

import { motion } from 'framer-motion'
import PhraseAnimation from './PhraseAnimation'

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
}

interface PreloaderProps {
  isLoaded: boolean
}

function Preloader({ isLoaded }: PreloaderProps) {
  return (
    <motion.div
      variants={slideUp}
      animate={isLoaded ? 'initial' : 'exit'}
      className="fixed w-svw h-svh inset-0 flex items-center
  justify-center bg-copy cursor-wait z-40"
    >
      <div
        className="flex flex-col items-center justify-center uppercase
      text-5xl font-extrabold leading-[1.15] tracking-[-0.04em]"
      >
        <PhraseAnimation
          phrase="Dev Junior"
          color="text-copy-light"
          isLoaded={isLoaded}
        />
        <PhraseAnimation
          phrase="© Portfólio"
          color="text-background-burger"
          isLoaded={isLoaded}
        />
      </div>
    </motion.div>
  )
}

export default Preloader
