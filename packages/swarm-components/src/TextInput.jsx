// @flow
import * as React from 'react';

type Props = {
  /**
   * Whether the input should be interactive.
   */
  disabled?: boolean,
  /**
   * Whether the field has an error.
   */
  error?: boolean,
  /**
   * An identifier for the input.
   */
  id?: string,
  /**
   * Whether the input is a search field.
   */
  isSearch?: boolean,
  /**
   * Label for the input.
   */
  label?: string,
  /**
   * Name for the input.
   */
  name: string,
  /**
   * A regular expression that the input's value is checked against on form submission.
   */
  pattern?: string,
  /**
   * Value of input.
   */
  value: string
};

/**
 * @module TextInput
 */
export const TextInput = (props: Props): React$Element<*> => {
  const {
    name,
    error,
    isSearch,
    label,
    pattern,
    disabled,
    id,
    ...other
  } = props;

  const inputState = disabled ? 'disabled' : error ? 'error' : 'default';

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        data-swarm-text-input={inputState}
        type={isSearch ? 'search' : 'text'}
        name={name}
        pattern={pattern}
        disabled={disabled}
        id={id}
        {...other}
      />
    </>
  );
};

export default TextInput;
