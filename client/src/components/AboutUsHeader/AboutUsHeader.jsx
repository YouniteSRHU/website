import React from 'react';
import { motion } from 'framer-motion'; 
import './AboutUsHeader.css';

const AboutUsHeader = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { type: 'tween', duration: 2, ease: 'easeOut' } },
    };
    const textVariants = {
        hidden: { scale: 0.8 },
        show: { scale: 1, transition: { type: 'spring', stiffness: 100, damping: 40} },
    };
    
    return (
        <motion.div
            className="about-us-container"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <motion.div className="about-us-text" variants={textVariants}>
                <motion.h2 variants={textVariants}>ABOUT US</motion.h2>
                <motion.p variants={textVariants}>
                Younite is a dynamic student-led ecosystem at SRHU (Swami Rama Himalayan University) that bridges the gap between various colleges within the university. Through a vibrant array of events, workshops, and cultural activities, Younite fosters collaboration, creativity, and a sense of community.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default AboutUsHeader;
