function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

/**
 * @module TextInput
 */
export const TextInput = props => {
  const {
    name,
    error,
    isSearch,
    label,
    pattern,
    disabled,
    id,
    ...other
  } = props;
  const inputState = disabled ? 'disabled' : error ? 'error' : 'default';
  return React.createElement(React.Fragment, null, React.createElement("label", {
    htmlFor: id
  }, label), React.createElement("input", _extends({
    "data-swarm-text-input": inputState,
    type: isSearch ? 'search' : 'text',
    name: name,
    pattern: pattern,
    disabled: disabled,
    id: id
  }, other)));
};
export default TextInput;
TextInput.__docgenInfo = {
  "description": "@module TextInput",
  "methods": [],
  "displayName": "TextInput",
  "props": {
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the input should be interactive."
    },
    "error": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the field has an error."
    },
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "An identifier for the input."
    },
    "isSearch": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the input is a search field."
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Label for the input."
    },
    "name": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Name for the input."
    },
    "pattern": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "A regular expression that the input's value is checked against on form submission."
    },
    "value": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Value of input."
    }
  }
};