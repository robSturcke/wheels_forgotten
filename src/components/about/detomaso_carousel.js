import React from "react"
import { Carousel } from "react-bootstrap"
import DetomasoHood from "../../images/about/detomaso_hood"
import DetomasoOpen from "../../images/about/detomaso_open"
import DeTomaso from "../../images/index/de_tomaso"

const DetomasoCarousel = () => (
  <Carousel touch interval={null}>
    <Carousel.Item>
      <DeTomaso />
    </Carousel.Item>
    <Carousel.Item>
      <DetomasoOpen />
    </Carousel.Item>
    <Carousel.Item>
      <DetomasoHood />
    </Carousel.Item>
  </Carousel>
)

export default DetomasoCarousel
