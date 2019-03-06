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
        onChange={() => setChecked(!checked)}
        name="example1"
        value="1"
      />
      <br/>
      <br/>
      <Radio
        checked={twoChecked}
        onChange={() => setTwoChecked(!twoChecked)}
        name="example2"
        value="2"
      >
        Radio button using children as label
      </Radio>
      <br/>
      <br/>
      <Radio
        checked={threeChecked}
        onChange={() => setThreeChecked(!threeChecked)}
        name="example3"
        value="3"
      >
        <span>Radio Button with <b>nested</b> children as label</span>
      </Radio>
      <br/>
      <br/>
      <Radio
        label="Disabled radio button"
        name="example4"
        value="4"
        disabled
      />
      <br/>
      <br/>
      <Radio
        label="Disabled, checked radio button"
        name="example5"
        value="5"
        disabled
        checked
      />
      <br/>
      <br/>
    </>
  );
};

export default Example;
