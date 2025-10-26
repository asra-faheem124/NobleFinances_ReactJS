import React from 'react'
import './NavComponent.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export const NavComponent = () => {
  return (
    <div>
      <nav className='global-container'>
        <div className='logo'>
          <p>Noble Finances</p>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/bookings">Bookings</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <ButtonComponent text='Book an appointment'/>
      </nav>
    </div>
  )
}

export default NavComponent