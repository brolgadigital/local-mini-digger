import React from 'react'
import ContactBar from '../components/ContactBar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import AllGalleryImages from '../components/AllGalleryImages'



export default function gallery() {


    return (
        <div>
            <ContactBar />
            <Menu />
            
            <div className='wrapper'>
                <h1>Our Work</h1>
                <AllGalleryImages />

                {/* <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry>
                        
                    {
                    
                    AllGalleryImages.map(({imageData}) => {
                    
                        <GatsbyImage 
                            image={imageData.node.childImageSharp.gatsbyImageData}
                            alt=''
                            title={imageData.node.name}
                            key={imageData.node.childImageSharp.id}
                            className='gallery-image'
                        />
                    })}
                        
                    </Masonry>
                </ResponsiveMasonry> */}
            </div>
            
            <Footer />
        </div>
    )
}
