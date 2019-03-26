"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _FieldLabel = _interopRequireDefault(require("./FieldLabel"));

var _FieldHelper = _interopRequireDefault(require("./FieldHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(props) {
  var disabled = props.disabled,
      error = props.error,
      helperText = props.helperText,
      id = props.id,
      label = props.label,
      name = props.name,
      requiredText = props.requiredText,
      other = _objectWithoutProperties(props, ["disabled", "error", "helperText", "id", "label", "name", "requiredText"]);

  var selectState = disabled ? 'disabled' : error ? 'error' : 'default';
  return React.createElement("div", {
    "data-swarm-select": selectState
  }, label && React.createElement(_FieldLabel.default, {
    htmlFor: name
  }, label, requiredText ? React.createElement("span", null, " ", requiredText) : ''), helperText && React.createElement(_FieldHelper.default, null, helperText), React.createElement("div", {
    "data-swarm-select-wrapper": "1"
  }, React.createElement("select", _extends({
    name: name,
    id: id || name,
    required: Boolean(requiredText),
    disabled: disabled
  }, other)), React.createElement("span", {
    "data-swarm-select-arrow": "chevron-down"
  }, React.createElement(_Icon.default, {
    shape: "chevron-down",
    size: "xs"
  }))));
};

var _default = Select;
exports.default = _default;
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