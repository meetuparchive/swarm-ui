function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';
const FILLS = {
  checked: 'var(--color-viridian)',
  unchecked: 'var(--color-gray-4)'
};

const Toggle = props => {
  const {
    checked,
    disabled,
    id,
    ...rest
  } = props;
  const checkedStatus = checked ? 'checked' : 'unchecked';
  const fillIcon = checked ? 'check' : 'cross';
  return React.createElement("label", _extends({
    "data-swarm-toggle": checkedStatus,
    role: "checkbox",
    "aria-checked": checked,
    id: id
  }, rest), React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    name: name,
    id: id
  }), React.createElement("span", {
    "data-swarm-toggle-switch-disc": true
  }, React.createElement(Icon, {
    shape: fillIcon,
    size: "xs",
    color: FILLS[checkedStatus]
  })));
};

export default Toggle;