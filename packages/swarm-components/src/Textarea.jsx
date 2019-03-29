// @flow
import * as React from 'react';

type Props = {
    /**
     * Whether the textarea should be interactive.
     */
    disabled?: boolean,
    /**
     * Whether the textarea renders an error state.
     */
    error?: boolean,
    /**
     * Value for textarea.
     */
    value?: string
}

const getTextareaStatus = (props: Props): string => {
    return props.disabled ? 'disabled' : (props.error ? 'error' : 'default');
};

const getCharacterCount = (value: string = '') => value.length;

const Textarea = (props: Props): React.Element<'textarea'> => {

    console.log('textarea char count', getCharacterCount(props.value));

    return (
        <textarea
            data-swarm-textarea={getTextareaStatus(props)}
            {...props}
        />
    );
};

export default Textarea;
