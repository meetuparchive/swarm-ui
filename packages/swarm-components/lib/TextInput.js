function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

const getInputStatus = props => {
  let status = 'default';
  if (props.error) status = 'error';
  if (props.disabled) status = 'disabled';
  return status;
};
/**
 * @module TextInput
 */


export const TextInput = props => {
  const {
    name,
    isSearch,
    label,
    pattern,
    disabled,
    error,
    id,
    ...other
  } = props;
  return React.createElement(React.Fragment, null, React.createElement("label", {
    for: id
  }, label), React.createElement("input", _extends({
    "data-swarm-text-input": getInputStatus(props),
    type: isSearch ? 'search' : 'text',
    name: name,
    pattern: pattern,
    disabled: disabled,
    id: id
  }, other)));
};
TextInput.defaultProps = {
  requiredText: '*'
};
export default TextInput;