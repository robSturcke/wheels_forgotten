import React from "react"
import ContactForm from "../components/form"
import Layout from "../components/layout"
import Seo from "../components/seo"
import InnerContainers from "../components/inner_containers"
import CarouselImg3 from "../images/index/carousel_img_3"

const Contact = () => (
  <Layout>
    <Seo title="Contact Wheels Forgotten" />
    <div className="wrap">
      <InnerContainers>
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="contact_header text-center">Contact Us Today</h1>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="pt-3">
            <ContactForm />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="pt-3">
            <div className="py-3">
              <CarouselImg3 />
            </div>
          </div>
        </div>
      </InnerContainers>
    </div>
  </Layout>
)

export default Contact
