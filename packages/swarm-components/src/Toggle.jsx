import * as React from 'react';
import Icon from './Icon';

export type Props = {
  checked: boolean,
  disabled?: boolean,
  name: string,
  id: string,
  onChange?: e => null
};

const FILLS = {
  checked: 'var(--color-viridian)',
  unchecked: 'var(--color-gray-4)',
};

const Toggle = (props: Props): React.ReactElement<'span'> => {
  const { checked, disabled, id, name, ...rest } = props;
  const checkedStatus = checked ? 'checked' : 'unchecked';
  const fillIcon = checked ? 'check' : 'cross';

  return (
    <label
      data-swarm-toggle={checkedStatus}
      role='checkbox'
      aria-checked={checked}
      id={id}
      {...rest}
    >
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        name={name}
        id={id}
      />
      <span data-swarm-toggle-switch-disc>
        <Icon shape={fillIcon} size='xs' color={FILLS[checkedStatus]} />
      </span>
    </label>
  );
};

export default Toggle;
