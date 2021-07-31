import React from 'react'
import '../styles/style.scss'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'

export default function index() {
  return (
    <div>
      <ContactBar />
      <Menu />
      <Hero />
      <Ticker />

      <div className='services'>
        <ServiceCard 
          image='commercial nathan-waters-j7q-Z9DV3zw-unsplash'
          title='Residential & Commercial'
          services={['Large or small scale', 'Tight-space capable']}
        />
        <ServiceCard 
          image='excavation abdul-zreika-maVHoAWycOs-unsplash'
          title='Excavation & Digging'
          services={['Plumbing channels', 'Post holes', 'Foundation preparation', 'Surface levelling']}
        />
        <ServiceCard 
          image='rubbish 158876557_127682705949149_1641915770293018496_n'
          title='Dirt & Rubbish Removal'
          services={['Construction Rubbish', 'Skip moving', 'Earthworks']}
        />
      </div>
      <Footer />
    </div>
  )
}
