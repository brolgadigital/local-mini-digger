const path = require('path')
const config = require('./lmd-config')

const here = (...p) => path.join(__dirname, ...p)

require("dotenv").config({
  path: '.env.${process.env.NODE_ENV}',
})

module.exports = {
  siteMetadata: {
    url: config.siteUrl,
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: [
      'Machine Hire',
      'Excavation',
      'Rubbish removal',
    ],
    canonicalUrl: config.siteUrl,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
      altLogo: config.altLogo,
    },
    social: {
      fbAppID: '',
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-1CQTBX7Z7G",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/LMD-icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "react-feather",
    "react-fast-marquee",
    "emailjs-com",
  ],
};
