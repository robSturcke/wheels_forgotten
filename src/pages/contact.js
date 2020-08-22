import React from "react"
import ContactForm from "../components/form"
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <div className="wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">phone home</div>
          <div className="col-md-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
