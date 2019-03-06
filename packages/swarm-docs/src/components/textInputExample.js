import React from 'react';
import { TextInput } from '@meetup/swarm-components';

const Example = () => {
  const [value1, setValue1] = React.useState('no label');
  const [value2, setValue2] = React.useState('value');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');
  const [value6, setValue6] = React.useState('abc');

  return (
    <>
      <TextInput
        name="input1"
        value={value1}
        onChange={(e) => setValue1(e.target.value)} />
      <br/>
      <br/>
      <br/>
      <TextInput
        name="input2"
        value={value2}
        label="Input Label with value"
        onChange={(e) => setValue2(e.target.value)} />
      <br/>
      <br/>
      <br/>
      <TextInput
        name="input3"
        label="Disabled input"
        disabled />
      <br/>
      <br/>
      <br/>
      <TextInput
        name="input4"
        label="Input with Error"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
        error />
      <br/>
      <br/>
      <br/>
      <TextInput
        name="input5"
        label="Search input"
        value={value5}
        onChange={(e) => setValue5(e.target.value)}
        isSearch />
      <br/>
      <br/>
      <br/>
      <TextInput
        name="input6"
        value={value6}
        label="3 letter value pattern"
        pattern="[A-Za-z]{3}"
        onChange={(e) => setValue6(e.target.value)} />
    </>
  );
};

export default Example;
