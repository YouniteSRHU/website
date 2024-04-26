import React from 'react'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import './EventCard.css'

const EventsCard = ({ card }) => {
    const navigate = useNavigate();
    return (
        <div className="item active" style={{ backgroundImage: `url(${card.images[0].image_src}) ` } } onClick={()=>navigate(`/YUVOTSAV'24/${card.event_id}`)}>
            <div className="item-desc">
                <h3>{card.event_name}</h3>
                <p>{truncate(card.event_desc,{length: 120})}</p>
            </div>
        </div>
    )
}

export default EventsCard