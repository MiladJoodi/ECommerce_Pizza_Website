"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDarkMode } from '../DarkModeContext'

function Faq() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <section id='faq' className={`${darkMode ? 'dark bg-black' : 'light bg-light'} w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-14`}>
      
      {/*LEFT  */}
      <div id='left' className='flex flex-col justify-center items-center gap-12'>
      <h1 id='left' className='text-6xl text-black font-bold text-center dark:text-white'>Frequently Asked Questions</h1>
      <div data-aos='slide-up' className='w-full'>
        
      </div>
      </div>

      {/*RIGHT  */}
      <div>
        <div id='image box'></div>
      </div>

    </section>
  )
}

export default Faq
