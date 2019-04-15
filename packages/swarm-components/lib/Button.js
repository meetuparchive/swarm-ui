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

var _buttonUtils = require("./utils/buttonUtils");

var Button = function Button(props) {
  // destructuring to not pass invalid attributes to node
  var icon = props.icon,
      right = props.right,
      children = props.children,
      bordered = props.bordered,
      neutral = props.neutral,
      primary = props.primary,
      inverted = props.inverted,
      small = props.small,
      other = (0, _objectWithoutProperties2["default"])(props, ["icon", "right", "children", "bordered", "neutral", "primary", "inverted", "small"]);
  var buttonType = (0, _buttonUtils.getButtonType)(props);
  return React.createElement("button", (0, _extends2["default"])({
    "data-swarm-button": buttonType,
    "data-swarm-size": (0, _buttonUtils.getSwarmSize)(props),
    "data-icon": (0, _buttonUtils.getIconPosition)(props)
  }, other), icon ? React.createElement("span", null, right ? React.createElement(React.Fragment, null, children, React.createElement(_Icon["default"], {
    shape: icon,
    size: "xs",
    color: _buttonUtils.FILLS[buttonType]
  })) : React.createElement(React.Fragment, null, React.createElement(_Icon["default"], {
    shape: icon,
    size: "xs",
    color: _buttonUtils.FILLS[buttonType]
  }), children)) : children);
};

var _default = Button;
exports["default"] = _default;
Button.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Button",
  "props": {
    "bordered": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "The bordered button"
    },
    "className": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Classes for additional styles to be applied"
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicates whether the button is disabled or not"
    },
    "icon": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Supports icon classes found at https://meetup.github.io/swarm-icons/"
    },
    "inverted": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Inverted styles for dark backgrounds"
    },
    "neutral": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "The neutral style"
    },
    "onClick": {
      "required": false,
      "flowType": {
        "name": "signature",
        "type": "function",
        "raw": "() => {}",
        "signature": {
          "arguments": [],
          "return": {
            "name": "signature",
            "type": "object",
            "raw": "{}",
            "signature": {
              "properties": []
            }
          }
        }
      },
      "description": "The function invoked when interacting with Button"
    },
    "primary": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "The primary style"
    },
    "right": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Aligns the icon to the right"
    },
    "small": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Use the small button size"
    },
    "children": {
      "required": true,
      "flowType": {
        "name": "ReactNode",
        "raw": "React.Node"
      },
      "description": "Content of button"
    }
  }
};