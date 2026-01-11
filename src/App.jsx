import React from 'react'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <main className='w-full flex items-center justify-center'>
      <div className="content w-full max-w-7xl">
        <Navbar />
      </div>
    </main>
  )
}

export default App