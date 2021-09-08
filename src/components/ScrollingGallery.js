import React from 'react'
import Marquee from 'react-fast-marquee'
import HomePageGalleryImage from '../components/HomePageGalleryImage'

export default function ScrollingGallery() {

    // const listItems = suburbList.map((name) => <li key={name}>{name}  -  </li>);

    return (
        <>
            <Marquee 
                gradient={false}
                pauseOnClick={true}
                pauseOnHover={true}
            >
                <HomePageGalleryImage />
            </Marquee>
        </>
    )
}
