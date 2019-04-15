"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var FieldLabel = function FieldLabel(props) {
  return React.createElement("label", (0, _extends2["default"])({
    "data-swarm-field-label": true
  }, props));
};

var _default = FieldLabel;
exports["default"] = _default;
FieldLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FieldLabel"
};