import React from 'react'
import { TogglePill, Toggle } from '@meetup/swarm-components'

const Example = () => {
  const [checked, setChecked] = React.useState(false)
  const [twoChecked, setTwoChecked] = React.useState(false)
  return (
    <>
      <TogglePill
        label="swarm"
        checked={checked}
        id="example"
        onClick={() => setChecked(!checked)}
      />
      <br />
      <Toggle
        checked={twoChecked}
        id="example"
        onChange={() => setTwoChecked(!twoChecked)}
      />
    </>
  )
}

export default Example
