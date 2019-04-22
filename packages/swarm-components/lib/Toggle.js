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

var FILLS = {
  checked: 'var(--color-viridian)',
  unchecked: 'var(--color-gray-4)'
};

var Toggle = function Toggle(props) {
  var _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      rest = (0, _objectWithoutProperties2["default"])(props, ["checked", "disabled"]);
  var checkedStatus = checked ? 'checked' : 'unchecked';
  var fillIcon = checked ? 'check' : 'cross';
  return React.createElement("button", (0, _extends2["default"])({
    "data-swarm-toggle": checkedStatus,
    role: "checkbox",
    type: "button",
    "aria-checked": checked,
    "aria-readonly": disabled,
    checked: checked,
    disabled: disabled
  }, rest), React.createElement("span", {
    "data-swarm-toggle-switch-disc": true
  }, React.createElement(_Icon["default"], {
    shape: fillIcon,
    size: "xs",
    color: FILLS[checkedStatus]
  })));
};

var _default = Toggle;
exports["default"] = _default;
Toggle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Toggle",
  "props": {
    "checked": {
      "required": true,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicated whether the toggle is selected"
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicated whether the toggle is disabled"
    },
    "onChange": {
      "required": false,
      "flowType": {
        "name": "signature",
        "type": "function",
        "raw": "() => null",
        "signature": {
          "arguments": [],
          "return": {
            "name": "null"
          }
        }
      },
      "description": "Action to be performed when the toggle is interacted with"
    }
  }
};