"use client"
import React, { useEffect } from 'react'
import { pizza } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useDarkMode } from '../DarkModeContext'

function BestSellers() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  }, [])

  const { darkmode, toggleDarkMode } = useDarkMode()


  return (
    <section className={`${darkmode? 'dark bg-black' : 'light bg-black'} w-full lg:px-20px px-10 lg:py-20 py-10 h-fit flex flex-col justify-center items-center gap-14`}>
      <h1 data-aos="slide-up" className='text-white text-6xl font-bold text-center'>Our Best Sellers</h1>
      <div data-aos="slide-up" className='grid lg:grid-cols-3 grid-cols-1 justify-between items-center gap-6'>
        {pizza.map((item, index) => (
          <div key={index} className='bg-white dark:bg-gray-800 p-8 flex flex-col justify-center items-center gap-4 rounded-lg'>
            <Image
              src={item.image}
              alt="product image"
              className='rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer'
            />
            <h1 className='text-black text-center text-2xl font-bold dark:text-white'>{item.title}</h1>
            <h1 className='text-orange-600 font-bold text-3xl'>{item.price}</h1>
            <p className='text-lg text-slate-800 dark:text-white text-center'>{item.para}</p>
            <buttom className='bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer'>
              ORDER NOW
            </buttom>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellers