import React from 'react'
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import './LatestNews.css'

const LatestNews = ({ updates }) => {
    const sortedUpdates = updates.sort((a, b) => b.id - a.id);
    return (
        <div className="latest-updates">
            <h2>Latest Updates</h2>
            {sortedUpdates.slice(0, 20).map((update) => (
                <motion.div
                    key={update.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="update-card"
                >
                    <h3>{update.title}</h3>
                    <p>{update.content}</p>
                    <small>
                        <span><FaCalendarAlt /></span> <span>{update.time}</span>
                    </small>
                </motion.div>
            ))}
        </div>
    )
}

export default LatestNews