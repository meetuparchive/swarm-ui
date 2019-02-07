import React from 'react'
import { Radio } from '@meetup/swarm-components'

const Example = () => {
  const [checked, setChecked] = React.useState(false)
  const [twoChecked, setTwoChecked] = React.useState(false)
  return (
    <>
      <Radio
        label="swarm"
        checked={checked}
        id="example"
        onChange={() => setChecked(!checked)}
      />
      <Radio
        checked={twoChecked}
        id="example2"
        onChange={() => setTwoChecked(!twoChecked)}
        disabled
      >
        disabled
      </Radio>
      <Radio
        checked
        id="example2"
        onChange={() => setTwoChecked(!twoChecked)}
        disabled
      >
        disabled checked
      </Radio>
    </>
  )
}

export default Example
