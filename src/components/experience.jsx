import React from 'react'

const experience = () => {
  return (
      <div className='border  border-gray-700 rounded-lg bg-white h-[600px] max-w-[1200px] mx-auto text-gray-700 items-center'>
          <h1 className=' text-4xl font-bold primary-color item-center'> Work Experience</h1> 
          <div className=' ml-10 mt-10 flex grid-cols-2 gap-4 h-[200px] max-w-[1200px]'>
            <div className='bg-red rounded-lg shadow-sm h-[200px] max-w-[400px] items-center'>
                <h1 className='primary-color text-center'>web dev</h1>
                <p>fjsbdbdfkbkjsbjfggjdkjbfjkbgjkdbjfku</p>
            </div>
            <div className='bg-red rounded-lg shadow-sm h-[200px] max-w-[400px] items-center'>
                <h1 className='primary-color text-center'>web dev</h1>
                <p>dahbhjdbfjhasjhdfjjasvdjvfjhsvajhdvf</p>
            </div>
            <div className='bg-red rounded-lg shadow-sm h-[200px] max-w-[1200px] items-center'>
                <h1 className='primary-color text-center'>web dev</h1>
                <p>cjbabshbdahjsbdjvasgvdgav</p>
            </div>
          </div>
      </div>
  )
}

export default experience