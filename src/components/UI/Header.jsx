import React from 'react'
import Heading from './Heading'
import Description from './Description'

const Header = () => {
  return (
    <div className='w-full flex flex-col px-4 lg:px-0 lg:pl-4 gap-4 lg:flex-row md:justify-between md:items-start'>
      <Heading title={"Our Services"}/>
      <Description text={"Discover a wide range of opportunities through a comprehensive range of qualified services"}/>
    </div>
  )
}

export default Header