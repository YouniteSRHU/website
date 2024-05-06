import React, { useState, useEffect } from 'react';
import './HeroOverlay.css';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
const HeroOverlay = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [daysToGo, setDaysToGo] = useState(10);

    useEffect(() => {
        const deadlineDate = new Date('2024-05-12');
        const currentDate = new Date();
        const timeDifference = deadlineDate - currentDate;
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        setDaysToGo(daysRemaining);
    }, []);

    const closeOverlay = () => {
        setShowOverlay(false);
    };
    const navigate = useNavigate()
    return (
        <motion.div
            className={`overlay ${showOverlay ? 'visible' : ''}`}
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: showOverlay ? 1 : 0 }} 
            transition={{ duration: 3 }}
            
        >
        <button className="close-button" onClick={closeOverlay}>
                    ✖
                </button>
            <div className="overlay-content"
            onClick={()=> navigate("/YUVOTSAV'24")} 
            >
                
                <div className="countdown">Registration deadline {daysToGo} days left! </div>
            </div>
        </motion.div>
    );
};

export default HeroOverlay;
