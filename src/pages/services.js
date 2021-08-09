import React from 'react'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function services() {
    return (
        <div>
            <ContactBar />
            <Menu />
            
            <div className='wrapper'>
                <h1>Services</h1>

                <h2>Residential & Commercial</h2>

                <h2>Excavation & Digging</h2>

                <h2>Dirt & Rubbish Removal</h2>
                
            </div>
            
            <Footer />
        </div>
    )
}
