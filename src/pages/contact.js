import React from "react"
import ContactForm from "../components/form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Phil at Wheels Forgotten" />
    <div className="wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1>Contact Today</h1>
            <h2>
              <a href="tel:12409252566">240-925-2566</a>
            </h2>
          </div>
          <div className="col-sm-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
