"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      rest = _objectWithoutProperties(props, ["checked", "label", "id", "disabled", "children", "onChange", "name", "value"]);

  return React.createElement("label", _extends({
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