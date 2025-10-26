import React from 'react'
import '../HomeComponent/HomeComponent.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import CardComponent from '../CardComponent/CardComponent'

export const ContactComponent = () => {
  return (
    <div>
        <main className='home global-container'>
          <div className="home-content">
            <h1>Feel Free <br />To Contact</h1>
            <p>Trusted financial guidance for every stage of life and business since 1987</p>
            <ButtonComponent text='Contact Us' />
          </div>
          <div className="home-image">
           <CardComponent />
          </div>
        </main>
        <FooterComponent />
        <p style={{textAlign: 'center', paddingTop: '10px'}}>noblefinances@gmail.com</p>
    </div>
  )
}
