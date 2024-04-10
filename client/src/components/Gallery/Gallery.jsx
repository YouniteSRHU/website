import React, { useEffect, useState } from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import { motion } from 'framer-motion';
import { images } from './images';
import './Gallery.css'


const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(images);
        setCollection([... new Set(images.map((item) => item.title))])
    }, [])

    const gallery_filter = (itemData) => {
        const filterData = images.filter((item) => item.title === itemData);
        setData(filterData);
    }
    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="gallery">
        <h1 className='gallery-heading'>EVENT GALLERY</h1>
            <div className="filterItem">
                <ul>
                    <li><motion.button onClick={() => setData(images)} variants={buttonVariants}
                            whileHover="hover">All</motion.button></li>
                    {
                        collection.map((item) => <li key={item.id}><motion.button onClick={() => { gallery_filter(item) }} variants={buttonVariants}
                            whileHover="hover" key={item.id}>{item}</motion.button></li>)
                    }
                </ul>
            </div>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {data.map((item) => {
                    return (
                        <a href={item.src} key={item.id}>
                            <img alt={item.alt} src={item.src} className='galleryImg' />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
    )
}

export default Gallery