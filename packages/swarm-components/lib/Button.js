function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

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
};

const Button = props => {
  // destructuring to not pass invalid attributes to node
  const {
    primary,
    neutral,
    bordered,
    inverted,
    small,
    ...rest
  } = props;

  if (props.disabled) {
    delete props.onClick;
  }

  return React.createElement("button", _extends({
    "data-swarm-button": getButtonType(props),
    "data-swarm-size": getSwarmSize(props)
  }, rest));
};

export default Button;