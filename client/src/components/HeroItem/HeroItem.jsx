import React from 'react'
import './HeroItem.css'

const HeroItem = ({ title, description, url, id, onClick }) => {
    return (
        <li className="hero-item" id={id} 
            onClick={onClick}
        >
            <div className="hero-content">
                <h2 className="hero-title">{title}</h2>
                <p className="hero-description">{description}</p>
                <a href={`${url}`}>
                <button className='hero-button'>Read More</button>
                </a>
            </div>
        </li>
    )
}

export default HeroItem