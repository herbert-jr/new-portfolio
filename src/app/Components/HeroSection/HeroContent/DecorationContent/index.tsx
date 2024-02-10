'use client'

import { motion } from 'framer-motion'

function DecorationContent() {
  return (
    <div className="absolute w-full h-full inset-0 flex items-center justify-center -z-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1.8,
          type: 'spring',
          damping: 50,
          stiffness: 200,
          mass: 1.5,
        }}
        className="w-[45%] h-auto aspect-square rounded-full bg-gradient-to-b 
        from-[#fff2e1] via-[#fff4e5] to-[#fff7ed]"
      ></motion.div>
    </div>
  )
}

export default DecorationContent
