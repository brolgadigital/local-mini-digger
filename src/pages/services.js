import React from 'react'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ServiceCell from '../components/ServiceCell'

export default function services() {
    return (
        <div>
            <ContactBar />
            <Menu />
            
            <div className='wrapper'>
                <h1>Services</h1>
                <p>The team at Local Mini Digger have vast experience on a wide range of worksites, making them an outstanding choice for your project. Big or small, they're ready for your construction project, anywhere across Melbourne.</p>

                <div className='services-table'>
                    <ServiceCell 
                        title='Residential & Commercial'
                        image='commercial nathan-waters-j7q-Z9DV3zw-unsplash'
                        text=''
                    />

                    <ServiceCell 
                        title='Excavation & Digging'
                        image='excavation abdul-zreika-maVHoAWycOs-unsplash'
                        text=''
                    />

                    <ServiceCell 
                        title='Dirt & Rubbish Removal'
                        image='rubbish 158876557_127682705949149_1641915770293018496_n'
                        text=''
                    />
                </div>
                
            </div>
            
            <Footer />
        </div>
    )
}
