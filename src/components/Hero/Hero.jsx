import React from 'react'
import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div className='w-full relative h-screen'>
      <HeroBackground />
      <HeroContent />
    </div>
  )
}

export default Hero