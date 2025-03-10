import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Link to='/'>
    <button className='fixed top-3 left-9 h-10 w-full cursor-pointer'>
        <img src='logo.svg' />
    </button>
    </Link>
  )
}

export default Navbar