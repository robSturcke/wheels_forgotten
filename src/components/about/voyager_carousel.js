import React from "react"
import { Carousel } from "react-bootstrap"
import PlymouthAngle from "../../images/about/plymouth_angle"
import PlymouthFront from "../../images/about/plymouth_front"
import PlymouthInterior from "../../images/about/plymouth_interior"

const VoyagerCarousel = () => (
  <Carousel touch interval={null}>
    <Carousel.Item>
      <PlymouthAngle />
    </Carousel.Item>
    <Carousel.Item>
      <PlymouthFront />
    </Carousel.Item>
    <Carousel.Item>
      <PlymouthInterior />
    </Carousel.Item>
  </Carousel>
)

export default VoyagerCarousel
