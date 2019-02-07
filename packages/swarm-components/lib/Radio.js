function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Radio = props => {
  const {
    checked,
    label,
    id = 'a',
    disabled,
    value,
    children,
    ...rest
  } = props;
  return React.createElement("label", _extends({
    "data-swarm-radio": disabled ? 'disabled' : 'default',
    for: id,
    disabled: disabled
  }, rest), React.createElement("span", {
    "data-swarm-radio-field": checked ? 'checked' : 'unchecked',
    tabIndex: "0",
    role: "checkbox",
    "aria-checked": checked
  }, checked && React.createElement("span", {
    "data-swarm-radio-dot": true
  })), React.createElement("input", {
    type: "radio",
    id: id,
    checked: checked,
    disabled: disabled,
    value: value
  }), React.createElement("span", null, label || children));
};

export default Radio;