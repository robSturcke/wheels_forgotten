import React from "react"
import ContactForm from "../components/form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InnerContainers from "../components/inner_containers"
import CarouselImg2 from "../images/index/carousel_img_2"

const Contact = () => (
  <Layout>
    <SEO title="Contact Phil at Wheels Forgotten" />
    <div className="wrap">
      <InnerContainers>
        <div className="col-md-12">
          <div className="col-md-12">
            <h1>Contact Us Today</h1>
            <h2>
              <a href="tel:12409252566">240-925-2566</a>
            </h2>
          </div>
        </div>
        <div className="col-sm-6">
          <CarouselImg2 />
        </div>
        <div className="col-sm-6">
          <ContactForm />
        </div>
      </InnerContainers>
    </div>
  </Layout>
)

export default Contact
