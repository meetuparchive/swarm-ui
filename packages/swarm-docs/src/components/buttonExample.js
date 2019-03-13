import React from 'react';
import { Button } from '@meetup/swarm-components';

const Example = () => {
  return (
    <div>
      <Button primary>
        Primary
      </Button>
      <br/>
      <br/>
      <Button bordered>
        Bordered
      </Button>
      <br/>
      <br/>
      <Button neutral>
        Neutral
      </Button>
      <br/>
      <br/>
      <Button disabled>
        Disabled
      </Button>
      <br/>
      <br/>
      <div style={{backgroundColor:'black', padding:10}}>
        <Button inverted>
          Inverted
        </Button>
      </div>
      <br/>
      <br/>
      <Button href="https://www.meetup.com" primary isLink>
        Link Button
      </Button>
      <br/>
      <br/>
    </div>
  );
};

export default Example;
