// @flow
import PropTypes from "prop-types";
import * as React from "react";

type Props = {
  children?: React$Node,
  className?: string,
  disabled?: boolean,
  error?: string | React$Node,
  helperText?: string | React$Node,
  iconShape?: string,
  iconSize?: "xs" | "s" | "m" | "l" | "xl",
  id?: string,
  isSearch?: boolean,
  label?: string | React$Node,
  labelClassName?: string,
  maxLength?: number,
  name: string,
  onChange: string => void,
  pattern?: string,
  placeholder?: string,
  refCallback: React$Node => void,
  required?: boolean,
  requiredText?: string | React$Node,
  validityMessage?: string,
  value: string
};

/**
 * @module TextInput
 */
export const TextInput = (props: Props): React$Element<*> => {
  const {
    disabled,
    error,
    iconShape,
    id,
    isSearch,
    name,
    pattern,
    placeholder,
    required,
    requiredText,
    value,
    ...other
  } = props;

  return (
    <input
      data-swarm-text-input
      type={isSearch ? "search" : "text"}
      name={name}
      required={required}
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled}
      id={id}
      {...other}
    />
  );
};

TextInput.defaultProps = {
  requiredText: "*"
};

TextInput.propTypes = {
  /** The `name` attribute for the input */
  name: PropTypes.string.isRequired,

  /** Error content to render */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Adds an `id` attribute to the input, and associates it with the `<label />` */
  id: PropTypes.string,

  /** Maximum number of characters for the input value */
  maxLength: PropTypes.number,

  /** Regex pattern that the input value must match */
  pattern: PropTypes.string,

  /** What we render into the input's `<label />` */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** The class name/s to add to the `<label />` element */
  labelClassName: PropTypes.string,

  /** The hint text to display inside the input using the input's `placeholder` attribute */
  placeholder: PropTypes.string,

  /** Whether the input type is 'search' */
  isSearch: PropTypes.bool,

  /** Callback that happens when the input changes */
  onChange: PropTypes.func,

  /** Whether to use disabled attribute and disabled field styles */
  disabled: PropTypes.bool,

  /** Name of the shape of the icon to render inside the input */
  iconShape: PropTypes.string,

  /** The key for the size to render an icon inside the input */
  iconSize: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),

  /** An additional piece of helpful info rendered with the field */
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Whether the field is required to have a value */
  required: PropTypes.bool,

  /** What to render in order to indicate the field is required */
  requiredText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default TextInput;
