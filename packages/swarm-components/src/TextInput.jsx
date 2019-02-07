// @flow
import * as React from 'react';

type Props = {
  isSearch?: boolean,
  name: string,
  value: string
};

const getInputStatus = (props: Props) => {
  let status = 'default';
  if (props.error) status = 'error';
  if (props.disabled) status = 'disabled';
  return status;
};

/**
 * @module TextInput
 */
export const TextInput = (props: Props): React$Element<*> => {
  const { name, isSearch, pattern, disabled, error, id, ...other } = props;

  return (
    <input
      data-swarm-text-input={getInputStatus(props)}
      type={isSearch ? 'search' : 'text'}
      name={name}
      pattern={pattern}
      disabled={disabled}
      id={id}
      {...other}
    />
  );
};

TextInput.defaultProps = {
  requiredText: '*'
};

export default TextInput;
