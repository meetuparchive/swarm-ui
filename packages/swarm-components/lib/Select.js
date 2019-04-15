"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var Select = function Select(props) {
  var disabled = props.disabled,
      error = props.error,
      id = props.id,
      name = props.name,
      requiredText = props.requiredText,
      other = (0, _objectWithoutProperties2["default"])(props, ["disabled", "error", "id", "name", "requiredText"]);
  var selectState = disabled ? 'disabled' : error ? 'error' : 'default';
  return React.createElement("div", {
    "data-swarm-select": selectState
  }, React.createElement("div", {
    "data-swarm-select-wrapper": "1"
  }, React.createElement("select", (0, _extends2["default"])({
    name: name,
    id: id || name,
    required: Boolean(requiredText),
    disabled: disabled
  }, other)), React.createElement("span", {
    "data-swarm-select-arrow": "chevron-down"
  }, React.createElement(_Icon["default"], {
    shape: "chevron-down",
    size: "xs"
  }))));
};

var _default = Select;
exports["default"] = _default;
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
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Unique identifier for select tag."
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