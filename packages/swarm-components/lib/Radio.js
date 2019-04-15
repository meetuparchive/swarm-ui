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

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
var Radio = function Radio(props) {
  var checked = props.checked,
      label = props.label,
      id = props.id,
      disabled = props.disabled,
      value = props.value,
      children = props.children,
      name = props.name,
      other = (0, _objectWithoutProperties2["default"])(props, ["checked", "label", "id", "disabled", "value", "children", "name"]);
  return React.createElement("label", {
    "data-swarm-radio": disabled ? 'disabled' : 'default',
    disabled: disabled
  }, React.createElement("span", {
    "data-swarm-radio-field": checked ? 'checked' : 'unchecked',
    tabIndex: "0",
    role: "checkbox",
    "aria-checked": checked
  }, checked && React.createElement("span", {
    "data-swarm-radio-dot": true
  })), React.createElement("input", (0, _extends2["default"])({
    type: "radio",
    id: id,
    name: name,
    checked: checked,
    disabled: disabled,
    value: value
  }, other)), React.createElement("span", null, label || children));
};

var _default = Radio;
exports["default"] = _default;
Radio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Radio",
  "props": {
    "checked": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the radio button is checked."
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the input should be interactive."
    },
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "A unique identifier for the input."
    },
    "name": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Used to associate a group of radio buttons.\nOnly one radio button in a group can be selected."
    },
    "value": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Value of the input."
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "String label for the input. Will override any children values."
    },
    "children": {
      "required": false,
      "flowType": {
        "name": "ReactNode",
        "raw": "React.Node"
      },
      "description": "Use children as an alternative to the `label` prop for more complex input labels.\nThe `label` prop will override children."
    }
  }
};