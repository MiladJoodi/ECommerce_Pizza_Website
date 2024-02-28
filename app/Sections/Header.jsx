"use client"

import React, {useState} from 'react'
import { FaSearch, FaHeart, FaShoppingCart} from 'react-icons/fa'
import { IoPerson} from 'react-icons/io5'
import {Link} from 'react-scroll'
import {FaXmark, FaBars} from 'react-icons/fa6'
import { useDarkMode } from '../DarkModeContext'

function Header() {

  const {isMenuOpen, setIsMenuOpen} = useState(false)
  const { darkmode, toggleDarkMode } = useDarkMode()

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = ()=>{
    setIsMenuOpen(false);
  }

  const navItems = [
    {link:'Home', path: 'home'},
    {link:'About', path: 'about'},
    {link:'Pizzas', path: 'pizza'},
    {link:'Faq', path: 'faq'},
    {link:'Contact', path: 'contact'}
  ]


  return (
    <nav className={`${darkmode ? 'dark bg-gray-800' : 'light bg-black'} w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-6 sticky top-0 z-50`}>
      <h1 className="text-white font-bold lg:text-5xl text-3xl">Pizzazz <span className="italic text-orange-500">Pies</span></h1>

      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map(({link, path})=>(
          <Link key={path} className="uppercase text-white font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 dark:hover:text-black hover:text-white" to={path} spy={true} offset={-100} smooth={true}>
            {link}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Header