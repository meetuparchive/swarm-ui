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

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
var Checkbox = function Checkbox(props) {
  var checked = props.checked,
      label = props.label,
      id = props.id,
      disabled = props.disabled,
      children = props.children,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      rest = (0, _objectWithoutProperties2["default"])(props, ["checked", "label", "id", "disabled", "children", "onChange", "name", "value"]);
  return React.createElement("label", (0, _extends2["default"])({
    "data-swarm-checkbox": disabled ? 'disabled' : 'default',
    htmlFor: id,
    disabled: disabled
  }, rest), React.createElement("span", {
    "data-swarm-checkbox-field": checked ? 'checked' : 'unchecked',
    role: "checkbox",
    "aria-checked": checked
  }, checked && React.createElement(_Icon["default"], {
    shape: "check",
    size: "xs",
    color: disabled ? '#A2A2A2' : '#ffffff'
  })), React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    readOnly: !onChange || disabled,
    name: name,
    value: value
  }), React.createElement("span", null, label || children));
};

var _default = Checkbox;
exports["default"] = _default;
Checkbox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Checkbox",
  "props": {
    "checked": {
      "required": true,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the box should be checked."
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the box should be interactive."
    },
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "An identifier for the checkbox."
    },
    "onChange": {
      "required": false,
      "flowType": {
        "name": "signature",
        "type": "function",
        "raw": "() => mixed",
        "signature": {
          "arguments": [],
          "return": {
            "name": "mixed"
          }
        }
      },
      "description": "A callback function that is called when the checkbox is toggled."
    },
    "children": {
      "required": false,
      "flowType": {
        "name": "ReactNode",
        "raw": "React.Node"
      },
      "description": "Child nodes that would be placed if there is no label."
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "A label for your checkbox input. It will not be shown if `children` are passed to the component."
    },
    "name": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Name for checkbox form field."
    },
    "value": {
      "required": false,
      "flowType": {
        "name": "union",
        "raw": "string | boolean",
        "elements": [{
          "name": "string"
        }, {
          "name": "boolean"
        }]
      },
      "description": "Value for checkbox form field."
    }
  }
};