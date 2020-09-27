import React from "react"
import { Carousel } from "react-bootstrap"
import Chevy4400Bed from "../../images/about/chevy_4400_bed"
import Chevy4400FinBed from "../../images/about/chevy_4400_fin_bed"
import Chevy4400OldBed from "../../images/about/chevy_4400_old_bed"
import CarouselImg2 from "../../images/index/carousel_img_2"
import CarouselImg3 from "../../images/index/carousel_img_3"

const Chevy4400Carousel = () => (
  <Carousel touch interval={null}>
    <Carousel.Item>
      <Chevy4400OldBed />
    </Carousel.Item>
    <Carousel.Item>
      <Chevy4400Bed />
    </Carousel.Item>
    <Carousel.Item>
      <Chevy4400FinBed />
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg2 />
    </Carousel.Item>
    <Carousel.Item>
      <CarouselImg3 />
    </Carousel.Item>
  </Carousel>
)

export default Chevy4400Carousel
