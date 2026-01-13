import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import AboutSection from './components/About/AboutSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className='w-full flex items-center justify-center'>
      <div className="content w-full max-w-7xl relative">
        <Navbar />
        <Hero />
        <div className='same-bg-container px-3 pb-6 md:px-10'>
          <div className="inner border rounded-2xl border-zinc-400 shadow bg-white">
            <Services />
            <AboutSection />
          </div>
        </div>
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  )
}

export default App