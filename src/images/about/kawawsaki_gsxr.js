import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const KawasakiGSXR = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about/cpFBcE6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default KawasakiGSXR
