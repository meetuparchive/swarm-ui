"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var getTextareaStatus = function getTextareaStatus(props) {
  return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

var getCharacterCount = function getCharacterCount() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length;
};

var Textarea = function Textarea(props) {
  console.log('textarea char count', getCharacterCount(props.value));
  return React.createElement("textarea", (0, _extends2["default"])({
    "data-swarm-textarea": getTextareaStatus(props)
  }, props));
};

var _default = Textarea;
exports["default"] = _default;
Textarea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Textarea",
  "props": {
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the textarea should be interactive."
    },
    "error": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the textarea renders an error state."
    },
    "value": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Value for textarea."
    }
  }
};