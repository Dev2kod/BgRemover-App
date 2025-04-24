import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='text-center mb-10 pt-14 '>
      <button className='rounded-full text-sm font-semibold py-2 px-10 border-2 border-gray-600 text-gray-600 hover:scale-105 transition-all duration-500'>Our Plans</button>
      <h1 className='mt-4 text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Choose the plan that's right for you</h1>
    
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item,index)=>(
          <div className='bg-white shadow-md rounded-lg px-8 py-12 mt-10 text-gray-800 hover:scale-105 transition-all duration-700 ' key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>${item.price }</span>/ {item.credits} credits
            </p>      
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 hover:scale-95 transition-all duration-500 cursor-pointer'>Purchase</button>      
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default BuyCredit