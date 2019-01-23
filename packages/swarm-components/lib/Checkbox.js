function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';

const Checkbox = props => {
  const {
    checked,
    label,
    id = 'a',
    ...rest
  } = props;
  return React.createElement("label", _extends({
    for: id
  }, rest, {
    "data-swarm-checkbox": true
  }), React.createElement("span", null, React.createElement(Icon, {
    shape: "check",
    size: "xs"
  })), React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: checked
  }), React.createElement("span", null, label));
};

export default Checkbox;