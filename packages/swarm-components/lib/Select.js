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
    requiredText,
    ...other
  } = props;
  const selectState = disabled ? 'disabled' : error ? 'error' : 'default';
  return React.createElement("div", {
    "data-swarm-select": selectState
  }, label && React.createElement("label", {
    htmlFor: name
  }, label, requiredText ? React.createElement("span", null, " ", requiredText) : ''), helperText && React.createElement("p", {
    "data-swarm-select-helper-text": "1"
  }, helperText), React.createElement("div", {
    "data-swarm-select-wrapper": "1"
  }, React.createElement("select", _extends({
    name: name,
    id: id || name,
    required: Boolean(requiredText),
    disabled: disabled
  }, other)), React.createElement("span", {
    "data-swarm-select-arrow": "chevron-down"
  }, React.createElement(Icon, {
    shape: "chevron-down",
    size: "xs"
  }))));
};

export default Select;