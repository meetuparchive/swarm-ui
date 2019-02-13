import React from 'react'
import { Select } from '@meetup/swarm-components'

const SelectExample = () => {
  const [value, setValue] = React.useState('geoffrey');

  return (
    <>
      <Select
        value={value}
        label="Select a name for your horse"
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
    </>
  )
}

export default SelectExample;
