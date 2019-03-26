"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
var Radio = function Radio(props) {
  var checked = props.checked,
      label = props.label,
      id = props.id,
      disabled = props.disabled,
      value = props.value,
      children = props.children,
      name = props.name,
      other = _objectWithoutProperties(props, ["checked", "label", "id", "disabled", "value", "children", "name"]);

  return React.createElement("label", {
    "data-swarm-radio": disabled ? 'disabled' : 'default',
    disabled: disabled
  }, React.createElement("span", {
    "data-swarm-radio-field": checked ? 'checked' : 'unchecked',
    tabIndex: "0",
    role: "checkbox",
    "aria-checked": checked
  }, checked && React.createElement("span", {
    "data-swarm-radio-dot": true
  })), React.createElement("input", _extends({
    type: "radio",
    id: id,
    name: name,
    checked: checked,
    disabled: disabled,
    value: value
  }, other)), React.createElement("span", null, label || children));
};

var _default = Radio;
exports.default = _default;
Radio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Radio",
  "props": {
    "checked": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the radio button is checked."
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the input should be interactive."
    },
    "id": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "A unique identifier for the input."
    },
    "name": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Used to associate a group of radio buttons.\nOnly one radio button in a group can be selected."
    },
    "value": {
      "required": true,
      "flowType": {
        "name": "string"
      },
      "description": "Value of the input."
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "String label for the input. Will override any children values."
    },
    "children": {
      "required": false,
      "flowType": {
        "name": "ReactReactElement",
        "raw": "React.ReactElement<*>",
        "elements": [{
          "name": "unknown"
        }]
      },
      "description": "Use children as an alternative to the `label` prop for more complex input labels.\nThe `label` prop will override children."
    }
  }
};