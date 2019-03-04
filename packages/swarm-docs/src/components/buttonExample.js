import React from 'react';
import { Button } from '@meetup/swarm-components';

const Example = () => {
  const buttonIcon = '';
  const buttonType = 'primary';
  const buttonCopy = 'Click Me!';

  const primary = buttonType === 'primary';
  const bordered = buttonType === 'bordered';
  const neutral = buttonType === 'neutral';
  const disabled = buttonType === 'disabled';
  const inverted = buttonType === 'inverted';

  const icon = buttonIcon ? 'arrow-right' : false;

  return (
    <div>
      <Button
        primary={primary}
        bordered={bordered}
        neutral={neutral}
        disabled={disabled}
        inverted={inverted}
        icon={icon}
      >
        {buttonCopy}
      </Button>
    </div>
  );
};

export default Example;
