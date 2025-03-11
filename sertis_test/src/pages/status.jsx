import React from 'react'
import Navbar from '../compnent/navbar'
import { useLocation } from 'react-router-dom'

function Status() {
    const location = useLocation()
    console.log(location.state)
    const { firstName, lastName, email, dialCode, phoneNumber } = location.state
    console.log(firstName

    )
  return (
    <div className="h-screen w-screen bg-[url('/status.svg')] bg-cover bg-center flex flex-col justify-center items-center">
        <Navbar />
        <div className='pop flex flex-col justify-center items-center w-[593px] h-[300px] gap-[20px]'>
          <div className='flex justify-center items-center'>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#0DCA86"/>
            <rect x="33.5731" y="50.0236" width="16.9483" height="5.64582" rx="2.82291" transform="rotate(45 33.5731 50.0236)" fill="white"/>
            <rect x="37.5609" y="61.9991" width="39.5108" height="5.64582" rx="2.82291" transform="rotate(-45 37.5609 61.9991)" fill="white"/>
            </svg>
          </div>
          <div className='flex flex-col justify-center items-center text-white font-semibold text-[48px] text-center'>
            <p>Thank You</p>
            <p>{firstName}</p>
          </div >
          <div className='flex flex-col justify-center items-center text-white font-normal text-[16px] text-center'>
            <p>Our special deal has been sent to {email}.</p>
            <p>if you have not received, please contact us.</p>
          </div>
        </div>
    </div>
  )
}
export default Status