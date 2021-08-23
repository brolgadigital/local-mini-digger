import React from 'react'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import TeamMemberCard from '../components/TeamMemberCard'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer'

export default function about() {
    return (
        <div>
            <ContactBar />
            <Menu />
            
            <div className='wrapper'>
                <h1>Local Mini Digger</h1>
                <p>Servicing Melbourne's Eastern Suburbs, Local Mini Digger can help with many different construction projects. From trench and foundations to demolition and rubbish removal, they have years of industry experience.</p>

                <h2>Meet The Team</h2>
                <p>Local Mini Digger is small family owned business. See who'll you'll be working with!</p>

                <div className='team-members'>
                    <TeamMemberCard
                        name='Ed Kefford'
                        position='Owner Operator'
                        about=''
                        image='face1'
                    />

                    <TeamMemberCard
                        name='Judy Kefford'
                        position='Office Manager'
                        about=''
                        image='face3'
                    />

                    <TeamMemberCard
                        name='Gavin'
                        position='Labourer'
                        about=''
                        image='face2'
                    />
                </div>

                <h2>Our Machinery</h2>
                <p>Local Mini Digger uses several different types of machines to access even the smallest and narrowest of spaces. From the compact Toro to the larger Bobcat, they'll find a way to get your job done.</p>

                <div className='machines'>
                    <StaticImage src='../images/IMG_0396.JPG' alt='Local Mini Digger Toro' class='digger'/>
                    <StaticImage src='../images/hero.jpeg' alt='Local Mini Digger Bobcat' class='digger' />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
