'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Phrase from './Phrase'
import SubTitle from './SubTitle'

function MainContent() {
  const { scrollYProgress } = useScroll({
    offset: [0, '100vh'],
  })

  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '-50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  return (
    <motion.div
      style={{ y, opacity }}
      className="w-full flex flex-col items-center justify-center"
    >
      <div
        className="p-1 flex items-center
  justify-center flex-col w-4/5"
      >
        <Phrase phrase="Dev Junior" alignSelf="start" />
        <Phrase phrase="Front-end" alignSelf="end" />
      </div>
      <SubTitle />
    </motion.div>
  )
}

export default MainContent
