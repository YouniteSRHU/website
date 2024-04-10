import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './EventHeaderCarousel.css'
const EventHeaderCarousel = ({ imageUrl }) => {

    const images = [
        imageUrl[0].image_src,
        imageUrl[1].image_src,
        // imageUrl[2].image_src.value()
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="image-carousel">
            <AnimatePresence initial={false} mode='wait'>
                <motion.img
                    key={currentIndex}
                    src={`${images[currentIndex]}`}
                    alt={`Image ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
        </div>
    )
}

export default EventHeaderCarousel