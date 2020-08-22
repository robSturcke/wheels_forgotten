import React from "react"
import { Carousel } from "react-bootstrap"
import CarouselImg1 from "../images/index/carousel_img_1"
import CarouselImg2 from "../images/index/carousel_img_2"
import CarouselImg3 from "../images/index/carousel_img_3"
import CarouselImg4 from "../images/index/carousel_img_4"
import CarouselImg5 from "../images/index/carousel_img_5"

const IntroCarousel = () => (
  <Carousel touch="true">
    <Carousel.Item>
      <CarouselImg1 className="d-block w-100" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg2 />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg3 />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg4 />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg5 />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default IntroCarousel
