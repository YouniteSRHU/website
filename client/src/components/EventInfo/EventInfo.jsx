// EventInfo.js
import React from 'react';
import PropTypes from 'prop-types';
import './EventInfo.css';

const EventInfo = ({ date, venue, guidelines, terms, mapImage }) => {
    return (
        <div className="event-info">
            <div className="text-section">
                <p>{date} at {venue}</p>
                <div className="guidelines">
                    <h2>GUIDELINES</h2>
                    <ul>
                        {guidelines.map((rule, index) => (
                            <li key={index}>{rule.guideline}</li>
                        ))}
                    </ul>
                </div>
                <div className="terms">
                    <h2>TERMS & CONDITIONS</h2>
                    <ul>
                        {terms.map((rule, index) => (
                            <li key={index}>{rule.tc}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <img src={mapImage} alt="Map" className="map-image" />
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
