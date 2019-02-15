import React from 'react';
import { Select } from '@meetup/swarm-components';

const SelectExample = () => {
  const [value, setValue] = React.useState('geoffrey');

  return (
    <>
      <div style={{width: 300}}>
        <Select
          value={value}
          label="Default Select"
          id="horsename"
          name="horsename"
          onChange={(e) => setValue(e.target.value)}
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
          value={value}
          label="Disabled Select"
          id="horsename"
          name="horsename"
          onChange={(e) => setValue(e.target.value)}
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
          value={value}
          label="Select with Error"
          id="horsename"
          name="horsename"
          onChange={(e) => setValue(e.target.value)}
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
    </>
  );
};

export default SelectExample;
