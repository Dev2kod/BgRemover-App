import React from 'react'
import {assets} from '../assets/assets'
const Upload = () => {
  return (
    <div className='m-20'>
        <h1 className='text-center text-2xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>See The Magic, Try Now !</h1>
        <div className='text-center m-24'>
                        <input type="file" name='' id='upload2' hidden/>
                        <label htmlFor="upload1" className='inline-flex justify-center   gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r  from-violet-600 to-fuchsia-500 transition-all duration-700 hover:scale-105 transition-all duration-700'>
                            <img width={20} src={assets.upload_btn_icon} />
                            <p className='text-white text-sm'>Upload your image</p>
                        </label>
                    </div>
    </div>
  )
}

export default Upload