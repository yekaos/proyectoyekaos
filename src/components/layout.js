/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <h3 style={{ display: `inline` }}>proyectosyekaos.com</h3>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <li style={{ display: `inline`, marginRight: `1rem` }}>
          <Link to="/">Inicio</Link>
        </li>
        <li style={{ display: `inline`, marginRight: `1rem` }}>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li style={{ display: `inline` }}>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </header>
    {children}
    <footer style={{ marginTop: `2rem` }}>
      <p>© {new Date().getFullYear()}, yekaos.</p>
    </footer>
  </div>
)

export default Layout