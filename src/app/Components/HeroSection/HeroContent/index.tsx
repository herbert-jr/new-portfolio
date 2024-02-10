'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Preloader from '../../Preloader'
import DecorationContent from './DecorationContent'
import HeaderContent from './HeaderContent'
import MainContent from './MainContent'

function HeroContent() {
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [isLoaded])
  return (
    <div
      className="h-svh w-screen flex items-center justify-center sticky
  top-0"
    >
      <Preloader isLoaded={isLoaded} />
      <AnimatePresence mode="wait">
        !isLoaded && (
        <HeaderContent />
        <DecorationContent />
        <MainContent />)
      </AnimatePresence>
    </div>
  )
}

export default HeroContent
