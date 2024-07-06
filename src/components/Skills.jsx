import React from 'react'
import htmls from '../assets/htmls.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import bootstrap from '../assets/bootstrap.png'


const Skills = () => {
  return (
    <div className='re-size8 '>
      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4 col-span-2 sm:col-span-1'>
        My <br />Tech <b> Stack</b>
      </h2>
      <div className='re-size10'>
        <img src={htmls} alt="HTML" />
        <p className='mt-2'>HTML</p>
      </div>
      <div className='re-size9'>
        <img src={css} alt="CSS" />
        <p className='mt-2'>CSS</p>
      </div>
      <div className='re-size9'>
        <img src={bootstrap} alt="bootstrap" />
        <p className='mt-2'>BOOTSTRAP</p>
      </div>
      <div className='re-size9'>
        <img src={react} alt="React" />
        <p className='mt-2'>REACT</p>
      </div>
      <div className='re-size9'>
        <img src={tailwind} alt="Tailwind" />
        <p className='mt-2'>TAILWIND</p>
      </div>
      <div className='re-size9'>
        <img src={javascript} alt="JavaScript" />
        <p className='mt-2'>JAVASCRIPT</p>
      </div>
    </div>
  )
}

export default Skills
