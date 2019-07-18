import React from 'react';
import { Checkbox } from '@meetup/swarm-components';

const Example = () => {
  const [checked, setChecked] = React.useState(false);
  const [twoChecked, setTwoChecked] = React.useState(false);
  return (
    <>
      <Checkbox
        label="here is a label"
        checked={checked}
        id="example"
        onChange={() => setChecked(!checked)}
      />
      <Checkbox
        checked={twoChecked}
        id="example2"
        onChange={() => setTwoChecked(!twoChecked)}
        disabled
      >
        disabled
      </Checkbox>
      <Checkbox
        checked
        id="example2"
        onChange={() => setTwoChecked(!twoChecked)}
        disabled
      >
        disabled checked
      </Checkbox>
    </>
  );
};

export default Example;
