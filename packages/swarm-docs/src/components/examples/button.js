import React from 'react';
import { Button } from '@meetup/swarm-components';
import { Add } from '@meetup/swarm-icons/lib/components/large';

const Example = () => {
  return (
    <>
      <h5>Default</h5>
      <p>This style is the most common in the product and is a good starting point in many cases.</p>
      <div style={{margin: '20px 0 30px 0'}}>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button small>Small</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button>Default</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button large>Large</Button>
        </span>
      </div>
      <h5>Primary</h5>
      <p>Use this style for the most important actions within an experience. Only one primary button should be used per screen.</p>
      <div style={{margin: '20px 0 30px 0'}}>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button primary small>Small</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button primary>Default</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button primary large>Large</Button>
        </span>
      </div>
      <h5>Neutral</h5>
      <p>To reduce the visual weight and importance of a button, use this style.</p>
      <div style={{margin: '20px 0 30px 0'}}>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button neutral small>Small</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button neutral>Default</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button neutral large>Large</Button>
        </span>
      </div>
      <h5>Bordered</h5>
      <p>This style has the least visual weight, while still maintaining a button aesthetic.</p>
      <div style={{margin: '20px 0 30px 0'}}>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button bordered small>Small</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button bordered>Default</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button bordered large>Large</Button>
        </span>
      </div>
      <h5>Inverted</h5>
      <p>Use this style when an action must be overlayed on an image or a dark or saturated background.</p>
      <div style={{backgroundColor:'black', padding: '20px', margin: '20px 0 30px 0', display: 'inline-block'}}>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button inverted small>Small</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button inverted>Default</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button inverted large>Large</Button>
        </span>
      </div>
      <h5>Disabled</h5>
      <p>When an action is not available to the user, use this style.</p>
      <div style={{margin: '20px 0 30px 0'}}>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button disabled small>Small</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button disabled>Default</Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button disabled large>Large</Button>
        </span>
      </div>
      <h5>Buttons with icons</h5>
      <p>Icons can easily be added to any button size. The icon can be configured to appear to the right or left, as well as on its own.</p>
      <div style={{margin: '20px 0 30px 0'}}>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button bordered small icon="add">
            Add member
          </Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button icon="search"/>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button primary iconOnly large>
            <Add />
          </Button>
        </span>
        <span style={{marginRight: '16px', verticalAlign: 'top'}}>
          <Button neutral icon="arrow-right" right>
            View group
          </Button>
        </span>
      </div>
      <h5>Text only buttons</h5>
      <p>It is also possible to reset the button style to remove its inherent visual properties.</p>
      <div style={{margin: '20px 0 30px 0'}}>
        <Button reset style={{color: '#0098AB'}}>
          Reset button
        </Button>
      </div>
    </>
  );
};

export default Example;
