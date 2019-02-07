import * as React from 'react';

export type Props = {
  checked: boolean,
  disabled?: boolean,
  label?: string,
  name: string
};

const TogglePill = (props: Props): React.ReactElement<'span'> => {
  const { checked, disabled, name, label, children, ...rest } = props;
  return (
    <div
      data-swarm-toggle-pill={checked ? 'checked' : 'unchecked'}
      role='checkbox'
      aria-checked={checked}
      {...rest}
    >
      <input type='checkbox' checked={checked} disabled={disabled} name={name} />
      <span>{label || children}</span>
    </div>
  );
};

export default TogglePill;
