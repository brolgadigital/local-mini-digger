import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as Icon from 'react-feather'

class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {   
            burger: 'inline',
            cross: 'none',
            top: '60px',
            items: 'none',
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }
      
    open(e){
        this.setState({ 
            burger: 'none',
            cross: 'inline',
            top: 'auto',
            items: 'block',
        })
    }
    close(e) {
        this.setState({
            burger: 'inline',
            cross: 'none',
            top: '60px',
            items: 'none',
        })
    }

    render () {
        return (
            <>
            <div className='menu'>
                <Link to='/'><StaticImage src='../images/LMD-toro-colour.png' height='74' alt='Local Mini Digger' /></Link>
                <ul>
                    <li><Link to='/services' activeClassName="currentPage">Services</Link></li>
                    <li><Link to='/contact' activeClassName="currentPage">Contact</Link></li>
                    <li><Link to='/about' activeClassName="currentPage">About</Link></li>
                    <li><Link to='/' activeClassName="currentPage">Home</Link></li>
                </ul>
                <a className='call' href='tel:0410307705'><Icon.Phone />Call Now</a>
            </div>

            <div className='menu mobile-menu' style={{height: this.state.top}}>
            <Link to='/'><StaticImage src='../images/LMD-toro-colour.png' height='74' alt='Local Mini Digger' /></Link>
            <button id='menu' onClick={this.open} aria-label='Open Menu' style={{display: this.state.burger}}><Icon.Menu /></button>
            
            <button id='close' onClick={this.close} aria-label='Close Menu' style={{display: this.state.cross}}><Icon.X /></button>
            <a className='call' href='tel:0410307705'><Icon.Phone /></a>
            <ul style={{display: this.state.items}}>
                <li><Link to='/services' activeClassName="currentPage">Services</Link></li>
                <li><Link to='/contact' activeClassName="currentPage">Contact</Link></li>
                <li><Link to='/about' activeClassName="currentPage">About</Link></li>
                <li><Link to='/' activeClassName="currentPage">Home</Link></li>
            </ul>
            </div>
            </>
        )
    }
}

export default Menu