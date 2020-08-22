import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroCarousel from "../components/intro_carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="wrap">
      <IntroCarousel />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Link to="/page-2/">Go to page 2</Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
