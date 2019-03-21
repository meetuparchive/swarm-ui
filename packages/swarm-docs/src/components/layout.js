import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Nav from './nav';
import { setConfig } from 'react-hot-loader';
// icon sprite
// import 'meetup-web-components/assets/css/main.css'
import '../assets/graphik.css';
import '@meetup/swarm-styles/dist/main.css';
import '@meetup/swarm-styles/dist/global.css';
import '../assets/docs.css';

setConfig({ pureSFC: true });

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
        # Get all files for Nav
        allFile(filter: { extension: { eq: "mdx" } }) {
          edges {
            node {
              name
            }
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
          <Nav fileNames={ data.allFile.edges.map((value) => value.node.name)} />
          <div className="main">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
              {children}
              <div
                dangerouslySetInnerHTML={{
                  __html: require('swarm-icons/dist/sprite/sprite.inc'),
                }}
                style={{ height: 0, overflow: 'hidden' }}
              />
            </div>
        </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
