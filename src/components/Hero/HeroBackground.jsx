import { Wand } from 'lucide-react'
import React from 'react'

const HeroBackground = () => {
  return (
    <section className='w-full h-full max-h-150 flex absolute top-0 left-0 z-10'>
      <div className="left w-full md:w-1/2 h-full pt-28 pl-10 lg:pl-12 flex flex-col gap-10 justify-between pb-16">
      {/* img */}
      <img id='heroImg1' className='hidden md:block w-[clamp(190px,10vw,320px)] h-[clamp(150px,50vw,230px)]  opacity-50 md:opacity-100 -rotate-12 object-cover' src="./hero1.webp" alt="hero1" />
      {/* line svg */}
      <img className='w-3/5 md:w-2/5 opacity-50 -rotate-2' src="./orange.svg" alt="" />
      {/* magic button */}
      <div className='flex items-center -rotate-6'>
        <button className='px-6 cursor-pointer py-2 rounded-full border-2 border-[var(--orange)]'>Create Magic</button>
        <button className='rounded-full bg-[var(--purple)] text-white p-2.75 flex items-center justify-center'>
          <Wand />
        </button>
      </div>
      </div>

      <div className="right relative hidden md:flex flex-col items-end justify-between pb-22 w-1/2 h-full pt-28 pr-12 ">
      <div className="lines text-right flex flex-col items-end gap-2">
        <p className='bg-[var(--purple)] text-white rounded-full px-4 py-1.5 w-fit'>Via della Creativita,23</p>
        <p className='bg-[var(--purple)] text-white rounded-full px-4 py-1.5 w-fit'>20121 Milano</p>
      </div>
      {/* img */}
      <img id='heroImg2' className='w-[clamp(190px,10vw,300px)] h-[clamp(150px,50vw,230px)] rotate-12 object-cover' src="./hero2.webp" alt="" />
      {/* svg */}
      <img className='lg:-translate-x-4/5 md:-translate-x-2/5 md:w-4/5 lg:w-fit  -translate-y-10 absolute bottom-3' src="./purple.svg" alt="" />
      </div>
    </section>
  )
}

export default HeroBackground