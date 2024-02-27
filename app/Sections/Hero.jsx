"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import banner4 from '../../public/images/banner4.jpg'


const Hero = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  },[])
  return (
    <section id='hero' className='w-full lg:px-20 px-10 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center items-start gap-8' style={{backgroundImage: `url(${banner4.src})`}}>
      
    </section>
  );
}

export default Hero;