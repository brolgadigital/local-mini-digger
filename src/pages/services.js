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
                        text="We have no size or scope limits to our projects. From a few post-holes on a residenial property to foundation and plumbing preparation on a commercial site, we've got the tools to get the job done."
                    />

                    <ServiceCell 
                        title='Excavation & Digging'
                        image='excavation abdul-zreika-maVHoAWycOs-unsplash'
                        text="Our diggers are capable of fitting into almost any space, making excavation, digging and filling a breeze. We can squeeze into backyards, courtyards and even narrow sideyards. Even with this compact footprint, we're able to tackle the big tasks!"
                    />

                    <ServiceCell 
                        title='Dirt & Rubbish Removal'
                        image='rubbish 158876557_127682705949149_1641915770293018496_n'
                        text="Removing dirt, rubbish and builders debris can be a large task. Our machinery clears it up easily, and we'll also organise the skip to take it all away, leaving you with a fresh, clean space to build or landscape on."
                    />
                </div>
                
            </div>
            
            <Footer />
        </div>
    )
}
