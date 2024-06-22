import React from 'react'
import htmls from '../assets/htmls.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'


const Skills = () => {
  return (
    <div className=' border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My <br />Tech <b> Stack</b>
        </h2>
        <div className=' transform transition-transform duration-300 hover:scale-105 flex flex-col items-center m-4 sm:my-0 w-[30px] md:w-[70px]'>
            <img src={htmls} alt="" />
            <p className='mt-2'>HTML</p>
        </div>
        <div className=' transform transition-trasnsform duration-300 hover:scale-105 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt="" />
            <p className='mt-2'>CSS</p>
        </div>
        <div className='transform transition-transform duration-300 hover:scale-105 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="" />
            <p className='mt-2'>REACT</p>
        </div>
        <div className=' transform transition-transform duration-300 hover:scale-105 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt="" />
            <p className='mt-2'>TAILWIND</p>
        </div>
        <div className='transform transiton-transform duration-300 hover:scale-105 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt="" />
            <p className='mt-2'>JAVASCRIPT</p>
        </div>

    </div>
  )
}

export default Skills