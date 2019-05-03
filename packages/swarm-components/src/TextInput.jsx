// @flow
import * as React from 'react';
import Icon from './Icon';

const ICON_SIZES = Object.freeze({
  XXS: 'xxs',
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl',
});

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
  id: string,

  /**
   * Whether the input is a search field.
   */
  isSearch?: boolean,

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
  value: string,

  /**
   * Name of icon to render in the input
   */
  iconShape?: string,

  /**
   * Optional size for icon if `iconShape` is provided.
   * Default size is `xs`
   */
  iconSize?: $Values<typeof ICON_SIZES>,

  /**
   * Grow input to 100% width (full width)
   */
  grow?: boolean,
};

/**
 * @module TextInput
 */
export const TextInput = (props: Props): React$Element<*> => {
  const {
    name,
    error,
    isSearch,
    pattern,
    disabled,
    id,
    iconShape,
    iconSize = 'xs',
    grow,
    ...other
  } = props;

  const wrapperState = iconShape ? 'icon' : 'default';
  const inputState = disabled ? 'disabled' : error ? 'error' : 'default';
  const width = grow ? 'grow' : 'default';

  return (
    <div data-swarm-text-input-wrapper={wrapperState}>
      <input
        data-swarm-text-input={inputState}
        data-swarm-width={width}
        type={isSearch ? 'search' : 'text'}
        name={name}
        pattern={pattern}
        disabled={disabled}
        id={id}
        {...other}
      />
      {iconShape && (
        <span data-swarm-input-icon={iconShape}>
          <Icon shape={iconShape} size={iconSize} aria-hidden={true} />
        </span>
      )}
    </div>
  );
};

export default TextInput;
