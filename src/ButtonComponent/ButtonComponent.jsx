import React from 'react'
import './ButtonComponent.css'

const ButtonComponent = (props) => {
  return (
    <div>
        <button className='primary-btn'>
            {props.text}
        </button>
    </div>
  )
}

export default ButtonComponent