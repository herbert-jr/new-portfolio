import { motion } from 'framer-motion'

function SubTitle() {
  return (
    <motion.p
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: [0, 0, 0, 1],
        transition: { delay: 2.1, duration: 1, ease: [0.34, 1, 0.64, 1] },
      }}
      className="w-full  md:w-2/5 mt-5 text-center text-[clamp(16px,2vw,18px)]
    text-sub-title font-medium"
    >
      Desenvolvedor Front-End e UI/UX Designer querendo transformar ideias em
      realidade.
    </motion.p>
  )
}

export default SubTitle
