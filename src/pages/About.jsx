import React from 'react'
import { assets } from '../assets/assets'

export const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500' >
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col gap-12 md:flex-row'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to doctorSched, your trusted partner in managing your healthcare needs 
          </p>
          <p>HealthSched is committed to excellence in healthcare technology</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at HealthSched is to create a seamless healthcare experience for every person.</p>
        </div>
      </div>
      <div className='text-xl my-4 '>
        <p>WHY<span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Effiency:</b>
            <p>Streamlined appointment scheduled thats fits into your busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convience:</b>
        <p>Streamlined appointment scheduled thats fits into your busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Streamlined appointment scheduled thats fits into your busy lifestyle</p>
        </div>
      </div>
    </div>
  )
}
