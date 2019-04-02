import React from 'react';
import { Select, FieldHelper, FieldLabel } from '@meetup/swarm-components';

const SelectExample = () => {
  const [value1, setValue1] = React.useState('geoffrey');
  const [value2, setValue2] = React.useState('geoffrey');
  const [value3, setValue3] = React.useState('geoffrey');
  const [value4, setValue4] = React.useState('geoffrey');

  return (
    <>
      <div style={{ width: 300 }}>
        <FieldLabel htmlFor="horsename1">Default Select</FieldLabel>
        <Select
          value={value1}
          id="horsename1"
          name="horsename1"
          onChange={e => setValue1(e.target.value)}
        >
          <option value="geoffrey">Geoffrey</option>
          <option value="drhorse">Doctor Horse, MD Junior</option>
          <option value="chompyhorse">Mister Chompy</option>
        </Select>
      </div>
      <br />
      <div style={{ width: 300 }}>
        <FieldLabel htmlFor="horsename2">Disabled Select</FieldLabel>
        <Select
          value={value2}
          id="horsename2"
          name="horsename2"
          onChange={e => setValue2(e.target.value)}
          disabled
        >
          <option value="geoffrey">Geoffrey</option>
          <option value="drhorse">Doctor Horse, MD Junior</option>
          <option value="chompyhorse">Mister Chompy</option>
        </Select>
      </div>
      <br />
      <div style={{ width: 300 }}>
        <FieldLabel htmlFor="horsename3">Select with error</FieldLabel>
        <Select
          value={value3}
          id="horsename3"
          name="horsename3"
          onChange={e => setValue3(e.target.value)}
          error="This is an error message"
        >
          <option value="geoffrey">Geoffrey</option>
          <option value="drhorse">Doctor Horse, MD Junior</option>
          <option value="chompyhorse">Mister Chompy</option>
        </Select>
      </div>
      <br />
      <div style={{ width: 300 }}>
        <FieldLabel htmlFor="horename4">Select Field</FieldLabel>
        <FieldHelper>Line of helper text to describe the input.</FieldHelper>
        <Select
          value={value4}
          id="horsename4"
          name="horsename4"
          onChange={e => setValue4(e.target.value)}
          requiredText="(required)"
        >
          <option value="geoffrey">Geoffrey</option>
          <option value="drhorse">Doctor Horse, MD Junior</option>
          <option value="chompyhorse">Mister Chompy</option>
        </Select>
      </div>
    </>
  );
};

export default SelectExample;
