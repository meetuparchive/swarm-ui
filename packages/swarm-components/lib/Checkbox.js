function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Checkbox = props => {
  const {
    checked,
    label,
    id,
    disabled,
    children,
    onChange,
    ...rest
  } = props;
  return React.createElement("label", _extends({
    "data-swarm-checkbox": disabled ? 'disabled' : 'default',
    htmlFor: id,
    disabled: disabled
  }, rest), React.createElement("span", {
    "data-swarm-checkbox-field": checked ? 'checked' : 'unchecked',
    role: "checkbox",
    "aria-checked": checked
  }, checked && React.createElement(Icon, {
    shape: "check",
    size: "xs",
    color: disabled ? '#A2A2A2' : '#ffffff'
  })), React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    readOnly: !onChange || disabled
  }), React.createElement("span", null, label || children));
};

export default Checkbox;
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
    }
  }
};
