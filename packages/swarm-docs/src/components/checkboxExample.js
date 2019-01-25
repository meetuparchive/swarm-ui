import * as React from 'react'
import { Checkbox } from '@meetup/swarm-components'

export const Example = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <Checkbox
      label="swarm"
      checked={checked}
      id="example"
      onChange={() => setChecked(!checked)}
    />
  )
}

export default Example
