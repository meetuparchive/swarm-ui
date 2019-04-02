"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getStatus = function getStatus(props) {
  return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

var getCharacterCount = function getCharacterCount() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length;
};

var NumericalInput = function NumericalInput(props) {
  return React.createElement("div", {
    "data-swarm-number-input": getStatus(props)
  }, React.createElement("input", _extends({
    "data-swarm-number-input-field": true,
    type: "number",
    pattern: "[0-9]*"
  }, props)), React.createElement("button", {
    "data-swarm-number-input-increment": true,
    onClick: props.onIncrament
  }, React.createElement(_Icon.default, {
    shape: "plus",
    size: "xs"
  })), React.createElement("button", {
    "data-swarm-number-input-decrement": true,
    onClick: props.onDecrement
  }, React.createElement(_Icon.default, {
    shape: "minus",
    size: "xs"
  })));
};

var _default = NumericalInput;
exports.default = _default;
NumericalInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NumericalInput",
  "props": {
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the numerical input should be interactive."
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