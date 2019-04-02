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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getStatus = function getStatus(props) {
  return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

var getCharacterCount = function getCharacterCount() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length;
};

var NumericalInput = function NumericalInput(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      other = _objectWithoutProperties(props, ["className"]);

  return React.createElement("div", {
    "data-swarm-number-input": getStatus(props),
    className: className
  }, React.createElement("input", _extends({
    "data-swarm-number-input-field": true,
    type: "number",
    pattern: "[0-9]*"
  }, other)), React.createElement("button", {
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
    "className": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Classname of wrapper, specified because it is not applied with other"
    },
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