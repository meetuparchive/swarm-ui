import React from 'react';
import { Radio } from '@meetup/swarm-components';

const Example = () => {
  const [checked, setChecked] = React.useState(false);
  const [twoChecked, setTwoChecked] = React.useState(false);
  const [threeChecked, setThreeChecked] = React.useState(false);

  return (
    <>
      <Radio
        label="Radio button with `label` prop"
        checked={checked}
        id="example1"
        onChange={() => setChecked(!checked)}
      />
      <br/>
      <br/>
      <Radio
        checked={twoChecked}
        id="example2"
        onChange={() => setTwoChecked(!twoChecked)}
      >
        Radio button using children as label
      </Radio>
      <br/>
      <br/>
      <Radio
        checked={threeChecked}
        id="example3"
        onChange={() => setThreeChecked(!threeChecked)}
      >
        <span>Radio Button with <b>nested</b> children as label</span>
      </Radio>
      <br/>
      <br/>
      <Radio
        label="Disabled radio button"
        id="example4"
        disabled
      />
      <br/>
      <br/>
      <Radio
        label="Disabled, checked radio button"
        id="example5"
        disabled
        checked
      />
      <br/>
      <br/>
    </>
  );
};

export default Example;
