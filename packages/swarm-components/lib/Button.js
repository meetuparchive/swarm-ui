"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _buttonUtils = require("./utils/buttonUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  // destructuring to not pass invalid attributes to node
  var icon = props.icon,
      right = props.right,
      children = props.children,
      other = _objectWithoutProperties(props, ["icon", "right", "children"]);

  var buttonType = (0, _buttonUtils.getButtonType)(props);
  return React.createElement("button", _extends({
    "data-swarm-button": buttonType,
    "data-swarm-size": (0, _buttonUtils.getSwarmSize)(props),
    "data-icon": (0, _buttonUtils.getIconPosition)(props)
  }, other), icon ? React.createElement("span", null, right ? React.createElement(React.Fragment, null, children, React.createElement(_Icon.default, {
    shape: icon,
    size: "xs",
    color: _buttonUtils.FILLS[buttonType]
  })) : React.createElement(React.Fragment, null, React.createElement(_Icon.default, {
    shape: icon,
    size: "xs",
    color: _buttonUtils.FILLS[buttonType]
  }), children)) : children);
};

var _default = Button;
exports.default = _default;
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