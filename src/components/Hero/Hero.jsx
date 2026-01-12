import React from 'react'
import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div className='w-full relative h-fit max-h-150 md:max-h-220 lg:max-h-150'>
      <HeroBackground />
      <HeroContent />
    </div>
  )
}

export default Hero