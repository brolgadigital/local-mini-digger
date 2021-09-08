import React from 'react'
import { Helmet } from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import config from '../../../lmd-config'

export default function LMD() {

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: {description: siteDescription},
    },
  } = data

  const frontmatter = {}
  const {
    description = siteDescription,
    title = config.siteTitle,
  } = frontmatter

    return (
        <>
            <Helmet
                title={title}
                meta={[
                {name: 'description', content: description},
                ]}
            >
                <html lang="en" />
                <noscript>This site runs best with JavaScript enabled.</noscript>
            </Helmet>
        </>
    )
}
