import React from 'react';
import { Textarea } from '@meetup/swarm-components';

const TextareaExample = () => {
  const [value, setValue] = React.useState('Swarm Textarea example');
  const [value2, setValue2] = React.useState('Swarm Textarea example');
  const [value3, setValue3] = React.useState('Swarm Textarea example');

  return (
    <>
      <Textarea value={value} onChange={e => setValue(e.target.value)} />
      <br />
      <p>with autosize</p>
      <Textarea
        value={value2}
        onChange={e => setValue2(e.target.value)}
        autosize
      />
      <p>with autosize & maxLength 200</p>
      <Textarea
        value={value3}
        onChange={e => setValue3(e.target.value)}
        autosize
        maxLength={200}
      />
    </>
  );
};

export default TextareaExample;
