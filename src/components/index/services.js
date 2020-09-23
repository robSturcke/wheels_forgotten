import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import Lug from "../../images/lug.svg"

const lug = <img src={Lug} className="list_icon" alt="lug" />

const Services = () => (
  <div className="services">
    <Card>
      <Card.Header>
        <div className="text-center">Services</div>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{lug} Detailing</ListGroup.Item>
        <ListGroup.Item>{lug} Reconditioning</ListGroup.Item>
        <ListGroup.Item>{lug} Restorations</ListGroup.Item>
        <ListGroup.Item>{lug} Revivals/First Starts and Drives</ListGroup.Item>
        <ListGroup.Item>{lug} Paint Correction</ListGroup.Item>
        <ListGroup.Item>{lug} Welding and Minor Fabrication</ListGroup.Item>
        <ListGroup.Item>{lug} General Mechanics</ListGroup.Item>
        <ListGroup.Item>{lug} Rust Repair</ListGroup.Item>
        <ListGroup.Item>{lug} Body Work</ListGroup.Item>
        <ListGroup.Item>{lug} Engine Swaps</ListGroup.Item>
        <ListGroup.Item>{lug} Parts Sales</ListGroup.Item>
        <ListGroup.Item>{lug} Car and Motorcycle Sales</ListGroup.Item>
      </ListGroup>
    </Card>
  </div>
)

export default Services
