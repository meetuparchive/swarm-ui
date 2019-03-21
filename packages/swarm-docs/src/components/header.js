import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => {
  return (
    <h1 className="docs-title">
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        <p>{siteTitle}</p>
      </Link>
    </h1>
  )
}

export default Header
