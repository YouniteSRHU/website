import React from 'react'
import {truncate} from 'lodash'
import './EventCard.css'

const EventsCard = ({ card }) => {
    return (
        <div className="item active" style={{ backgroundImage: `url(${card.images[0].image_src}) ` }}>
            <div className="item-desc">
                <h3>{card.event_name}</h3>
                <p>{truncate(card.event_desc,{length: 120})}</p>
            </div>
        </div>
    )
}

export default EventsCard