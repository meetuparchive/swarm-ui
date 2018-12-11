// @flow
import * as React from 'react';
import Icon from './Icon';

type Props = {
  primary?: boolean,
  neutral?: boolean,
  bordered?: boolean,
  disabled?: boolean,
  inverted?: boolean,
  className?: string,
  icon?: string,
  small?: boolean,
  onClick?: (*) => void,
  children: React.Node
};

/**
 *
 * @param {*} props
 *
 */
export const getButtonType = (props: Props): string => {
  let buttonType = 'default';
  if (props.disabled) buttonType = 'disabled';
  if (props.primary) buttonType = 'primary';
  if (props.neutral) buttonType = 'neutral';
  if (props.bordered) buttonType = 'bordered';
  if (props.inverted) buttonType = 'inverted';
  return buttonType;
};

export const getSwarmSize = (props: Props): string => {
  let size = 'default';
  if (props.small) size = 'small';
  return size;
};

// TODO: find a better, more dynamic solution
const FILLS = {
  default: 'var(--color-viridian)',
  disabled: 'var(--color-gray-4)',
  primary: 'var(--color-white)',
  neutral: 'var(--color-gray-7)',
  bordered: 'var(--color-gray-7)',
  inverted: 'var(--color-white)'
}

const Button = (props: Props): React.Element<'button'> => {
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

  return (
    <button
      data-swarm-button={buttonType}
      data-swarm-size={getSwarmSize(props)}
      {...rest}
    >
      {icon ? <span>{children}<Icon shape={icon} size='xs' color={FILLS[buttonType]} /></span> : children}
    </button>
  );
};

export default Button;
