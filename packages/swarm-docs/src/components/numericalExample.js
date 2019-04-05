import React from 'react';
import { NumericalInput } from '@meetup/swarm-components';

const Example = () => {
  const [value, onChange] = React.useState(null);

  return <NumericalInput value={value} onChange={onChange} />;
};

export default Example;
