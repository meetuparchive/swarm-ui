import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Nav from './nav';
import { setConfig } from 'react-hot-loader';
// icon sprite
// import 'meetup-web-components/assets/css/main.css'
import { Toaster } from '@meetup/swarm-components';
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
        allFile(filter: {extension: {eq: "mdx"}, absolutePath: {regex: "/pages/"}}) {
          group(field: relativeDirectory) {
            nodes {
              relativeDirectory
              name
            }
          }
        }
      }
      `}
      render={data => (
        <Toaster>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Meetup\'s design system and react component library' },
              { name: 'keywords', content: 'swarm design system, meetup, react design system' },
            ]}
          >
            <html lang="en" />
            {require('swarm-icons/dist/sprite/sprite.inc')}
          </Helmet>
          <Nav files={data.allFile.group} />
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
        </Toaster>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
