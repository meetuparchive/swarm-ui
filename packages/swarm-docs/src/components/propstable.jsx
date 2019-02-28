import React from 'react'
import PropTypes from 'prop-types'

const PropsTable = props => {
  const { propMetaData = { props: {} },...rest } = props
  return (
    <table {...rest}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required?</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(propMetaData.props).map(key => {
          const prop = propMetaData.props[key]
          return (
            <tr key={key}>
              <td style={{ color: 'rgb(17, 147, 154)' }}>{key}</td>
              <td>{prop.flowType.name}</td>
              {prop.required ? (
                <td style={{ color: 'rgb(255, 76, 34)' }}>required</td>
              ) : (
                <td style={{ color: '#c6c6c6' }}>optional</td>
              )}
              {prop.defaultValue ? (
                <td style={{ color: 'rgb(236, 171, 32)' }}>
                  {prop.defaultValue.value}
                </td>
              ) : (
                <td style={{ color: '#c6c6c6' }}>none</td>
              )}
              {prop.description ? <td>{prop.description}</td> : <td />}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

PropsTable.propTypes = {
  /** this is the `metadata.props` field of what metadata you get from the react-docgen-loader.  */
  propMetaData: PropTypes.object,
}
PropsTable.defaultProps = {
  propMetaData: {},
}

export default PropsTable