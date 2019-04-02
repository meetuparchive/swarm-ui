"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getTextareaStatus = function getTextareaStatus(props) {
  return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

var getCharacterCount = function getCharacterCount() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length;
};

var Textarea = function Textarea(props) {
  console.log('textarea char count', getCharacterCount(props.value));
  return React.createElement("textarea", _extends({
    "data-swarm-textarea": getTextareaStatus(props)
  }, props));
};

var _default = Textarea;
exports.default = _default;
Textarea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Textarea",
  "props": {
    "disabled": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the textarea should be interactive."
    },
    "error": {
      "required": false,
      "flowType": {
        "name": "boolean"
      },
      "description": "Whether the textarea renders an error state."
    },
    "value": {
      "required": false,
      "flowType": {
        "name": "string"
      },
      "description": "Value for textarea."
    }
  }
};