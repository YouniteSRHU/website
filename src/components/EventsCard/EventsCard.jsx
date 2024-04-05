import React from 'react'
import './EventCard.css'

const EventsCard = ({ card }) => {
    return (


        <div className="item active" style={{ backgroundImage: `url(${card.urlImage}) `}}>
            <div className="item-desc">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
            </div>
        </div>
    )
}

export default EventsCard