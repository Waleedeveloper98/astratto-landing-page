import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceList = () => {
  return (
    <div className=' px-3 flex flex-col items-center gap-10 md:space-y-10 md:px-6 md:gap-0 md:justify-between md:items-start md:flex-row md:flex-wrap'>
      <ServiceCard title1={"Motion"} title2={"Graphics"} desc={"Bring your ideas to life through dynamic visuals and engaging animations."} img={"./project1.webp"}/>
      <ServiceCard title1={"2D/3D"} title2={"Animation"} desc={"Turn imagination into reality with our stunning 2D/3D animations."} img={"./project2.webp"} cardClass={"bg-[var(--purple)] border-l-"}/>
      <ServiceCard title1={"Visual"} title2={"Identity"} desc={"Shape a unique brand persona through our comprehensive Visual Identity solutions."} img={"./project3.webp"}/>
      
    </div>
  )
}

export default ServiceList