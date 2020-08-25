import React from "react"
import Layout from "../components/layout"
import AboutWF from "../components/about/about_wf"
import AboutVehicles from "../components/about/about_vehicles"
import SEO from "../components/seo"

const About = () => (
  <div>
    <Layout>
      <SEO title="About Wheels Forgotten and Phil Jones" />
      <AboutWF />
      <AboutVehicles />
    </Layout>
  </div>
)

export default About
