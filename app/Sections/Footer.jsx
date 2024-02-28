import React from 'react'
import { useDarkMode } from '../DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowUp, FaMoon, DaSun, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {

  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <>
      <section className="">
        <h1>Pizzazz <span>Pies</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, itaque!</p>

        <div id="icon-box" className="">
          <FaFacebook className="w-[25px] h-[25px]" />
        </div>
      </section>
    </>
  )
}

export default Footer