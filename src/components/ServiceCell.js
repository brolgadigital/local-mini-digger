import React from 'react'
import HomePageImage from './HomePageImage'

export default function ServiceCell(props) {
    return (
        <div className='service-table-cell'>
            <div className='table-info'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <HomePageImage imageName={props.image} alt={props.title} class='cell-image' />
        </div>
    )
}
