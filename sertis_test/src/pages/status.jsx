import React from 'react'
import Navbar from '../compnent/navbar'
import { useLocation } from 'react-router-dom'

function Status() {
    const location = useLocation()
    console.log(location.state)
    const { firstName, lastName, email, dialCode, phoneNumber } = location.state
  return (
    <div>
        <Navbar />
    </div>
  )
}
export default Status