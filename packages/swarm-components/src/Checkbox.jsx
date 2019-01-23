import * as React from 'react';
import Icon from './Icon';

export type Props = {
  checked: boolean,
  id?: string,
  name: string,
};

const Checkbox = (props: Props): React.ReactElement<'input'> => {
  const { checked, label, id = 'a', ...rest } = props;
  return (
    <label for={id} {...rest} data-swarm-checkbox>
      <span>
        <Icon shape='check' size='xs' />
      </span>
      <input type='checkbox' id={id} checked={checked} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
