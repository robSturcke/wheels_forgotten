import React, { useState } from "react"
import PropTypes from "prop-types"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../images/WF.svg"
import { Link } from "gatsby"
import MenuIcon from "../images/menu_icon"
import CloseIcon from "../images/close_icon"
import Youtube from "../images/youtube"
import LogoInstagram from "../images/logo_instagram"
import EbayLogo from "../images/ebay_logo"

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
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.ebay.com/usr/pbjones92"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <EbayLogo
                    baseLayer="ebay_icon"
                    color0="color0"
                    color1="color1"
                    color2="color2"
                    color3="color3"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.youtube.com/channel/UCttQB8TBpRwh3BM4-nGL6Sg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Youtube baseLayer="nav_icon" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://instagram.com/wheelsforgotten"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LogoInstagram baseLayer="nav_icon" />
                </a>
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
