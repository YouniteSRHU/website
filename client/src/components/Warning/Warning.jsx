import React from 'react'
import './Warning.css'
import { motion } from 'framer-motion';
const Warning = ({message}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="warning-container"
        >
            <p className="warning-text">
                <strong>IMPORTANT!:</strong><span>{message}</span>
            </p>
        </motion.div>
    )
}

export default Warning