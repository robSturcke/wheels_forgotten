import React from "react"
import Image from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import Arrow from "../images/arrow"

const Insta = () => {
  const instaPhotos = useInstagram()

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="mt-3">
            <h4>
              <a
                className="insta_link float-right"
                href={`https://instagram.com/wheelsforgotten`}
              >
                Checkout Our Latest Work
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: ".5rem -0.5rem 3rem -0.5rem",
          padding: "0.5rem 0",
        }}
      >
        {instaPhotos.map(photo => (
          <a
            href={`https://instagram.com/p/${photo.id}/`}
            style={{
              boxShadow: 0,
              display: "block",
              margin: "0.5rem",
              maxWidth: "calc(33% - 1rem)",
              width: "120px",
              transition: "200ms box-shadow linear",
            }}
            key={photo.id}
          >
            <Image
              key={photo.id}
              style={{
                width: "100%",
                marginTop: 0,
                borderRadius: "3px",
              }}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
    </>
  )
}

export default Insta
