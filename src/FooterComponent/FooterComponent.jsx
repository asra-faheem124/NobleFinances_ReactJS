import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <div>
        <footer className='footer'>
            <div className="footer-logo">
            <p className='footer-font'>Noble Finances</p>
            </div>
            <ul className='footer-ul'>
          <li className='footer-li'><a href="/services">Services</a></li>
          <ButtonComponent text='Book an appointment'/>
        </ul>
        </footer>
    </div>
  )
}

export default FooterComponent