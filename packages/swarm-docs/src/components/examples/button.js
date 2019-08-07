import React from 'react';
import { Button } from '@meetup/swarm-components';

const Example = () => {
  return (
    <>
      <div style={{marginTop: '8px'}}>
        <Button reset>
          Reset (no styles)
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button primary>
          Primary
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button bordered>
          Bordered
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button neutral>
          Neutral
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button disabled>
          Disabled
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button small>
          Small
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button icon="add">
          Icon with text
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button icon="arrow-right" right>
          Icon (right) with text
        </Button>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button icon="arrow-right"/><span> (Icon no text)</span>
      </div>
      <div style={{marginTop: '8px'}}>
        <Button grow>
          Grow (full width)
        </Button>
      </div>
      <div style={{backgroundColor:'black', padding:10, marginTop: '8px'}}>
        <Button inverted>
          Inverted
        </Button>
      </div>
    </>
  );
};

export default Example;
