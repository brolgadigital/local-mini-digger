import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

const AllGalleryImages = () => {
  const data = useStaticQuery(graphql`
    query AllImageQuery {
      allFile(filter: {relativeDirectory: {eq: "gallery-images"}}) {
        edges {
          node {
            name
            childImageSharp {
              id
              gatsbyImageData(
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `)

    const displayImage = data.allFile.edges.map((imageData) => {
        // console.log(imageData)
        return ( <GatsbyImage 
            image={imageData.node.childImageSharp.gatsbyImageData}
            alt=''
            title={imageData.node.name}
            key={imageData.node.childImageSharp.id}
            className='gallery-image'
        />)
    })

    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry gutter='2em'>
                {displayImage}
            </Masonry>
        </ResponsiveMasonry>
    )
}
export default AllGalleryImages