import React from 'react'
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
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
                        <span><FaCalendarAlt /></span> <span>{update.news_time}</span>
                    </small>
                </motion.div>
            ))}
        </div>
    )
}

export default LatestNews