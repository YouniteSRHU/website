import React from 'react'
import EventSlider from '../../components/EventSlider/EventSlider'

const Youthfest = () => {
  return (
    <div className='youth-container'>
        <EventSlider eventType={"Flagship Events"}/>
        <EventSlider eventType={"non Flagship Events"}/>
    </div>
  )
}

export default Youthfest