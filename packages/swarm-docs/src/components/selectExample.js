import React from 'react'
import { Select } from '@meetup/swarm-components'

const SelectExample = () => {
  return (
    <>
    <Select label="Select a name for your horse" id="horsename" name="horsename">
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
