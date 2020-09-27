import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { navigateTo } from "gatsby-link"
import Recaptcha from "react-google-recaptcha"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const RECAPTCHA_KEY = process.env.GATSBY_SITE_KEY

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <>
        <Form
          className="contact_form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks/"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="phone"
              name="phone"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="contact.ControlSelect">
            <Form.Label>Desired Service or Inquiry</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option disabled>Select...</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Detailing">Detailing</option>
              <option value="Reconditioning">Reconditioning</option>
              <option value="Restorations">Restorations</option>
              <option value="Revivals/First Starts and Drives">
                Revivals/First Starts and Drives
              </option>
              <option value="Paint Correction">Paint Correction</option>
              <option value="Welding and Minor Fabrication">
                Welding and Minor Fabrication
              </option>
              <option value="General Mechanics">General Mechanics</option>
              <option value="Rust Repair">Rust Repair</option>
              <option value="Body Work">Body Work</option>
              <option value="Engine Swaps">Engine Swaps</option>
              <option value="Parts Sales">Parts Sales</option>
              <option value="Car and Motorcycle Sale">
                Car and Motorcycle Sales
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Notes/Requests</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              name="message"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
          </Form.Group>
          <Form.Group>
            <div className="float-right">
              <Button type="submit">Send</Button>
            </div>
          </Form.Group>
        </Form>
      </>
    )
  }
}
