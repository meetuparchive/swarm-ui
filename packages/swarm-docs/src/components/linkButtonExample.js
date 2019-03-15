import React from 'react';
import { LinkButton } from '@meetup/swarm-components';

const Example = () => {
  return (
    <div>
      <LinkButton href="https://meetup.com/" primary>
        Link as Primary Button
      </LinkButton>
      <br/>
      <br/>
      <LinkButton href="https://meetup.com/" bordered>
        Link as Bordered Button
      </LinkButton>
      <br/>
      <br/>
      <LinkButton href="https://meetup.com/" neutral>
        Link as Neutral Button
      </LinkButton>
      <br/>
      <br/>
      <LinkButton href="https://meetup.com/" disabled>
        Link as disabled Button
      </LinkButton>
      <br/>
      <br/>
      <div style={{backgroundColor:'black', padding:10}}>
        <LinkButton href="https://meetup.com/"inverted>
          Link as Inverted Button
        </LinkButton>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Example;
