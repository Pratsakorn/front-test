import React from 'react'
import Navbar from '../compnent/navbar'
import { Link, useLocation } from 'react-router-dom'

function Confirm() {
    const location = useLocation()
    console.log(location.state)
    const { firstName, lastName, email, dialCode, phoneNumber } = location.state
    console.log(email)
  return (
    <div className="h-screen w-screen bg-[url('/signup.svg')] bg-cover bg-center flex flex-col justify-center items-center">
        <Navbar />
        <div className='flex gap-[92px]'>
            <div className='flex flex-col justify-center items-start text-white'>
                <p className='pop font-semibold text-[48px] text-white'>Please Confirm</p>
                <p className='pop font-semibold text-[48px] text-white'>Your Information</p>
            </div>
            <div className=' flex flex-col text-white bg-white w-[491px] h-[580px] rounded-[24px] p-[32px] pop'>
                <div className='flex justify-between items-center mb-5'>
                    <div className='pop font-semibold text-[24px] text-[#1B1D22]'>Profile</div>
                    <Link to='/edit' state={location.state}>
                        <button className='cursor-pointer group border border-[#1B1D22] w-[32px] h-[32px] flex justify-center items-center rounded-full transition delay-50 duration-300 ease-in-out 
                        hover:-translate-x-1 hover:scale-110 hover:bg-[#25CDD9] hover:shadow-[0px_0px_7px_#25CDD9] hover:border-transparent'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5669 5.76663L10.3169 3.5333L11.2003 2.66663C11.3891 2.47775 11.6254 2.3833 11.9089 2.3833C12.192 2.3833 12.428 2.47775 12.6169 2.66663L13.4336 3.4833C13.6225 3.6833 13.7225 3.9193 13.7336 4.1913C13.7447 4.46375 13.6503 4.69441 13.4503 4.8833L12.5669 5.76663ZM3.03359 13.6666C2.86693 13.6666 2.72537 13.6084 2.60893 13.492C2.49204 13.3751 2.43359 13.2333 2.43359 13.0666V11.6666C2.43359 11.5889 2.44759 11.514 2.47559 11.442C2.50315 11.3695 2.55026 11.3 2.61693 11.2333L9.60026 4.24997L11.8503 6.49997L4.86693 13.4833C4.80026 13.55 4.73093 13.5973 4.65893 13.6253C4.58648 13.6529 4.51137 13.6666 4.43359 13.6666H3.03359Z" 
                            fill="#1B1D22" className='transition-colors duration-500 group-hover:fill-white'/>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className='flex flex-col w-[427px]'>
                    <div className='flex flex-col h-[102px]'>
                        <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>First name</p>
                        <label className='font-normal text-[16px] text-[#1B1D22] h-[24px]'>{firstName}</label>
                    </div>
                    <div className='flex flex-col h-[102px]'>
                        <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>Last name</p>
                        <label className='font-normal text-[16px] text-[#1B1D22] h-[24px]'>{lastName}</label>
                    </div>
                    <div className='flex flex-col h-[102px]'>
                        <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>Email</p>
                        <label className='font-normal text-[16px] text-[#1B1D22] h-[24px]'>{email}</label>
                    </div>
                    <div className='flex h-[102px] gap-4'>
                        <div className='flex flex-col w-[291px]'>
                            <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>Phone number</p>
                            <label className='font-normal text-[16px] text-[#1B1D22] h-[24px]'>{dialCode} {phoneNumber}</label>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-center'>
                    <Link to='/status' state={location.state}> 
                    <button className='flex justify-center items-center w-[157px] h-[48px] gap-[10px] group border rounded-full cursor-pointer transition delay-50 duration-300 ease-in-out 
                    hover:border-transparent border-[#1B1D22] hover:bg-[#25CDD9] hover:shadow-[0px_0px_10px_#25CDD9]'>
                        <p className='pop font-semibold text-[16px] transition-colors duration-500 ease-in-out text-[#1B1D22] group-hover:text-white'>Confirm</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2929 5.63605L16.6669 11.0101L4.92893 11.0101C4.36325 11.0101 3.93898 11.4343 3.93898 12C3.93898 12.5657 4.36325 12.99 4.92893 12.99L16.6669 12.99L11.2929 18.364C10.8686 18.7882 10.8686 19.3539 11.2929 19.7782C11.7172 20.2024 12.2828 20.2024 12.7071 19.7782L19.7782 12.7071C19.8489 12.6364 19.9903 12.495 19.9903 12.3536C20.061 12.1414 20.061 11.8586 19.9903 11.6465C19.9903 11.505 19.8489 11.3636 19.7782 11.2929L12.7071 4.22183C12.2828 3.79757 11.7172 3.79757 11.2929 4.22183C10.8686 4.6461 10.8686 5.21178 11.2929 5.63605Z" 
                        fill="black" className='transition-colors duration-500 ease-in-out group-hover:fill-white'/>
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirm