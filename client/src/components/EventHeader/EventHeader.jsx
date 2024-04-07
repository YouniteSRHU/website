import React from 'react'
import { motion } from 'framer-motion';
import './EventHeader.css'
import EventHeaderCarousel from '../EventHeaderCarousel/EventHeaderCarousel';
const EventHeader = ({eh_imageURl,eh_heading,eh_desc,display_prop}) => {
  return (
    <div className="EH-container">
    <EventHeaderCarousel imageUrl={eh_imageURl}/>
    <div className="EH-right">
    <div className="EH-text-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 0.5 }} // Animation duration
      >
        {eh_heading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation when component mounts
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
      >
        {eh_desc}
      </motion.p>
      </div>
      <motion.button
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation when component mounts
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
        id='EH-button'
        style={{display:display_prop}}
      >
        Register Now!
      </motion.button>
    </div>
  </div>
  )
}

export default EventHeader