"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getIconPosition = exports.getSwarmSize = exports.getButtonType = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 *
 * @param {*} props
 *
 */
var getButtonType = function getButtonType(props) {
  var buttonType = 'default';
  if (props.disabled) buttonType = 'disabled';
  if (props.primary) buttonType = 'primary';
  if (props.neutral) buttonType = 'neutral';
  if (props.bordered) buttonType = 'bordered';
  if (props.inverted) buttonType = 'inverted';
  return buttonType;
};

exports.getButtonType = getButtonType;

var getSwarmSize = function getSwarmSize(props) {
  var size = 'default';
  if (props.small) size = 'small';
  return size;
};

exports.getSwarmSize = getSwarmSize;

var getIconPosition = function getIconPosition(props) {
  var position = 'left';
  if (props.right) position = 'right';
  if (!props.children) position = 'only';
  return position;
}; // TODO: find a better, more dynamic solution


exports.getIconPosition = getIconPosition;
var FILLS = {
  default: 'var(--color-viridian)',
  disabled: 'var(--color-gray-4)',
  primary: 'var(--color-white)',
  neutral: 'var(--color-gray-7)',
  bordered: 'var(--color-gray-7)',
  inverted: 'var(--color-white)'
};

var Button = function Button(props) {
  // destructuring to not pass invalid attributes to node
  var primary = props.primary,
      neutral = props.neutral,
      bordered = props.bordered,
      inverted = props.inverted,
      small = props.small,
      icon = props.icon,
      right = props.right,
      children = props.children,
      rest = _objectWithoutProperties(props, ["primary", "neutral", "bordered", "inverted", "small", "icon", "right", "children"]);

  var buttonType = getButtonType(props);
  return React.createElement("button", _extends({
    "data-swarm-button": buttonType,
    "data-swarm-size": getSwarmSize(props),
    "data-icon": getIconPosition(props)
  }, rest), icon ? React.createElement("span", null, right ? React.createElement(React.Fragment, null, children, React.createElement(_Icon.default, {
    shape: icon,
    size: "xs",
    color: FILLS[buttonType]
  })) : React.createElement(React.Fragment, null, React.createElement(_Icon.default, {
    shape: icon,
    size: "xs",
    color: FILLS[buttonType]
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
        "raw": "(*) => void",
        "signature": {
          "arguments": [{
            "name": "",
            "type": {
              "name": "unknown"
            }
          }],
          "return": {
            "name": "void"
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
      "description": ""
    }
  }
};