"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _autosize = _interopRequireDefault(require("autosize"));

var getTextareaStatus = function getTextareaStatus(props) {
  return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

var getCharacterCount = function getCharacterCount() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length;
};

var CharCount = function CharCount(props) {
  return React.createElement("p", (0, _extends2["default"])({
    "data-swarm-textarea-char-count": true,
    className: "text--tiny"
  }, props));
};

var Textarea = function Textarea(props) {
  var maxLength = props.maxLength,
      autosize = props.autosize;
  var textareaRef = React.useCallback(function (node) {
    if (node !== null && props.autosize) {
      (0, _autosize["default"])(node);
    }
  }, [props.value]);
  var remainingCharacters = parseInt(maxLength, 10) - getCharacterCount(props.value);
  var textareaStatus = getTextareaStatus((0, _objectSpread2["default"])({}, props, {
    error: props.error || remainingCharacters < 0
  }));
  return React.createElement("div", {
    "data-swarm-textarea-wrapper": true
  }, React.createElement("textarea", (0, _extends2["default"])({
    "data-swarm-textarea": textareaStatus,
    ref: textareaRef
  }, props)), maxLength && React.createElement(CharCount, null, remainingCharacters));
};

var _default = Textarea;
exports["default"] = _default;
Textarea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Textarea",
  "props": {
    "autosize": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Resizes the height based on content"
    },
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
    },
    "maxLength": {
      "required": false,
      "flowType": {
        "name": "union",
        "raw": "string | number",
        "elements": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "description": "max length of input field"
    }
  }
};