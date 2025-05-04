import React, { useContext, useEffect } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../context/AppContext.jsx'

const Navbar = () => {
  const { openSignIn } = useClerk();
  const {isSignedIn, user} = useUser();
  const {credit,loadCreditData} = useContext(AppContext)
  console.log(user)
  useEffect(()=>{
    if(isSignedIn){
      loadCreditData();
      console.log(credit)
    }
  },[isSignedIn])

  return (
    <div className='flex items-center justify-between py-3 mx-4 lg:mx-44'>
        <Link to={'/'}><img src={assets.logo} alt="" className='w-32 sm:w-44 hover:cursor-pointer' /></Link>
        {
          isSignedIn?
          <div className='flex items-center gap-6'>
            <button className='flex items-center font-semibold gap-3 px-4 py-2 bg-blue-100 rounded-full transition-all duration-500 hover:scale-105 transition-all duration-500 cursor-pointer'>
              <img className='w-5' src={assets.credit_icon} alt="" />
              <p className='text-sm'>Credits: {credit}</p>
            </button>
            <div>Hi {user.fullName}!</div>
            <UserButton/>
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