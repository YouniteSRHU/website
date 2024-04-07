import React from 'react'
import ContactUs from '../../components/ContactUs/ContacUs'
import StarsCanvas from '../../components/ContactUs/Canvas/Stars'

const Contact = () => {
  return (
    <div className="relative z-0 black-gradient">
    <ContactUs/>
    <StarsCanvas/>
    </div>
  )
}

export default Contact