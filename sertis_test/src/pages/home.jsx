import React from 'react'
import './home.css'
import Navbar from '../compnent/navbar'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="h-screen w-screen bg-[url('/home.svg')] bg-cover bg-center flex flex-col justify-center items-center">
      <Navbar />
      <div className='flex flex-col justify-center items-center text-white w-[578px] h-[312px]'>
        <p className='pop font-semibold text-[40px] text-white'>We Have</p>
        <p className='pop font-semibold text-[80px] text-shadow text-white'>A Special Deal</p>
        <p className='old font-normal italic text-[72px] text-white'>For You</p>
        <Link to='/signup'>
        <button className='cursor-pointer border w-[48px] h-[48px] flex justify-center items-center rounded-full transition delay-50 duration-300 ease-in-out 
        hover:translate-y-1 hover:scale-110 hover:bg-[#25CDD9] hover:shadow-[0px_0px_10px_#25CDD9] hover:border-transparent'>
          <img src='right_i.svg'/>
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
