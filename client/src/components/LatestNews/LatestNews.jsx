import React from 'react'
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock  } from 'react-icons/fa';
import dayjs from 'dayjs';
import './LatestNews.css'

const LatestNews = ({ updates }) => {
    return (
        <div className="latest-updates">
            <h2>Latest Updates</h2>
            {updates.slice(0, 20).map((update) => (
                <motion.div
                    key={update.news_id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="update-card"
                >
                    <h3>{update.news_heading}</h3>
                    <p>{update.news_text}</p>
                    <small>
                        <span>
                        <span style={{display:"flex", justifyContent:'center', alignItems:'center'}}><FaCalendarAlt /></span> 
                        <span>{dayjs(update.news_time).format('DD-MM-YYYY')}</span>
                        </span>
                        <span>
                        <span style={{display:"flex", justifyContent:'center', alignItems:'center'}}><FaClock/></span>
                        <span>{dayjs(update.news_time).format('HH:mm:ss')}</span>
                        </span>
                    </small>
                </motion.div>
            ))}
        </div>
    )
}

export default LatestNews