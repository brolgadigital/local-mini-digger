import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SchemaOrg from './schema-org'
import config from '../../../lmd-config'
// import defaultMetaImage from '../../../static/images/metaImage.jpg'

function SEO({
  siteMetadata: seo,
  postData,
  metaImage,
  isBlogPost,
  frontmatter: postMeta = postData.childMarkdownRemark.frontmatter || {},
  title = postMeta.title || config.siteTitle,
  description = postMeta.plainTextDescription ||
    postMeta.description ||
    seo.description,
  image = metaImage?.startsWith('http:') || metaImage?.startsWith('https:')
    ? metaImage
    : `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  url = postMeta.slug
    ? `${seo.canonicalUrl}${postMeta.slug}`
    : seo.canonicalUrl,
  datePublished = isBlogPost ? postMeta.datePublished : false,
}) {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={altLogo} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        altLogo={altLogo}
        description={description}
        datePublished={datePublished}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </>
  )
}

function SEOWithQuery(props) {
  const {
    site: {siteMetadata},
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          organization {
            name
            url
            logo
          }
          social {
            fbAppID
          }
        }
      }
    }
  `)
  return <SEO siteMetadata={siteMetadata} {...props} />
}

SEOWithQuery.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  metaImage: PropTypes.string,
}

SEOWithQuery.defaultProps = {
  isBlogPost: false,
  postData: {childMarkdownRemark: {}},
  metaImage: null,
}

export default SEOWithQuery