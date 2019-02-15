function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';

const Select = props => {
  const {
    disabled,
    error,
    helperText,
    id,
    label,
    name,
    required,
    ...other
  } = props;
  return React.createElement("div", {
    "data-swarm-select": disabled ? 'disabled' : 'default'
  }, label && React.createElement("label", {
    htmlFor: name,
    "data-requiredtext": "*"
  }, label), helperText && React.createElement("div", null, helperText), React.createElement("div", {
    "data-swarm-select-wrapper": "1"
  }, React.createElement("select", _extends({
    name: name,
    id: id || name,
    required: required,
    disabled: disabled
  }, other)), React.createElement("span", {
    "data-swarm-select-arrow": "chevron-down"
  }, React.createElement(Icon, {
    shape: "chevron-down",
    size: "xs"
  }))));
};

export default Select;