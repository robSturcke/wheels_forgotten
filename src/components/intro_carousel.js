import React from "react"
import { Carousel } from "react-bootstrap"
import CarouselImg1 from "../images/index/carousel_img_1"
import CarouselImg2 from "../images/index/carousel_img_2"
import CarouselImg3 from "../images/index/carousel_img_3"
import CarouselImg4 from "../images/index/carousel_img_4"
import CarouselImg5 from "../images/index/carousel_img_5"
import CarouselImg6 from "../images/index/carousel_img_6"

const IntroCarousel = () => (
  <Carousel touch>
    <Carousel.Item>
      <CarouselImg1 className="d-block w-100" />
      <Carousel.Caption>
        <h3>Restorations</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg2 />
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg3 />
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg4 />
      <Carousel.Caption>
        <h3>Resto-Mods</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg5 />
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg6 />
    </Carousel.Item>
  </Carousel>
)

export default IntroCarousel
