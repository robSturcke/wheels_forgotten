import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroCarousel from "../components/intro_carousel"
import IndexVan from "../images/index/index_van"
import DeTomaso from "../images/index/de_tomaso"
import AboutBlurb from "../components/index/about_blurb"
import Services from "../components/index/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="carousel_wrap">
      <div className="wrap">
        <IntroCarousel />
      </div>
    </div>
    <div className="wrap">
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="py-3">
            <h1 className="text-center">Wheels Forgotten</h1>
          </div>
        </div>
        <div className="col-md-6">
          <DeTomaso />
        </div>
        <div className="col-md-6">
          <div className="p-4">
            <div className="text-center">
              <h2>Services and Sales</h2>
            </div>
            <Services />
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4">
            <AboutBlurb />
          </div>
        </div>
        <div className="col-md-6">
          <IndexVan />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
