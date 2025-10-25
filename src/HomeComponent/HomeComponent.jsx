import React from 'react'
import './HomeComponent.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

export const HomeComponent = () => {
  return (
    <div>
        <main className='home global-container'>
          <div className="home-content">
            <h1>Financial Clarity You<br></br>Can Trust</h1>
            <p>Trusted financial guidance for every stage of life and business since 1987</p>
            <ButtonComponent text='Connect with our experts' />
          </div>
          <div className="home-image">
            <img src='/src/assets/images/home_img.png'/>
          </div>
        </main>
        <FooterComponent />
        <p style={{textAlign: 'center', paddingTop: '10px'}}>noblefinances@gmail.com</p>
    </div>
  )
}
