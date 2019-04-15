"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var ICON_SIZES = Object.freeze({
  XXS: 'xxs',
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl'
});

/**
 * @module TextInput
 */
var TextInput = function TextInput(props) {
  var name = props.name,
      error = props.error,
      isSearch = props.isSearch,
      pattern = props.pattern,
      disabled = props.disabled,
      id = props.id,
      iconShape = props.iconShape,
      _props$iconSize = props.iconSize,
      iconSize = _props$iconSize === void 0 ? 'xs' : _props$iconSize,
      other = (0, _objectWithoutProperties2["default"])(props, ["name", "error", "isSearch", "pattern", "disabled", "id", "iconShape", "iconSize"]);
  var wrapperState = iconShape ? 'icon' : 'default';
  var inputState = disabled ? 'disabled' : error ? 'error' : 'default';
  return React.createElement("div", {
    "data-swarm-text-input-wrapper": wrapperState
  }, React.createElement("input", (0, _extends2["default"])({
    "data-swarm-text-input": inputState,
    type: isSearch ? 'search' : 'text',
    name: name,
    pattern: pattern,
    disabled: disabled,
    id: id
  }, other)), iconShape && React.createElement("span", {
    "data-swarm-input-icon": iconShape
  }, React.createElement(_Icon["default"], {
    shape: iconShape,
    size: iconSize,
    "aria-hidden": true
  })));
};

exports.TextInput = TextInput;
var _default = TextInput;
exports["default"] = _default;
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
      "required": true,
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
    },
    "iconShape": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Name of icon to render in the input"
    },
    "iconSize": {
      "required": false,
      "flowType": {
        "name": "$Values",
        "elements": [{
          "name": "ICON_SIZES"
        }],
        "raw": "$Values<typeof ICON_SIZES>"
      },
      "description": "Optional size for icon if `iconShape` is provided.\nDefault size is `xs`"
    }
  }
};