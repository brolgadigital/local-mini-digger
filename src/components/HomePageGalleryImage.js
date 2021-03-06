import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const HomePageGalleryImage = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(filter: {relativeDirectory: {eq: "gallery-images"}}) {
        edges {
          node {
            name
            childImageSharp {
              id
              gatsbyImageData(
                layout: CONSTRAINED, height: 300
              )
            }
          }
        }
      }
    }
  `)

    // const imageData = data.node.childImageSharp.gatsbyImageData
    const displayImage = data.allFile.edges.map((imageData) => {
        // console.log(imageData)
        return ( <Link to='/gallery'><GatsbyImage 
            image={imageData.node.childImageSharp.gatsbyImageData}
            alt=''
            title={imageData.node.name}
            key={imageData.node.childImageSharp.id}
            className='gallery-carousell-image'
            height={parseInt(imageData.node.childImageSharp.gatsbyImageData.height)}
        /></Link> )
    })
    return displayImage

}
export default HomePageGalleryImage