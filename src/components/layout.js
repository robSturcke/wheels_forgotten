import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import "../stylesheets/App.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="content">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div className="text-center">
          © {new Date().getFullYear()}, Built by robSturcke •{` `}
          <a href="https://www.wheelsforgotten.com">Wheels Forgotten</a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
