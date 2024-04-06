import React from 'react'
import './HeroItem.css'

const HeroItem = ({ title, description, imageUrl, onClick }) => {
    return (
        <li className="hero-item" style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={onClick}
        >
            <div className="hero-content">
                <h2 className="hero-title">{title}</h2>
                <p className="hero-description">{description}</p>
                <button className='hero-button'>Read More</button>
            </div>
        </li>
    )
}

export default HeroItem