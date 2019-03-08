import React from 'react';
import { Radio } from '@meetup/swarm-components';


export const GroupRadioButtonsExample = () => {
  const [shape, setShape] = React.useState('circle');
  const [circleButton, setCircleButton] = React.useState(true);
  const [squareButton, setSquareButton] = React.useState(false);
  const [triangleButton, setTriangleButton] = React.useState(false);


  function onButtonChange(e) {
    const value = e.target.value;

    setShape(value);

    setCircleButton(value === 'circle');
    setSquareButton(value === 'square');
    setTriangleButton(value === 'triangle');

  }

  React.useEffect(() => console.log(shape));

  return(
    <>
      <Radio
        name='shape'
        label="Circle"
        id='circle'
        value='circle'
        onChange={(e) => onButtonChange(e)}
        checked={circleButton}
      />
      <Radio
        name="shape"
        label="Square"
        id='square'
        value='square'
        onChange={(e) => onButtonChange(e)}
        checked={squareButton}
      />
      <Radio
        name="shape"
        label="Triangle"
        id='triangle'
        value='triangle'
        onChange={(e) => onButtonChange(e)}
        checked={triangleButton}
      />
    </>
  );
};

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
        onChange={() => {}}
        disabled
        checked
      />
      <br/>
      <br/>
    </>
  );
};

export default Example;
