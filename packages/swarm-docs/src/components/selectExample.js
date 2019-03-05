import React from 'react';
import { Select } from '@meetup/swarm-components';

const SelectExample = () => {
  const [value1, setValue1] = React.useState('geoffrey');
  const [value2, setValue2] = React.useState('geoffrey');
  const [value3, setValue3] = React.useState('geoffrey');
  const [value4, setValue4] = React.useState('geoffrey');

  return (
    <>
      <div style={{width: 300}}>
        <Select
          value={value1}
          label="Default Select"
          id="horsename1"
          name="horsename1"
          onChange={(e) => setValue1(e.target.value)}
        >
            <option value="geoffrey">
              Geoffrey
            </option>
            <option value="drhorse">
              Doctor Horse, MD Junior
            </option>
            <option value="chompyhorse">
              Mister Chompy
            </option>
        </Select>
      </div>
      <br />
      <div style={{width: 300}}>
        <Select
          value={value2}
          label="Disabled Select"
          id="horsename2"
          name="horsename2"
          onChange={(e) => setValue2(e.target.value)}
          disabled
        >
            <option value="geoffrey">
              Geoffrey
            </option>
            <option value="drhorse">
              Doctor Horse, MD Junior
            </option>
            <option value="chompyhorse">
              Mister Chompy
            </option>
        </Select>
      </div>
      <br />
      <div style={{width: 300}}>
        <Select
          value={value3}
          label="Select with Error"
          id="horsename3"
          name="horsename3"
          onChange={(e) => setValue3(e.target.value)}
          error="This is an error message"
        >
            <option value="geoffrey">
              Geoffrey
            </option>
            <option value="drhorse">
              Doctor Horse, MD Junior
            </option>
            <option value="chompyhorse">
              Mister Chompy
            </option>
        </Select>
      </div>
      <br />
      <div style={{width: 300}}>
        <Select
          value={value4}
          label="Select Field"
          id="horsename4"
          name="horsename4"
          onChange={(e) => setValue4(e.target.value)}
          requiredText="(required)"
          helperText="Line of helper text to describe the input."
        >
            <option value="geoffrey">
              Geoffrey
            </option>
            <option value="drhorse">
              Doctor Horse, MD Junior
            </option>
            <option value="chompyhorse">
              Mister Chompy
            </option>
        </Select>
      </div>
    </>
  );
};

export default SelectExample;
