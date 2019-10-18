import React from 'react';
import PropTypes from 'prop-types';

const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

const PropsTable = props => {
  console.log('props', props);
  const { propMetaData = { props: {} }, ...rest } = props;

  return !isEmpty(propMetaData.props) && (
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
              <td className="text-code"><pre>{key}</pre></td>
              <td>{prop.flowType.name}</td>
              {prop.required ? (
                <td className="text-required">required</td>
              ) : (
                <td>optional</td>
              )}
              {prop.defaultValue ? (
                <td className="text-highlight">{prop.defaultValue.value}</td>
              ) : (
                <td>none</td>
              )}
              {prop.description ? <td>{prop.description}</td> : <td />}
            </tr>
          );
        })}
      </tbody>
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
