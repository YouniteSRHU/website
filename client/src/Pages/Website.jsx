import React from 'react'
import Parallax from "../components/parallax/Parallax"
import Portfolio from '../components/portfolio/Portfolio'

const Website = () => {
    return (
        <div className="App">
        <section className='parallax-container'>
        <Parallax  />
        </section>
        <Portfolio/>
        </div>
    )
}

export default Website