import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Kawasaki = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "index/kawasaki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{ maxWidth: "380px", margin: "auto", borderRadius: "3px" }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Kawasaki
