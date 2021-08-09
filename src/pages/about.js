import React from 'react'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function about() {
    return (
        <div>
            <ContactBar />
            <Menu />
            
            <div className='wrapper'>
                <h1>Local Mini Digger</h1>

                <h2>Meet The Team</h2>
                
            </div>
            
            <Footer />
        </div>
    )
}
