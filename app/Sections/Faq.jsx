"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDarkMode } from '../DarkModeContext'
import { Accordion } from 'flowbite-react';
import Image from 'next/image'

function Faq() {

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
    <section id='faq' className={`${darkmode ? 'dark bg-black' : 'light bg-light'} w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-14`}>

      {/*LEFT  */}
      <div id='left' className='flex flex-col justify-center items-center gap-12'>
        <h1 id='left' className='text-6xl text-black font-bold text-center dark:text-white'>Frequently Asked Questions</h1>
        <div data-aos='slide-up' className='w-full'>
          {/* Flowbit Faq */}
          <Accordion className="flex flex-col justify-center items-center gap-2">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          {/* Flowbit Faq */}
        </div>
        <buttom className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer">
          CONTACT US
        </buttom>
      </div>

      {/*RIGHT  */}
      <div id='image box' className="grid lg:grid-cols-2 grid-col-1 justify-center items-center gap-4">
        <Image
          data-aos="zoom-in"
          src="/images/faq1.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-xl"
        />
        <Image
          data-aos="zoom-in"
          src="/images/faq2.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-xl"
        />
        <Image
          data-aos="zoom-in"
          src="/images/faq3.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-xl"
        />
        <Image
          data-aos="zoom-in"
          src="/images/faq4.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-xl"
        />
      </div>

    </section>
  )
}

export default Faq
