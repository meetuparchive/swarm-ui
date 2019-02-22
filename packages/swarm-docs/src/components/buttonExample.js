import React from 'react';
import { Button } from '@meetup/swarm-components';
import { useBooleanKnob, Inspector } from 'retoggle';

const Example = () => {
  const [primary] = useBooleanKnob('Primary', true);
  return (
    <>
      <Inspector usePortal={false} />
      <Button primary={primary}>Click Me!</Button>
    </>
  );
};

export default Example;
