"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var FieldHelper = function FieldHelper(props) {
  return React.createElement("p", (0, _extends2["default"])({
    "data-swarm-field-helper": true
  }, props));
};

var _default = FieldHelper;
exports["default"] = _default;
FieldHelper.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FieldHelper"
};