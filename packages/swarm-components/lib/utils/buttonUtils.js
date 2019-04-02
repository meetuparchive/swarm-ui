"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconPosition = exports.getSwarmSize = exports.getButtonType = exports.FILLS = void 0;
// TODO:
// find a better, more dynamic solution
var FILLS = {
  default: 'var(--color-viridian)',
  disabled: 'var(--color-gray-4)',
  primary: 'var(--color-white)',
  neutral: 'var(--color-gray-7)',
  bordered: 'var(--color-gray-7)',
  inverted: 'var(--color-white)'
};
exports.FILLS = FILLS;

/**
 *
 * @param {*} props
 *
 */
var getButtonType = function getButtonType(props) {
  var buttonType = 'default';

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

exports.getButtonType = getButtonType;

var getSwarmSize = function getSwarmSize(props) {
  return props.small ? 'small' : 'default';
};

exports.getSwarmSize = getSwarmSize;

var getIconPosition = function getIconPosition(props) {
  return props.children ? props.right ? 'right' : 'left' : 'only';
};

exports.getIconPosition = getIconPosition;