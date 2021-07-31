import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as Icon from 'react-feather'

export default function Menu() {
    return (
        <div className='menu'>
            <Link to='/'><StaticImage src='../images/LMD-toro-colour.png' className='logo' alt='Local Mini Digger' /></Link>
            <ul>
                <li><Link to='/' activeClassName="currentPage">Services</Link></li>
                <li><Link to='/' activeClassName="currentPage">Contact</Link></li>
                <li><Link to='/' activeClassName="currentPage">Team</Link></li>
                <li><Link to='/' activeClassName="currentPage">Home</Link></li>
            </ul>
            <a className='call' href='tel:0410307705'><Icon.Phone />Call Now</a>
        </div>
    )
}
