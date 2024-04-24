import React from 'react'
import logo from '../assets/logo2.png'
import arrow1 from '../assets/arrow1.svg'
import arrow2 from '../assets/arrow2.svg'
import people from '../assets/people.png'

export const Posting = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-[142px] border-b border-b-[#525252] flex items-center px-[50px] gap-[20px]'>
        <img className='w-[82px] h-[82px]' src={logo} alt='logo'></img>
        <p className='text-[26px] text-white/80 font-semibold'>Become a Best Team</p>
      </div>
      <div className='flex flex-col {min-h-screen-140} justify-between'>
        <div className='flex flex-col gap-[20px] py-[50px] px-[50px]'>
          <p className='w-full text-center text-[#E881AC] text-[40px] font-bold'>Launching Soon</p>
          <div className='flex flex-col'>
            <p className='w-full text-center text-[#B8B8B8] text-[24px] font-bold'>Get ready to follow all your favorite high school sports matches here!</p>
            <p className='w-full text-center text-[#B8B8B8] text-[24px] font-bold'>Stay tuned for live updates, match results, and more starting this August.</p>
          </div>
          <div className='flex flex-row justify-center'>
            <p className='text-center text-[#6BA6FF] text-[20px] font-bold'>40+ Men’s </p>&nbsp;
            <p className='text-center text-[#B8B8B8] text-[20px] font-bold'>teams and</p>&nbsp;
            <p className='text-center text-[#E881AC] text-[20px] font-bold'>70+ Women’s</p>&nbsp;
            <p className='text-center text-[#B8B8B8] text-[20px] font-bold'>teams are here !</p>
          </div>
          <div className='flex flex-row justify-center gap-[120px] items-end'>
            <img className='w-[100px] h-[100px] ' src={arrow1} alt='arrow1'></img>
            <div className='w-[212px] h-[62px] flex hover:cursor-pointer bg-white rounded-[40px] items-center justify-center'>
              <p className=' text-black font-bold text-[20px]'>Get Started</p>
            </div>
            <div className='w-[100px] h-[100px]'></div>
          </div>


        </div>

        <div className='flex flex-row justify-center gap-[120px] items-end'>
          <div className='w-[100px] h-[100px]'></div>
          <img className='w-[500px]' src={people}></img>
          <img className='w-[100px] h-[100px] ' src={arrow2} alt='arrow2'></img>
        </div>
      </div>



    </div>
  )
}
