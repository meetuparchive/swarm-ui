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

var TogglePill = function TogglePill(props) {
  var checked = props.checked,
      disabled = props.disabled,
      label = props.label,
      children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["checked", "disabled", "label", "children"]);
  return React.createElement("button", (0, _extends2["default"])({
    "data-swarm-toggle-pill": checked ? 'checked' : 'unchecked',
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    checked: checked
  }, rest), React.createElement("span", null, label || children));
};

var _default = TogglePill;
exports["default"] = _default;
TogglePill.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TogglePill",
  "props": {
    "checked": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicates whether the toggle is selected"
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicates whether the toggle is disabled"
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Text label of the content"
    },
    "children": {
      "required": false,
      "flowType": {
        "name": "ReactNode",
        "raw": "React.Node"
      },
      "description": "Text label of the content, applied if label is not set"
    }
  }
};