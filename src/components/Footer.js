import React from 'react'
import { Link } from 'gatsby'
import * as Icon from 'react-feather'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='wrapper'>
                <Link to='/' className='logo'><StaticImage src='../images/LMD-bobcat-white.png' alt='Local Mini Digger' /></Link>
                <ul>
                    <li><h3>Quick Links</h3></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                </ul>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li><Icon.PhoneCall /><p>0410 307 705</p></li>
                    <li><Icon.Mail/><p>info@localminidigger.com.au</p></li>
                    <li><Icon.MapPin /><p>117 New Street<br />Ringwood VIC 3134</p></li>

                </ul>
            </div>
        </div>
        <div className='built-by'>
            <p><Icon.Code /> with <Icon.Heart /> by <a href='https://brolgadigital.com.au' title='Brolga Digital'>Brolga Digital</a></p>
        </div>
        </>
    )
}
