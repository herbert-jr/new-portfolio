import { motion } from 'framer-motion'

interface Props {
  phrase: string
  alignSelf: 'start' | 'end'
}

function Phrase({ phrase, alignSelf }: Props) {
  const splitPhrase = phrase.split('')
  return (
    <div
      className="text-[clamp(10vw,10.8vw,150px)] flex items-center
  justify-center leading-[90%] font-extrabold uppercase overflow-hidden"
      style={{ alignSelf }}
    >
      {splitPhrase.map((letter, index) => (
        <motion.span
          className="relative inline-block"
          key={`letter_hero_${letter}_${index}`}
          initial={{ y: '100%' }}
          animate={{
            y: 0,
            transition: {
              delay: 1.8 + index * 0.05,
              duration: 1,
              ease: [0.34, 1, 0.64, 1],
            },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}

export default Phrase
