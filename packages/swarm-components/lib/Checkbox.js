function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Checkbox = props => {
  const {
    checked,
    label,
    id = 'a',
    disabled,
    children,
    ...rest
  } = props;
  return React.createElement("label", _extends({
    "data-swarm-checkbox": disabled ? 'disabled' : 'default',
    for: id,
    disabled: disabled
  }, rest), React.createElement("span", {
    "data-swarm-checkbox-field": checked ? 'checked' : 'unchecked',
    tabIndex: "0",
    role: "checkbox",
    "aria-checked": checked
  }, checked && React.createElement(Icon, {
    shape: "check",
    size: "xs",
    color: disabled ? '#A2A2A2' : '#ffffff'
  })), React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: checked,
    disabled: disabled
  }), React.createElement("span", null, label || children));
};

export default Checkbox;
Checkbox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Checkbox",
  "props": {
    "checked": {
      "required": true,
      "flowType": {
        "name": "boolean"
      },
      "description": ""
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": ""
    },
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": ""
    },
    "name": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": ""
    }
  }
};