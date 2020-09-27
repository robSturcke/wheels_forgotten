import React, { useState } from "react"
import PropTypes from "prop-types"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../images/WF.svg"
import { Link } from "gatsby"
import MenuIcon from "../images/menu_icon"
import CloseIcon from "../images/close_icon"

const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : null
}

const activeStyle = {
  color: "rgb(30, 35, 108)",
}

const Header = ({ siteTitle }) => {
  const [onToggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!onToggle)

  return (
    <header>
      <div className="nav_wrap">
        <Navbar expand="md" fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <img className="navbar_brand" src={Logo} alt={siteTitle} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
            {onToggle ? (
              <CloseIcon baseLayer="icon" />
            ) : (
              <MenuIcon baseLayer="icon" />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <li className="nav-item">
                <Link
                  activeStyle={activeStyle}
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeStyle={activeStyle}
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeStyle={activeStyle}
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
