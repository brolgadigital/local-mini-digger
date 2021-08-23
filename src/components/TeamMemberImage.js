import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const TeamMemberImage = (props) => {
    const data = useStaticQuery(graphql`
    query TeamQuery {
      allFile(filter: {relativeDirectory: {eq: "employee-images"}}) {
        edges {
          node {
            name
            childImageSharp {
              id
              gatsbyImageData(
                layout: CONSTRAINED, width: 300
              )
            }
          }
        }
      }
    }
  `)

  const useImage = data.allFile.edges.find(
    element => { return ( element.node.name.includes(props.image) )}
  )
  const imageData = useImage.node.childImageSharp.gatsbyImageData
  if (useImage) { 
    return ( <GatsbyImage image={imageData} alt='' /> )
  }
}
export default TeamMemberImage