import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexVan from "../images/index/index_van"
import AboutBlurb from "../components/index/about_blurb"
import IndexHero from "../components/index/index_hero"
import IndexImg2 from "../images/index/index_img2"
import Services from "../components/index/services"
import Insta from "../components/insta"
import CarouselImg2 from "../images/index/carousel_img_2"
import CarouselImg3 from "../images/index/carousel_img_3"

const IndexPage = () => (
  <Layout>
    <SEO title="Wheels Forgotten" />
    <IndexHero />
    <div className="wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="hero_header text-center">Wheels Forgotten</h1>
          </div>
          <div className="col-md-6">
            <AboutBlurb />
          </div>
          <div className="col-md-6">
            <Services />
          </div>
          <div className="col-md-12">
            <div className="py-3">
              <div className="border-bottom" />
            </div>
          </div>
          <div className="col-md-6">
            <CarouselImg2 />
            <figure className="figure">
              <figcaption className="figure-caption">
                1957 Chevrolet 4400: Dash Guages Before
              </figcaption>
            </figure>
          </div>
          <div className="col-md-6">
            <CarouselImg3 />
            <figure className="figure">
              <figcaption className="figure-caption">
                1957 Chevrolet 4400: Dash Guages After
              </figcaption>
            </figure>
          </div>
          <div className="col-md-6">
            <IndexImg2 />
            <figure className="figure">
              <figcaption className="figure-caption">
                2014 Chevy Camaro
              </figcaption>
            </figure>
          </div>
          <div className="col-md-6">
            <IndexVan />
            <figure className="figure">
              <figcaption className="figure-caption">
                1988 Plymouth Voyager LE - Lowered 3”, 1991 6G72 swap, 10:1
                Diamante Pistons, head work, custom exhaust
              </figcaption>
            </figure>
          </div>
          <div className="col-12">
            <div className="py-3">
              <div className="border-bottom" />
            </div>
            <Insta />
            <div className="py-5" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
