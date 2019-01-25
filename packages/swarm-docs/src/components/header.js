import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => {
  return (
    <div
      style={{
        background: 'white',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }} className="red">
          <Link
            to="/"
            style={{
              color: '#FF1154',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Header
