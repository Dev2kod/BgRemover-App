import React from 'react'
import {assets} from "../assets/assets"

const Steps = () => {
  return (
    <div className=''>
        <h1 className='text-center font-semibold text-2xl p-10 mt-4 bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent'>Steps to remove background <br />image in seconds</h1>

        <div className='flex items-start flex-wrap gap-4 mt-7 xl:mt-24 justify-center'>

          <div className='flex items-start justify-between gap-4 bg-white shadow-2xl p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <img src={assets.upload_icon} alt=""  className='max-w-9'/>
            <div>
              <p className='text-xl font-medium'>Upload Image</p>
              <p className='text-sm font-normal'>this is demo text, will replace it. This is a Demo</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white shadow-2xl p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <img src={assets.remove_bg_icon} alt=""  className='max-w-9'/>
            <div>
              <p className='text-xl font-medium'>Remove Background</p>
              <p className='text-sm font-normal'>this is demo text, will replace it. This is a Demo</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white shadow-2xl p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <img src={assets.download_icon} alt=""  className='max-w-9'/>
            <div>
              <p className='text-xl font-medium'>Download Image</p>
              <p className='text-sm font-normal'>this is demo text, will replace it. This is a Demo</p>
            </div>
          </div>

          <div className='p-10 my-10'></div>
        </div>
    
    </div>
  )
}

export default Steps