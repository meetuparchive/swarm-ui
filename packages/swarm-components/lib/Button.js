function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';
// TODO: find a better, more dynamic solution
const FILLS = {
  default: 'var(--color-viridian)',
  disabled: 'var(--color-gray-4)',
  primary: 'var(--color-white)',
  neutral: 'var(--color-gray-7)',
  bordered: 'var(--color-gray-7)',
  inverted: 'var(--color-white)'
};
/**
 *
 * @param {*} props
 *
 */

export const getButtonType = props => {
  let buttonType = 'default';

  if (props.disabled) {
    buttonType = 'disabled';
  } else if (props.primary) {
    buttonType = 'primary';
  } else if (props.neutral) {
    buttonType = 'neutral';
  } else if (props.bordered) {
    buttonType = 'bordered';
  } else if (props.inverted) {
    buttonType = 'inverted';
  }

  return buttonType;
};
export const getSwarmSize = props => {
  return props.small ? 'small' : 'default';
};
export const getIconPosition = props => {
  return props.children ? props.right ? 'right' : 'left' : 'only';
};

const Button = props => {
  // destructuring to not pass invalid attributes to node
  const {
    icon,
    right,
    children,
    isLink,
    ...other
  } = props;

  if (props.disabled) {
    delete props.onClick;
  }

  const Component = isLink ? 'a' : 'button';
  const buttonType = getButtonType(props);
  return React.createElement(Component, _extends({
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
    },
    "isLink": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Render an anchor styled as a button instead\nof a button element"
    }
  }
};