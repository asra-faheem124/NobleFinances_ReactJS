import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const BookingsComponent = () => {
  return (
    <div>
      <main className='home global-container'>
          <div className="home-content">
            <h1>Book an <br /> appointment now</h1>
            <p>Serving individuals and small businesses since 1987</p>
            <ButtonComponent text='Book Now' />
          </div>
          <div className="home-image">
            <img src='/src/assets/images/booking-img.png'/>
          </div>
        </main>
        <FooterComponent />
        <p style={{textAlign: 'center', paddingTop: '10px'}}>noblefinances@gmail.com</p>
    </div>
  )
}

export default BookingsComponent