import React from 'react';
import { Toggle } from '@meetup/swarm-components';

const Example = () => {
  const [twoChecked, setTwoChecked] = React.useState(false);
  return (
    <>
      <label htmlFor="switch-example">Toggle Switch</label>
      <Toggle
        checked={twoChecked}
        id="switch-example"
        onClick={() => setTwoChecked(!twoChecked)}
      />
    </>
  );
};

export default Example;
