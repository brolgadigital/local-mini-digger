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
          image=''
          title='Residential & Commercial'
          services={['Large or small scale', 'Tight-space capable']}
        />
        <ServiceCard 
          image=''
          title='Excavation & Digging'
          services={['Plumbing channels', 'Post holes', 'Foundation preparation', 'Surface levelling']}
        />
        <ServiceCard 
          image=''
          title='Dirt & Rubbish Removal'
          services={['Construction Rubbish', 'Skip moving', 'Earthworks']}
        />
      </div>
      <Footer />
    </div>
  )
}
