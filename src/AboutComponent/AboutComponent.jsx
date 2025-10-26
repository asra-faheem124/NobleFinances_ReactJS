import React from 'react'
import '../HomeComponent/HomeComponent.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

export const AboutComponent = () => {
  return (
    <div>
        <main className='home global-container'>
          <div className="home-content">
            <h1>About Us</h1>
            <p>We believe that tax filing should be seamless, <br /> accurate, and stress-free. <br /> Get started with Noble Finance today!</p>
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
