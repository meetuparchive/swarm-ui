import React from 'react';
import { TextInput } from '@meetup/swarm-components';

const Example = () => (
  <>
    <TextInput name="input1" value="no label" />
    <br/>
    <br/>
    <br/>
    <TextInput name="input3" value="value" label="Input Label with value" />
    <br/>
    <br/>
    <br/>
    <TextInput name="input4" label="Disabled input" disabled />
    <br/>
    <br/>
    <br/>
    <TextInput name="input5" label="Input with Error" error />
    <br/>
    <br/>
    <br/>
    <TextInput name="input6" label="Search input" isSearch />
    <br/>
    <br/>
    <br/>
    <TextInput name="input6" value="abc" label="3 letter value pattern" pattern="[A-Za-z]{3}" />
  </>
);

export default Example;
