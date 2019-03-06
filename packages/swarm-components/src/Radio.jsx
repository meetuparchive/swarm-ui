// @flow
import * as React from 'react';

export type Props = {
  /**
   * Whether the radio button is checked.
   */
  checked?: boolean,
  /**
   * Whether the input should be interactive.
   */
  disabled?: boolean,
  /**
   * A unique identifier for the input.
   */
  id?: string,
  /**
   * Used to associate a group of radio buttons.
   * Only one radio button in a group can be selected.
   */
  name: string,
  /**
   * Value of the input.
   */
  value: string,
  /**
   * Label for the input.
   */
  label?: string,
  /**
   * Use children as an alternative to the `label` prop for more complex input labels.
   */
  children: React.ReactElement<*>,
};

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Radio = (props: Props): React.ReactElement<'label'> => {
  const {
    checked,
    label,
    id,
    disabled,
    value,
    children,
    name,
    ...other
  } = props;

  return (
    <label data-swarm-radio={disabled ? 'disabled' : 'default'} htmlFor={id || name} disabled={disabled} {...other} >
      <span data-swarm-radio-field={checked ? 'checked': 'unchecked'} tabIndex='0' role="checkbox" aria-checked={checked}>
        {checked && <span data-swarm-radio-dot/>}
      </span>
      <input type='radio' id={id || name} name={name} checked={checked} disabled={disabled} value={value} />
      <span>{label || children}</span>
    </label>
  );
};

export default Radio;
