import React, { useEffect, useState } from 'react'
import Navbar from '../compnent/navbar'
import { Link } from 'react-router-dom'

function Signup() {

    const [data, setData] = useState('')
    const [selectedCode, setSelectedCode] = useState('+66')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleSelected = (code) => {
        setSelectedCode(code)
        setIsOpen(false)
    }
    
    const [inputForm, setInputForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dialCode: '',
        phoneNumber: ''
    })

    const [errors, setErrors] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)

    const validateForm = () => {
        const newErrors = {}
    
        const firstNameRegex = /^[A-Za-z\s]+$/
        if (!inputForm.firstName.trim()) {
            newErrors.firstName = "First name is required"
        } else if (!firstNameRegex.test(inputForm.firstName)) {
            newErrors.firstName = "This field can only contain alphabets (A-Z) and space."
        }
    
        const lastNameRegex = /^[A-Za-z\s]+$/
        if (!inputForm.lastName.trim()) {
            newErrors.lastName = "Last name is required"
        } else if (!lastNameRegex.test(inputForm.lastName)) {
            newErrors.lastName = "This field can only contain alphabets (A-Z) and space."
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!inputForm.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!emailRegex.test(inputForm.email)) {
            newErrors.email = "This field has invalid email format (example@email.com)."
        }

        const phoneRegex = /^[0-9]{1,16}$/
        if (!inputForm.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required"
        } else if (!phoneRegex.test(inputForm.phoneNumber)) {
            newErrors.phoneNumber = "The phone number is too long."
        }
    
        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0)
    }
    

    useEffect(() => {
        validateForm()
      }, [inputForm])
    
    const handleChange = (e) => {
        setInputForm({ ...inputForm, [e.target.name]: e.target.value })
    }

    console.log(data)
    console.log(isOpen)
    console.log(selectedCode)
    console.log(isFormValid)

  return (
    <div className="h-screen w-full bg-[url('/signup.svg')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
        <Navbar />
        <div className='flex justify-between items-center lg:w-[998px] lg:h-[580px] lg:flex-row 
        sm:w-[684px] sm:h-[724px] sm:flex-col'>
            <div className='flex flex-col justify-center items-start text-white sm:w-full'>
                <div className='flex lg:flex-col lg:justify-center lg:items-start sm:flex-row'>
                    <div className='pop font-semibold text-[48px] text-white sm:mr-2.5'>Enter Your</div>
                    <div className='pop font-semibold text-[48px] text-white'>Information To</div>
                </div>
                <div className='old font-normal italic text-[56px] text-white lg:mb-0 sm:mb-5'>Get A Special Deal</div>
            </div>
            <div className='flex flex-col text-white bg-white lg:w-[491px] sm:w-full h-[580px] rounded-[24px] p-[32px] pop'> 
                <div className='pop flex items-center font-semibold text-[24px] text-[#1B1D22] mb-5'>Profile</div>
                <div className='flex flex-col lg:w-[427px] sm:w-full '>
                    <div className='flex flex-col h-[102px]'>
                        <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>First name</p>
                        <input type='text' placeholder='Enter first name' name='firstName' value={inputForm.firstName} onChange={handleChange} className={`h-[24px] text-[#1B1D22] text-start text-[16px] font-normalw-full placeholder-[#AFB4C0] 
                        border-b focus:placeholder-transparent focus:outline-none ${errors.firstName ? "border-[#FF5454]" : "border-[#3A3F4A]"}`}/>
                        {errors.firstName && <p className="text-[#FF5454] text-sm">{errors.firstName}</p>}
                    </div>
                    <div className='flex flex-col h-[102px]'>
                        <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>Last name</p>
                        <input type='text' placeholder='Enter last name' name='lastName' value={inputForm.lastName} onChange={handleChange} className={`h-[24px] text-[#1B1D22] text-start text-[16px] font-normalw-full placeholder-[#AFB4C0] 
                        border-b focus:placeholder-transparent focus:outline-none ${errors.lastName ? "border-[#FF5454]" : "border-[#3A3F4A]"}`}/>
                        {errors.lastName && <p className="text-[#FF5454] text-sm">{errors.lastName}</p>}
                    </div>
                    <div className='flex flex-col h-[102px]'>
                        <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>Email</p>
                        <input type='email' placeholder='Enter email' name='email' value={inputForm.email} onChange={handleChange} className={`h-[24px] text-[#1B1D22] text-start text-[16px] font-normalw-full placeholder-[#AFB4C0] 
                        border-b focus:placeholder-transparent focus:outline-none ${errors.email ? "border-[#FF5454]" : "border-[#3A3F4A]"}`}/>
                        {errors.email && <p className="text-[#FF5454] text-sm">{errors.email}</p>}
                    </div>
                    <div className='flex h-[102px] gap-4'>
                        <div className='relative flex flex-col lg:w-[120px] sm:w-[295px] cursor-pointer'>
                            <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>Country code</p>
                            <div className='pop h-[24px] flex justify-between items-center text-[#1B1D22] text-[16px] font-normal w-full
                            border-b border-[#3A3F4A] focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                                <p>{`${selectedCode}`}</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                <path d="M10.8998 1.1999C10.4998 0.799902 9.8998 0.799902 9.4998 1.1999L5.9998 4.6999L2.4998 1.1999C2.0998 0.799902 1.4998 0.799902 1.0998 1.1999C0.699805 1.5999 0.699805 2.1999 1.0998 2.5999L5.29981 6.7999C5.4998 6.9999 5.6998 7.0999 5.9998 7.0999C6.29981 7.0999 6.4998 6.9999 6.6998 6.7999L10.8998 2.5999C11.2998 2.1999 11.2998 1.5999 10.8998 1.1999Z" 
                                fill="#3A3F4A"/>
                                </svg>
                            </div>
                            {isOpen && (
                                <ul className="absolute top-10 lg:w-[427px] sm:w-[620px] h-[170px] bg-white mt-2 rounded-b-[8px] shadow-md max-h-48 overflow-auto z-10">
                                    {data.map((item, index) => (
                                        <li key={index} className={`text-[12px] p-2 cursor-pointer hover:bg-gray-200
                                            ${selectedCode === item.dial_code ? "text-[#1EA5AE] font-semibold" : "text-[#3A3F4A] font-normal"}`}
                                            onClick={() => handleSelected(item.dial_code)}>
                                            <div className='flex justify-start items-center gap-1'>
                                                <div className="w-[16px] flex justify-center">
                                                    {selectedCode === item.dial_code && (
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.46683 0.800098C9.20016 0.533431 8.80016 0.533431 8.5335 0.800098L3.5335 5.8001L1.46683 3.73343C1.20016 3.46676 0.800163 3.46676 0.533496 3.73343C0.266829 4.0001 0.266829 4.4001 0.533496 4.66676L3.06683 7.2001C3.20016 7.33343 3.3335 7.4001 3.5335 7.4001C3.7335 7.4001 3.86683 7.33343 4.00016 7.2001L9.46683 1.73343C9.7335 1.46676 9.7335 1.06676 9.46683 0.800098Z" 
                                                        fill="#1EA5AE" className='ml-0'/>
                                                        </svg>                                                    
                                                    )}
                                                </div>
                                                <div>
                                                    {item.name} ({item.dial_code})
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='flex flex-col lg:w-[291px] sm:w-full'>
                            <p className='font-normal text-[14px] text-[#3A3F4A] h-[24px]'>Phone number</p>
                            <input type='text' placeholder='Enter phone number'name='phoneNumber' value={inputForm.phoneNumber} onChange={handleChange} className={`h-[24px] text-black text-start text-[16px] font-normalw-full placeholder-[#AFB4C0] 
                            border-b focus:placeholder-transparent focus:outline-none ${errors.phoneNumber ? "border-[#FF5454]" : "border-[#3A3F4A]"}`}/>
                            {errors.phoneNumber && <p className="text-[#FF5454] text-sm">{errors.phoneNumber}</p>}
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-center'>
                    <Link to='/confirm' state={{firstName: inputForm.firstName, lastName: inputForm.lastName, email: inputForm.email, dialCode: selectedCode, phoneNumber: inputForm.phoneNumber}}> 
                    <button className={`flex justify-center items-center w-[124px] h-[48px] group border rounded-full  
                     ${isFormValid ? "cursor-pointer transition delay-50 duration-300 ease-in-out hover:border-transparent border-[#1B1D22] hover:bg-[#25CDD9] hover:shadow-[0px_0px_10px_#25CDD9]" : "cursor-not-allowed text-[#AFB4C0] border-[#AFB4C0]"}`} disabled={!isFormValid}>
                        <p className={`pop font-semibold text-[18px]
                        ${isFormValid ? "transition-colors duration-500 ease-in-out text-[#1B1D22] group-hover:text-white" : "text-[#AFB4C0]"}`}>Next</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2929 5.63605L16.6669 11.0101L4.92893 11.0101C4.36325 11.0101 3.93898 11.4343 3.93898 12C3.93898 12.5657 4.36325 12.99 4.92893 12.99L16.6669 12.99L11.2929 18.364C10.8686 18.7882 10.8686 19.3539 11.2929 19.7782C11.7172 20.2024 12.2828 20.2024 12.7071 19.7782L19.7782 12.7071C19.8489 12.6364 19.9903 12.495 19.9903 12.3536C20.061 12.1414 20.061 11.8586 19.9903 11.6465C19.9903 11.505 19.8489 11.3636 19.7782 11.2929L12.7071 4.22183C12.2828 3.79757 11.7172 3.79757 11.2929 4.22183C10.8686 4.6461 10.8686 5.21178 11.2929 5.63605Z" 
                        fill="black" className={`${isFormValid ? "transition-colors duration-500 ease-in-out group-hover:fill-white" : "fill-[#AFB4C0]"}`}/>
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup