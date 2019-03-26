// @flow
import * as React from 'react';

type Props = {
    disabeld?: boolean,
    error?: boolean,
    value?: string
}

const getTextareaStatus = (props: Props) => {
    let status = 'default';
    if (props.error) status = 'error';
    if (props.disabeld) status = 'disabled';
    return status;
}

const getCharacterCount = (value: string = '') => value.length;

export const Textarea = (props: Props) => {

    console.log('textarea char count', getCharacterCount(props.value))

    return <textarea data-swarm-textarea={getTextareaStatus(props)} {...props} />
}

export default Textarea;