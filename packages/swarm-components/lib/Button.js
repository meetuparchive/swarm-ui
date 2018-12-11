function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import Icon from './Icon';

/**
 *
 * @param {*} props
 *
 */
export const getButtonType = props => {
  let buttonType = 'default';
  if (props.disabled) buttonType = 'disabled';
  if (props.primary) buttonType = 'primary';
  if (props.neutral) buttonType = 'neutral';
  if (props.bordered) buttonType = 'bordered';
  if (props.inverted) buttonType = 'inverted';
  return buttonType;
};
export const getSwarmSize = props => {
  let size = 'default';
  if (props.small) size = 'small';
  return size;
}; // TODO: find a better, more dynamic solution

const FILLS = {
  default: 'var(--color-viridian)',
  disabled: 'var(--color-gray-4)',
  primary: 'var(--color-white)',
  neutral: 'var(--color-gray-7)',
  bordered: 'var(--color-gray-7)',
  inverted: 'var(--color-white)'
};

const Button = props => {
  // destructuring to not pass invalid attributes to node
  const {
    primary,
    neutral,
    bordered,
    inverted,
    small,
    icon,
    children,
    ...rest
  } = props;

  if (props.disabled) {
    delete props.onClick;
  }

  const buttonType = getButtonType(props);
  return React.createElement("button", _extends({
    "data-swarm-button": buttonType,
    "data-swarm-size": getSwarmSize(props)
  }, rest), icon ? React.createElement("span", null, children, React.createElement(Icon, {
    shape: icon,
    size: "xs",
    color: FILLS[buttonType]
  })) : children);
};

export default Button;