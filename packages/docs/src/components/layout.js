import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import { setConfig } from 'react-hot-loader'
// icon sprite
// hacks to include generated sprite with html-loader. line 50
import './layout.css'
// old swarm styles
import 'meetup-web-components/assets/css/main.css'
import 'styles/dist/main.css'

setConfig({ pureSFC: true })

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
            {require('swarm-icons/dist/sprite/sprite.inc')}
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
            <div
              dangerouslySetInnerHTML={{
                __html: require('swarm-icons/dist/sprite/sprite.inc'),
              }}
              style={{ height: 0, overflow: 'hidden' }}
            />
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
