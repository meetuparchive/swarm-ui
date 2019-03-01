import React from 'react';
import { TogglePill } from '@meetup/swarm-components';

const Example = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <TogglePill
        label="swarm"
        checked={checked}
        id="example"
        onClick={() => setChecked(!checked)}
      />
    </>
  );
};

export default Example;
