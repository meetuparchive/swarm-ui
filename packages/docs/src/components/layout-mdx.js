import React from 'react'
import Layout from './layout'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'

// imports for use in react-live
import * as scope from 'swarm-components'

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

export default class MDXLayout extends React.Component {
  render() {
    return (
      <Layout>
        <MDXProvider components={{ pre: PreComponent }}>
          {this.props.children}
        </MDXProvider>
      </Layout>
    )
  }
}
