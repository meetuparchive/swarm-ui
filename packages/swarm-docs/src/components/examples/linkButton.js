import React from 'react';
import { LinkButton } from '@meetup/swarm-components';

const Example = () => {
  return (
    <>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" reset>
          Link as Reset Button (no styles)
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" primary>
          Link as Primary Button
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" bordered>
          Link as Bordered Button
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" neutral>
          Link as Neutral Button
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" disabled>
          Link as disabled Button
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" small>
          Link as small Button
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" icon="bolt">
          Link as icon Button with text
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" icon="chevron-right" right>
          Link as right icon Button with text
        </LinkButton>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" icon="chevron-right"/>
        <span> (Link as icon Button with no text) </span>
      </div>
      <div style={{marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/" grow>
          Link as grow Button (full width)
        </LinkButton>
      </div>
      <div style={{backgroundColor:'black', padding:10, marginTop: '8px'}}>
        <LinkButton href="https://meetup.com/"inverted>
          Link as Inverted Button
        </LinkButton>
      </div>
    </>
  );
};

export default Example;
