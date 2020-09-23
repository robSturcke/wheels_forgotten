import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const IndexHero = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "index/home.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`rgb(203, 209, 224)`}
          style={{
            width: "100%",
            minHeight: "900px",
            flexDirection: "column",
            backgroundPosition: "top center",
            backgroundRepeat: "none",
            backgroundSize: "cover",
          }}
        />
      )
    }}
  />
)

export default IndexHero
