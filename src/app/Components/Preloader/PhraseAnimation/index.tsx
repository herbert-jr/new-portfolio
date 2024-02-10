import { motion } from 'framer-motion'

const phraseVariants = {
  initial: { y: '110%' },
  animate: {
    y: 0,
  },
  exit: {
    y: '-100%',
  },
}

interface PhraseAnimationProps {
  phrase: string
  color: 'text-copy-light' | 'text-background-burger'
  isLoaded: boolean
}

function PhraseAnimation({ phrase, color, isLoaded }: PhraseAnimationProps) {
  return (
    <div className="w-fit h-fit overflow-hidden">
      <motion.span
        className={`${color} flex relative`}
        variants={phraseVariants}
        initial="initial"
        animate={isLoaded ? 'animate' : 'exit'}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        {phrase}
      </motion.span>
    </div>
  )
}

export default PhraseAnimation
