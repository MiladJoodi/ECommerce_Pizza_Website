"use client"

import React from 'react'
import { useDarkMode } from '../DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {

  const { darkmode, toggleDarkMode } = useDarkMode()

  return (
    <>
      <section className={`${darkmode ? 'dark bg-gray-900' : 'light bg-black'} w-full h-fit lg:px-20 px-10 py-10 flex flex-col justify-center items-center gap-6`}>
        <h1 className="text-white font-bold text-5xl">Pizzazz<span>Pies</span></h1>
        <p className="text-xl text-slate-100 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, itaque!</p>

        {/* ICONS */}
        <div id="social-icons" className="flex justify-center items-center gap-4">

          <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <FaFacebookF className="w-[25px] h-[25px]" />
          </div>

          <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <FaInstagram className="w-[25px] h-[25px]" />
          </div>

          <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <FaTwitter className="w-[25px] h-[25px]" />
          </div>

          <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <FaYoutube className="w-[25px] h-[25px]" />
          </div>
        </div>
      </section>

      {/* BUTTONS */}
      <div>
        <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:bottom-6 left-6 botton-6">
          {darkmode ? <FaMoon size={30} className="'text-black" /> : <FaSun size={30} className="'text-black" />}
        </button>
      </div>

      {/* scroll to top button */}
      <div id="icon-box" className="bg-orange-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>

    </>
  )
}

export default Footer