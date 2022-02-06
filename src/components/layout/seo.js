import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({page, desc}) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          image
          siteUrl
          title
          twitterUsername
        }
      }
    }
  `)
  const {author,description,image,siteUrl,title,twitterUsername} = site.siteMetadata
  console.log(site.siteMetadata)

  return <Helmet htmlAttributes={{lang:"en"}} title={`${page} | ${title}`}>
    <meta name="description" content={desc || description}/>

    <meta name="image" content={image}/>
    <meta name="keywords" content="Portafolio, Jack Sari, Jack Anthony Sánchez Rivera, React, Frontend"/>
    <meta name="author" content={author} />
    <meta name="copyright" content="Propietario del copyright" />
    {/* twitter card*/}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:creator" content={twitterUsername}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={desc || description}/>
    <meta name="twitter:image" content={`${image}`}/>
    {/* OpenGraph tags */}
    <meta property="og:url" content={siteUrl} />
    <meta property="og:title" content={page} />
    <meta property="og:description" content={desc || description} />
    <meta property="og:image" content={image} />
    <meta property="fb:app_id" content='' />
  </Helmet>
}


export default Seo
