function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';
import { FILLS, getButtonType, getSwarmSize, getIconPosition } from './utils/buttonUtils';

const Button = props => {
  // destructuring to not pass invalid attributes to node
  const {
    icon,
    right,
    children,
    ...other
  } = props;
  const buttonType = getButtonType(props);
  return React.createElement("button", _extends({
    "data-swarm-button": buttonType,
    "data-swarm-size": getSwarmSize(props),
    "data-icon": getIconPosition(props)
  }, other), icon ? React.createElement("span", null, right ? React.createElement(React.Fragment, null, children, React.createElement(Icon, {
    shape: icon,
    size: "xs",
    color: FILLS[buttonType]
  })) : React.createElement(React.Fragment, null, React.createElement(Icon, {
    shape: icon,
    size: "xs",
    color: FILLS[buttonType]
  }), children)) : children);
};

export default Button;
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