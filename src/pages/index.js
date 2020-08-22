import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroCarousel from "../components/intro_carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroCarousel />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
