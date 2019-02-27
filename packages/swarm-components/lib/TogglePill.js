function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

const TogglePill = props => {
  const {
    checked,
    disabled,
    name,
    label,
    children,
    ...rest
  } = props;
  return React.createElement("div", _extends({
    "data-swarm-toggle-pill": checked ? 'checked' : 'unchecked',
    role: "checkbox",
    "aria-checked": checked
  }, rest), React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    name: name
  }), React.createElement("span", null, label || children));
};

export default TogglePill;
TogglePill.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TogglePill",
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
    "label": {
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