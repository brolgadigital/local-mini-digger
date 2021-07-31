import React from 'react'
import HomePageImage from './HomePageImage'

export default function ServiceCard(props) {
    const listItems = props.services.map((service, index) => <li key={index}>{service}</li>)
    return (
        <div className='service-card'>
            <HomePageImage imageName={props.image} alt={props.title}/>
            <h2>{props.title}</h2>
            <ul>{listItems}</ul>
        </div>
    )
}