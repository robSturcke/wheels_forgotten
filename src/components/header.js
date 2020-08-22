import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../images/WF.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav_wrap">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img className="navbar_brand" src={Logo} alt={siteTitle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
