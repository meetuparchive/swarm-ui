import React from 'react';
import { Toast, Button } from '@meetup/swarm-components';

const Example = () => {
  const [toast, showToast] = React.useState(false);
  return (
    <>
    <Button onClick={() => showToast(t => !t)}>Show Toast</Button>
      <div>
        { toast && <Toast>Test</Toast>}
      </div>
    </>
  );
};

export default Example;
