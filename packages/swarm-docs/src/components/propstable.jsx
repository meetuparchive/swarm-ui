import React from 'react';
import PropTypes from 'prop-types';

const PropsTable = props => {
  const { propMetaData = { props: {} },...rest } = props;

  return (
    <table {...rest} className="props-table">
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
          const prop = propMetaData.props[key];

          return (
            <tr key={key}>
              <td><span className="text-code">{key}</span></td>
              <td>{prop.flowType.name}</td>
              {prop.required ? (
                <td><span className="text-required">required</span></td>
              ) : (
                <td><span>optional</span></td>
              )}
              {prop.defaultValue ? (
                <td>
                  <span className="text-highlight">{prop.defaultValue.value}</span>
                </td>
              ) : (
                <td><span>none</span></td>
              )}
              {prop.description ? <td><span>{prop.description}</span></td> : <td />}
            </tr>
          );
        })}
      </tbody>
      <tfoot><tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr></tfoot>
    </table>
  );
};

PropsTable.propTypes = {
  /** this is the `metadata.props` field of what metadata you get from the react-docgen-loader.  */
  propMetaData: PropTypes.object,
};

PropsTable.defaultProps = {
  propMetaData: {},
};

export default PropsTable;
