function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';
const FILLS = {
  checked: 'var(--color-viridian)',
  unchecked: 'var(--color-gray-4)'
};

const Toggle = props => {
  const {
    checked,
    disabled,
    ...rest
  } = props;
  const checkedStatus = checked ? 'checked' : 'unchecked';
  const fillIcon = checked ? 'check' : 'cross';
  return React.createElement("button", _extends({
    "data-swarm-toggle": checkedStatus,
    role: "checkbox",
    type: "button",
    "aria-checked": checked,
    "aria-readonly": disabled,
    checked: checked,
    disabled: disabled
  }, rest), React.createElement("span", {
    "data-swarm-toggle-switch-disc": true
  }, React.createElement(Icon, {
    shape: fillIcon,
    size: "xs",
    color: FILLS[checkedStatus]
  })));
};

export default Toggle;
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