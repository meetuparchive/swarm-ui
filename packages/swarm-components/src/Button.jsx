// @flow
import * as React from 'react';

type Props = {
  primary?: boolean,
  neutral?: boolean,
  bordered?: boolean,
  disabled?: boolean,
  inverted?: boolean,
  className?: string,
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

const Button = (props: Props): React.Element<'button'> => {
  // destructuring to not pass invalid attributes to node
  const { primary, neutral, bordered, inverted, small, ...rest } = props;

  if (props.disabled) {
    delete props.onClick;
  }

  return (
    <button
      data-swarm-button={getButtonType(props)}
      data-swarm-size={getSwarmSize(props)}
      {...rest}
    />
  );
};

export default Button;
