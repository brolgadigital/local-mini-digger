import React from 'react'
import '../styles/style.scss'
import { StaticImage } from 'gatsby-plugin-image'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import ServiceCard from '../components/ServiceCard'
import HomePageGallery from '../components/HomePageGallery'
import Testimonal from '../components/Testimonial'
import Footer from '../components/Footer'

export default function index() {
  return (
    <div>
      <ContactBar />
      <Menu />
      <Hero />
      <Ticker />

      <div className='wrapper about'>
        <StaticImage src='../images/LMD-toro-colour.png' alt='Local Mini Digger' />
        <ul>
          <li>Quality Work</li>
          <li>Personal Service</li>
          <li>Family Owned</li>
          <li>Great Value</li>
        </ul>
      </div>
      <div className='full-width-red'></div>

      <div className='wrapper services'>
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

      <HomePageGallery />

      <div className='wrapper testimonials'>
        <h1>Local Mini Digger</h1>
        <h2>Servicing Melbournes Eastern Suburbs</h2>
        <Testimonal 
          rating='4' review='Ed did a fantastic job preparing the driveway for a new finish. Will definitely be using his services again!' name='Shelley Bassett' occupation='Digital Designer'
        />
        <Testimonal 
          rating='2' review='We hired Local Mini Digger to make a hole in our garden. It was huge!' name='Judy Kefford' occupation='Administration Manager'
        />
        <Testimonal 
          rating='3' review="Local Mini Digger was great. They made a huge mess then organised the total clean up. You'd never know I even had work done" name='Jason Bingham' occupation='Secondary Teacher'
        />
      </div>
      
      <Footer />
    </div>
  )
}
