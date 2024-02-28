"use client"

import React, { useState } from 'react'
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { Link } from 'react-scroll'
import { FaXmark } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'
import { useDarkMode } from '../DarkModeContext'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { darkmode, toggleDarkMode } = useDarkMode()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Pizzas', path: 'pizza' },
    { link: 'Faq', path: 'faq' },
    { link: 'Contact', path: 'contact' }
  ]


  return (
    <nav className={`${darkmode ? 'dark bg-gray-800' : 'light bg-black'} w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-6 sticky top-0 z-50`}>
      <h1 className="text-white font-bold lg:text-5xl text-3xl">Pizzazz <span className="italic text-orange-500">Pies</span></h1>

      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map(({ link, path }) => (
          <Link key={path} className="uppercase text-white font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 dark:hover:text-black hover:text-white" to={path} spy={true} offset={-100} smooth={true}>
            {link}
          </Link>
        ))}
      </ul>

      <div id='header-icons' className="lg:flex hidden justify-center items-center gap-8 text-white">
        <FaSearch className='w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pinter' />
        <IoPerson className='w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pinter' />
        <FaHeart className='w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pinter' />
        <div className='relative'>
          <FaShoppingCart className='w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer' />
          <div className='bg-orange-500 dark:bg-white dark:text-black px-3 py-1 text-white rounded-full absolute -top-[28px] text-sm font-bold'>
            2
          </div>
        </div>
      </div>

      {/*MOBILE MENU */}
      <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className="text-white text-3xl cursor-pointer" /> : <FaBars className="text-white text-3xl cursor-pointer" />}
        </div>
      </div>

      {/* MENU */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({link, path})=> (
              <Link key={path} className="text-white uppercase font-semobold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-white w-full text-center" to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
            ))}
          </ul>
      </div>

    </nav>
  )
}

export default Header