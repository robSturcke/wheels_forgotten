import React from "react"
import { Carousel } from "react-bootstrap"
import CarouselImg4 from "../../images/index/carousel_img_4"
import CarouselImg5 from "../../images/index/carousel_img_5"

const FordCrownCarousel = () => (
  <Carousel touch interval={null}>
    <Carousel.Item>
      <CarouselImg4 />
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg5 />
    </Carousel.Item>
  </Carousel>
)

export default FordCrownCarousel
