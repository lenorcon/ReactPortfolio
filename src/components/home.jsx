import React from 'react';
import heroimage from '../assets/profile1.png';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black'>
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]' >
            <img src={heroimage} alt="heroimage" className='rounded-full w-[200px] h-[200px] object-cover ml-10' />
        </div>
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
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
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Lenor Con and I have experience in web development
            </p>
            <div>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    Download CV
                </a>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home;
