import React from "react"
import Img from "gatsby-image"
import LogoInstagram from "../images/logo_instagram"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

const Insta = ({ text }) => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent(limit: 40) {
        edges {
          node {
            caption
            localImage {
              childImageSharp {
                fixed(width: 120, height: 120, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  let instaImages = _get(data, "allInstagramContent.edges")

  return (
    <div className="col-12">
      <div className="mt-3">
        <span>
          <a
            className="insta_link"
            href={`https://instagram.com/wheelsforgotten`}
          >
            Check Out Our Latest Work!
          </a>
        </span>
      </div>
      <div
        className="mb-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "0rem -0.5rem",
          padding: "0.5rem 0",
        }}
      >
        {instaImages.map((item, i) => (
          <div
            key={i}
            style={{
              boxShadow: 0,
              display: "block",
              margin: "0.5rem",
              maxWidth: "calc(33% - 1rem)",
              width: "120px",
            }}
          >
            <Img
              alt={item.node.caption}
              fixed={item.node.localImage.childImageSharp.fixed}
              style={{
                width: "100%",
                marginTop: 0,
                transition: "200ms box-shadow linear",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Insta
