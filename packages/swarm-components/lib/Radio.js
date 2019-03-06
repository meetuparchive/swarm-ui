function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Radio = props => {
  const {
    checked,
    label,
    id,
    disabled,
    value,
    children,
    name,
    ...other
  } = props;
  return React.createElement("label", _extends({
    "data-swarm-radio": disabled ? 'disabled' : 'default',
    htmlFor: id || name,
    disabled: disabled
  }, other), React.createElement("span", {
    "data-swarm-radio-field": checked ? 'checked' : 'unchecked',
    tabIndex: "0",
    role: "checkbox",
    "aria-checked": checked
  }, checked && React.createElement("span", {
    "data-swarm-radio-dot": true
  })), React.createElement("input", {
    type: "radio",
    id: id || name,
    name: name,
    checked: checked,
    disabled: disabled,
    value: value
  }), React.createElement("span", null, label || children));
};

export default Radio;
Radio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Radio",
  "props": {
    "checked": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the radio button is checked."
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the input should be interactive."
    },
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "A unique identifier for the input."
    },
    "name": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Used to associate a group of radio buttons.\nOnly one radio button in a group can be selected."
    },
    "value": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Value of the input."
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Label for the input."
    },
    "children": {
      "required": true,
      "flowType": {
        "name": "ReactReactElement",
        "raw": "React.ReactElement<*>",
        "elements": [{
          "name": "unknown"
        }]
      },
      "description": "Use children as an alternative to the `label` prop for more complex input labels."
    }
  }
};