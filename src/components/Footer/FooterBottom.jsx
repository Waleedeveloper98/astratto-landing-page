import { Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const FooterBottom = () => {
  return (
    <div className='text-zinc-500 flex flex-col gap-6 px-4 border-t border-zinc-400 py-6 w-[95%] mx-auto md:flex-row md:justify-between md:items-center'>
        <p className='text-sm'>Via della Creativita, 23, 20121 Milano</p>
        <div className="icons flex  items-center gap-4 cursor-pointer">
        <Twitter />
        <Linkedin />
        <Instagram />
        </div>
        <div className="links flex justify-between text-sm">
            <a href="#">Privacy & Cookie Policy</a>
            <p>Astratto 2023</p>
        </div>
    </div>
  )
}

export default FooterBottom