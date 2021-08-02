import React from 'react'
import PropTypes from 'prop-types'
import { Star } from 'react-feather'

export default function Testimonial(props) {
    
    let stars = [];
    const differ = 5-props.rating;
    for (let i = 0; i < props.rating; i++) {
        stars.push(<Star key={i} class='rated'/>)
    }
    for (let i = 0; i < differ; i++) {
        stars.push(<Star key={props.rating + i} />)
    }

    return (
        <div className='testimonial'>
            
            <div>{stars}</div>



            {/* <Star /><Star /><Star /><Star /><Star /> */}
            <p>{props.review}</p>
            <h4>{props.name} // {props.occupation}</h4>
        </div>
    )
}

Testimonial.propTypes = {
    rating: PropTypes.number,
    review: PropTypes.string,
    name: PropTypes.string,
    occupation: PropTypes.string,
}