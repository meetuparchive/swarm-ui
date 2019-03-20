function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';
import FieldLabel from './FieldLabel';
import FeildHelper from './FieldHelper';
import FieldHelper from './FieldHelper';

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
  }, label && React.createElement(FieldLabel, {
    htmlFor: name
  }, label, requiredText ? React.createElement("span", null, " ", requiredText) : ''), helperText && React.createElement(FieldHelper, null, helperText), React.createElement("div", {
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
      "description": "Whether the select menu is disabled."
    },
    "error": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Whether the select menu has errored."
    },
    "helperText": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Line of text further describing the select menu."
    },
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Unique identifier for select tag."
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Associated <label> tag for the <select> tag."
    },
    "name": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Name of select menu form field."
    },
    "requiredText": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Copy to be used for a required select field."
    }
  }
};