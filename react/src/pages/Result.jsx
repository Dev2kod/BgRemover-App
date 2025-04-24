import React from 'react'
import { assets } from '../assets/assets'
const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75]'>

      <div className='bg-white rounded-lg px-8 py-6 shadow-sm'> {/* image container */}

        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* Left Side */}
        <div className=''>
          <p className='mb-2 font-semibold text-shadow-md'>Original</p>
          <img src={assets.image_w_bg} alt="" className='rounded-md border'/>
        </div>

            {/* Right Side */}
        <div className='flex flex-col'>
            <p className=' font-semibold text-shadow-md mb-2'>Bg Removed</p>
            <div className='rounded-md border relative h-full bg-layer overflow-hidden'>
            <img src={assets.image_wo_bg} alt="" />
              <div className='mb-5 absolute right-0.5 bottom-0.5 transform translate-x-0.5 translate-y-0.5'>
                <div></div>
              </div>
            </div>
        </div>
        </div>
      </div>

      {/*Button div , after the image container*/}
      <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
        <button className='px-8 py-2.5 text-violet-600 text-sm border-1 border-violet-600 rounded-full hover:scale-105 transition-all duration-500  '>Try Another image</button>
        <a href="" className='px-8 py-2.5 text-white bg-gradient-to-r from-violet-800 to-violet-400 text-sm rounded-full hover:scale-105 transition-all duration-500'>Download Image</a>
      </div>

    </div>
  )
}

export default Result