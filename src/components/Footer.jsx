import React from 'react'
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='overflow-hidden mt-24  bg-white py-24 sm:py-32 relative'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='flex justify-between items-center border-b-2 border-[262633] '>
          <h1 className='font-bold text-3xl  uppercase'>Nutrify</h1>
          <div className='flex justify-between bg-[292945] py-4 px-8 w-[25%] rounded-full'>
            <input className='bg-transparent placeholder-' placeholder='Email Address' type="email" />
            <FaArrowRight className='w-10 h-10  rounded-full p-2' />
          </div>
        </div>
        <div className='flex justify-between  mt-8'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-3xl  mb-8'>Get a jump start on your journey</h1>
            <div className='flex justify-between  p-2  items-center'>
              <h1>Ready to explore?</h1>
              <button className='bg-gradient-to-r from-[a881ff] hover:tracking-widest transition-all duration-500 to-[5969Fe] active:tracking-wide rounded-full py-3 px-5 font-[600] tracking-wide text-'>Get Started</button>
            </div>
            <div className='flex justify-between  p-2 '>
              <h1>Terms & Conditions</h1>
              <h2>Privacy Policy</h2>
            </div>
          </div>
          <div className='flex justify-evenly w-[40%]'>
            <div>
              <h1 className='uppercase font-bold'>About</h1>
              <ul className='mt-4 space-y-2'>
                <li className='text-sm tracking-wide'>
                  Our Story
                </li>
                <li className='text-sm tracking-wide'>
                  Benefits
                </li>
                <li className='text-sm tracking-wide'>
                  Team
                </li>
                <li className='text-sm tracking-wide'>
                  Careers
                </li>
              </ul>
            </div>
            <div>
              <h1 className='uppercase font-bold'>App</h1>
              <ul className='mt-4 space-y-2'>
                <li className='text-sm tracking-wide'>
                  Free features
                </li>
                <li className='text-sm tracking-wide'>
                  Top Rated
                </li>
                <li className='text-sm tracking-wide'>
                  Platforms
                </li>
                <li className='text-sm tracking-wide'>
                  Genres
                </li>
              </ul>
            </div>
            <div>
              <h1 className='uppercase font-bold'>Help</h1>
              <ul className='mt-4 space-y-2'>
                <li className='text-sm tracking-wide'>
                  FAQs
                </li>
                <li className='text-sm tracking-wide'>
                  Contact us
                </li>
              </ul>
            </div>
      <span className='text- absolute bottom-6 font-bold left-[50%] text-[20px] translate-x-[-50%] '>Copyright &copy; 2023. All Rights Reserved.</span>
 
          </div>
        </div>
      </div>
      <span className='absolute bottom-0 h-2 bg-[#308a7b] w-[100vw]'></span>
    </div>
  )
}
