import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function ServiceCard(props) {

    const listItems = props.services.map((service) => <li>{service}</li>);

    return (
        <div className='service-card'>
            <StaticImage src={props.image} alt={props.title}/>
            <h2>{props.title}</h2>
            <ul>{listItems}</ul>
        </div>
    )
}
