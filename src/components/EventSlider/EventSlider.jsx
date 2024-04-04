import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import EventsCard from '../EventsCard/EventsCard';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const EventSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const cards = [<EventsCard />, <EventsCard />, <EventsCard />, <EventsCard />, <EventsCard />];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
    return (
        <>
        <div className='  text-[#013D7F] flex justify-start text-4xl font-bold p-4  ml-20 ' >
        <span>Flagship Events</span>
        </div>
        <div className="flex items-center flex-col justify-center  bg-black h-screen">
        
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: "40%", position: "absolute", display: "flex",justifyContent: "center" }}
                ><EventsCard/></motion.div>
            ))}
            <div className="flex flex-row gap-10 mt-20">
                <button
                    className="text-white mt-[400px] text-5xl py-2 px-4"
                    onClick={handleBack}
                >
                    <FaChevronCircleLeft />
                </button>
                <a
                    className="text-white mt-[400px] py-2 px-4  text-5xl"
                    onClick={handleNext}
                >
                    <FaChevronCircleRight />
                </a>
            </div>
        </div>
        </>
    )
}

export default EventSlider