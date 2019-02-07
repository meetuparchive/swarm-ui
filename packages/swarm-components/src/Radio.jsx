// @flow
import * as React from 'react';
import Icon from './Icon';

export type Props = {
  checked: boolean,
  disabled?: boolean,
  id?: string,
  value: string,
  label?: string,
  name: string,
};

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Radio = (props: Props): React.ReactElement<'label'> => {
  const { checked, label, id = 'a', disabled, value, children, ...rest } = props;
  return (
    <label data-swarm-radio={disabled ? 'disabled' : 'default'} for={id} disabled={disabled} {...rest} >
      <span data-swarm-radio-field={checked ? 'checked': 'unchecked'} tabIndex='0' role="checkbox" aria-checked={checked}>
        {checked && <span data-swarm-radio-dot/>}
      </span>
      <input type='radio' id={id} checked={checked} disabled={disabled} value={value} />
      <span>{label || children}</span>
    </label>
  );
};
export default Radio;