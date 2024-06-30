import React from 'react';
import heroimage from '../assets/profile1.png';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className='re-size'>
      <div className='col-span-1 my-auto mx-auto w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px]'>
        <img src={heroimage} alt="heroimage" className='imagesize' />
      </div>
      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I'm a
          </span> <br />
          <TypeAnimation
            sequence={[
              "frontend Dev",
              1000,
              "web designer",
              1000,
              "Tech Support",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='text-white text-sm sm:text-lg my-6 lg:text-xl'>
          My name is Lenor Con and I have experience in web development
        </p>
        <div className='flex flex-wrap gap-4'>
          <a href="/" className='re-size5'>
            Download CV
          </a>
          <a href="/" className='re-size4'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
