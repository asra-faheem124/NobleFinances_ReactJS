import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import './ServicesComponent.css'
import FooterComponent from '../FooterComponent/FooterComponent'

export const ServicesComponent = () => {
  return (
    <div>
       <main className='service global-container'>
          <div className="service-content">
            <h1>Your Financial <br /> Journey, Clearly <br /> Defined</h1>
            <p>Trusted financial guidance for every stage of life and business since 1987</p>
            <ButtonComponent text='Connect with our experts' />
          </div>
          <div className="service-image">
            <img src='/src/assets/images/service-img.png'/>
          </div>
        </main>
        <FooterComponent />
        <p style={{textAlign: 'center', paddingTop: '10px'}}>noblefinances@gmail.com</p>
    </div>
  )
}
