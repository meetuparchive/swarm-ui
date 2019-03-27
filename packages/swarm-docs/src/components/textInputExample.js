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
        id="input1"
        name="input1"
        value={value1}
        onChange={(e) => setValue1(e.target.value)} />
      <br/>
      <br/>
      <br/>
      <label htmlFor="input2">Label</label>
      <TextInput
        id="input2"
        name="input2"
        value={value2}
        onChange={(e) => setValue2(e.target.value)} />
      <br/>
      <br/>
      <br/>
      <label htmlFor="input3">Disabled input</label>
      <TextInput
        id="input3"
        name="input3"
        disabled />
      <br/>
      <br/>
      <br/>
      <label htmlFor="input4">Error Input</label>
      <TextInput
        id="input4"
        name="input4"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
        error />
      <br/>
      <br/>
      <br/>
      <label htmlFor="input5">Search Input</label>
      <TextInput
        id="input5"
        name="input5"
        value={value5}
        onChange={(e) => setValue5(e.target.value)}
        isSearch />
      <br/>
      <br/>
      <br/>
      <label htmlFor="input6">Input with 3 letter value pattern</label>
      <TextInput
        id="input6"
        name="input6"
        value={value6}
        pattern="[A-Za-z]{3}"
        onChange={(e) => setValue6(e.target.value)} />
    </>
  );
};

export default Example;
