import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const { openSignIn } = useClerk();
  const {isSignedIn, user} = useUser();

  return (
    <div className='flex items-center justify-between py-3 mx-4 lg:mx-44'>
        <Link to={'/'}><img src={assets.logo} alt="" className='w-32 sm:w-44 hover:cursor-pointer' /></Link>
        {
          isSignedIn?
          <div className='flex items-center gap-6'>
            <UserButton/>
            <div className=' text-white gap-4 px-4 py-2 bg-zinc-800 rounded-full hover:'>{user.fullName}</div>
          </div>
          :        
          <button onClick={()=>openSignIn({})} className='flex items-center gap-4 px-4 py-2 bg-zinc-800 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer '>
          <div className='text-amber-50'>Get Started  </div> <img className='ml-3 mt-1 w-3 h-5' src={assets.arrow_icon} alt="" />
          </button>
  
        }
    </div>
  )
}

export default Navbar