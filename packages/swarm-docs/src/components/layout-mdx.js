import React from 'react'
import Layout from './layout'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'

// imports for use in react-live
import * as scope from '@meetup/swarm-components'

const PreComponent = ({ className, ...props }) => {
  return props.children.props.props &&
    props.children.props.props.className === 'language-.jsx' ? (
    <LiveProvider code={props.children.props.children} scope={scope}>
      <LiveEditor tabIndex="-1" />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  ) : (
    <pre {...props} className="pre-static" />
  )
}

// apply swarm classnames to classes used in markdown
const H1 = props => <h1 className="text--display" {...props}/>
const H2 = props => <h2 className="text--pageTitle" {...props}/>
const H3 = props => <h3 className="text--big" {...props}/>
const P = props => <p className="text--body" {...props}/>
const A = props => <a className="text--link" {...props}/>

export default class MDXLayout extends React.Component {
  render() {
    return (
      <Layout>
        <MDXProvider components={{ pre: PreComponent, h1: H1, h2: H2, h3: H3, p: P, a: A }}>
          {this.props.children}
        </MDXProvider>
      </Layout>
    )
  }
}
