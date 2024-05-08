// EventInfo.js
import React from 'react';
import PropTypes from 'prop-types';
import './EventInfo.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaFilePdf } from 'react-icons/fa'
import { motion } from 'framer-motion';
const EventInfo = ({ date, venue, guidelines, terms, mapImage, phone, brochureLink }) => {
    return (
        <div className="event-info">
            <div className="text-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="event-details"
                >
                    <p className='details'>
                        <span style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}><FaCalendarAlt /></span> <span> {date}</span>
                    </p>
                    <p className='details'>
                        <span style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}><FaMapMarkerAlt /></span> <span>{venue}</span>
                    </p>
                    <p className='details'>
                        <span style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}><FaPhone /></span> <span> {phone}</span>
                    </p>
                    <a href={brochureLink} target="blank" rel="noopener noreferrer" className='details'>
                        <span style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}><FaFilePdf /></span> <span>View Brochure</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1Ez4uO3bYO6-znvi9S6sfBfPT8Dmezhsc/view?usp=sharing" target="blank" rel="noopener noreferrer" className='details'>
                        <span style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}><FaFilePdf /></span> <span>View Yuvotsav'24 Guidebook</span>
                    </a>
                </motion.div>
                <div className="guidelines">
                    <h2>GUIDELINES</h2>
                    <ul>
                        {guidelines.map((rule, index) => (
                            <li key={index}><span>&#x2B24;</span>  <span>{rule.guideline}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="terms">
                    <h2>TERMS & CONDITIONS</h2>
                    <ul>
                        {terms.map((rule, index) => (
                            <li key={index}>&#x2B24;  {rule.tc}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className="second-section">
                <img src={mapImage} alt="Map" className="map-image" />
            </div>
        </div>
    );
};

// Prop validation
EventInfo.propTypes = {
    date: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    guidelines: PropTypes.arrayOf(PropTypes.string).isRequired,
    terms: PropTypes.arrayOf(PropTypes.string).isRequired,
    mapImage: PropTypes.string.isRequired,
};

export default EventInfo;
