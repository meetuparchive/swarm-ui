"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TogglePill = function TogglePill(props) {
  var checked = props.checked,
      disabled = props.disabled,
      label = props.label,
      children = props.children,
      rest = _objectWithoutProperties(props, ["checked", "disabled", "label", "children"]);

  return React.createElement("button", _extends({
    "data-swarm-toggle-pill": checked ? 'checked' : 'unchecked',
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    checked: checked
  }, rest), React.createElement("span", null, label || children));
};

var _default = TogglePill;
exports["default"] = _default;
TogglePill.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TogglePill",
  "props": {
    "checked": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicates whether the toggle is selected"
    },
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Indicates whether the toggle is disabled"
    },
    "label": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Text label of the content"
    },
    "children": {
      "required": false,
      "flowType": {
        "name": "ReactNode",
        "raw": "React.Node"
      },
      "description": "Text label of the content, applied if label is not set"
    }
  }
};