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

var FILLS = {
  checked: 'var(--color-viridian)',
  unchecked: 'var(--color-gray-4)'
};

var Toggle = function Toggle(props) {
  var _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      rest = _objectWithoutProperties(props, ["checked", "disabled"]);

  var checkedStatus = checked ? 'checked' : 'unchecked';
  var fillIcon = checked ? 'check' : 'cross';
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
  }, React.createElement(_Icon["default"], {
    shape: fillIcon,
    size: "xs",
    color: FILLS[checkedStatus]
  })));
};

var _default = Toggle;
exports["default"] = _default;
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