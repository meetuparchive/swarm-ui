"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextInput = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @module TextInput
 */
var TextInput = function TextInput(props) {
  var name = props.name,
      error = props.error,
      isSearch = props.isSearch,
      label = props.label,
      pattern = props.pattern,
      disabled = props.disabled,
      id = props.id,
      other = _objectWithoutProperties(props, ["name", "error", "isSearch", "label", "pattern", "disabled", "id"]);

  var inputState = disabled ? 'disabled' : error ? 'error' : 'default';
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

exports.TextInput = TextInput;
var _default = TextInput;
exports.default = _default;
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