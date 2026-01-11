import { Sparkles } from 'lucide-react'
import React from 'react'

const HeroContent = () => {
  return (
    <section className='w-full h-screen max-h-150 relative z-20 flex items-center pb-30 md:pb-10 justify-center text-center'>
      <div className="content flex flex-col gap-3">
        <p className='font-medium text-zinc-400'>Igniting the Spark of Inspiration</p>
        <div className="big-heading text-[clamp(2rem,12vw,5rem)]  font-medium" style={{
          lineHeight:1.2
        }}>
          <h1>Unleash Your</h1>
          <h1 className='flex items-center justify-center gap-2'>Brand <span className='size-9 rounded-full bg-orange-500 flex items-center justify-center'>
            <Sparkles size={20} className='rotate-45' strokeWidth={0} fill='white'/></span> with Our</h1>
          <div className='flex items-center justify-center gap-3'>
            <div className="highlight relative">
              <div className="bg absolute inset-0 bg-[var(--yellow)] rounded-lg rotate-3"></div>
              <h1 className='relative px-3 pb-2 text-[var(--purple)]'>Magico</h1>
            </div>
            <h1>Design</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroContent