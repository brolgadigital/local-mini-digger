import React from 'react'
import * as Icon from 'react-feather'
import { StaticImage } from 'gatsby-plugin-image'

export default function Hero() {
    return (
        <div className='hero'>
            <StaticImage src='../images/hero.jpeg' className='hero-image' alt='Local Mini Digger at work excavating'/>
            <div className='wrapper'>
                <p>Got a big job in a small space?<br />You need a </p>
                <h1>Local Mini Digger</h1>
                <a className='button' href='tel:0410307705'><Icon.Phone />Call Now</a>
            </div>
        </div>
    )
}
