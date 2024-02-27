"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import banner4 from '../../public/images/banner4.jpg'

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  }, [])

  return (
    <section id='hero' className='w-full lg:px-20 px-10 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center items-start gap-8' style={{ backgroundImage: `url(${banner4.src})` }}>
      <h1 data-aos="zoom-in" className='text-6xl text-white font-bold'>Life is a combination <br /> of Pizza & Magic</h1>
      <p data-aos="zoom-in" className='text-xl text-white font-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus sed ipsam labore. Aspernatur nam id, debitis error velit itaque rem.</p>
      <button data-aos = "flip-up" className='bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black'>ORDER NOW</button>
    </section>
  );
}

export default Hero;