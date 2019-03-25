// @flow
import * as React from 'react';


const getTextareaStatus = (props: Props) => {
    return 'default'
}

const getCharacterCount = (value = 0) => value.length

export const Textarea = (props: Props) => {

    console.log('textarea char count', getCharacterCount(props.value))

    return <textarea data-swarm-textarea={getTextareaStatus(props)} {...props} />
}

export default Textarea;