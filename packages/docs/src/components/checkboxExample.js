import * as React from 'react'
import { Checkbox } from 'swarm-components'

export const Example = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <Checkbox
      label="baseball"
      checked={checked}
      id="example"
      onChange={() => setChecked(!checked)}
    />
  )
}

export default Example
