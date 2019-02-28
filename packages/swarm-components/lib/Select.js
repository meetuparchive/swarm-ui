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
  }, label), helperText && React.createElement("div", null, helperText), React.createElement("select", _extends({
    name: name,
    id: id || name,
    required: Boolean(required)
  }, other)), React.createElement(Icon, {
    shape: "chevron-down",
    size: "xs"
  }));
};

export default Select;
Select.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Select",
  "props": {
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": ""
    },
    "error": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": ""
    },
    "helperText": {
      "required": false,
      "flowType": {
        "name": "string"
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
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": ""
    },
    "name": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": ""
    },
    "required": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": ""
    }
  }
};