import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const HomePageImage = (props) => {
  const data = useStaticQuery(graphql`
    query InfoQuery {
      allFile(filter: {relativeDirectory: {eq: "home-page-images"}}) {
        edges {
          node {
            name
            childImageSharp {
              id
              gatsbyImageData(
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  `)

  const useImage = data.allFile.edges.find(
    element => { return ( element.node.name.includes(props.imageName) )}
  )
  const imageData = useImage.node.childImageSharp.gatsbyImageData
  if (useImage) { 
    return ( <GatsbyImage image={imageData} className={props.class} alt='' /> )
  }
}
export default HomePageImage