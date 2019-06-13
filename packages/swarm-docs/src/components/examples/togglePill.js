import React from 'react';
import { TogglePill } from '@meetup/swarm-components';

const Example = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <>
      <div style={{marginTop: '8px'}}>
        <TogglePill
          label="swarm"
          checked={checked}
          id="example"
          onClick={() => setChecked(!checked)}
        />
      </div>
      <div style={{marginTop: '8px'}}>
        <TogglePill
          label="Grow TogglePill (full width)"
          checked={checked2}
          id="example2"
          onClick={() => setChecked2(!checked2)}
          grow
        />
      </div>
      <div style={{marginTop: '8px'}}>
        <TogglePill
          label="Reset TogglePill (no styling)"
          id="example3"
          reset
        />
      </div>
    </>
  );
};

export default Example;
