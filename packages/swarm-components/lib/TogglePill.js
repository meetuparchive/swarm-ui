function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

const TogglePill = props => {
  const {
    checked,
    disabled,
    label,
    children,
    ...rest
  } = props;
  return React.createElement("button", _extends({
    "data-swarm-toggle-pill": checked ? 'checked' : 'unchecked',
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    checked: checked
  }, rest), React.createElement("span", null, label || children));
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
      "description": "Indicates whether the toggle is selected"
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicates whether the toggle is disabled"
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Text label of the content"
    },
    "children": {
      "required": false,
      "flowType": {
        "name": "any"
      },
      "description": "Text label of the content, applied if label is not set"
    }
  }
};