// @flow
import * as React from 'react';
import autosize from 'autosize';

type Props = {
    /**
     * Resizes the height based on content
     */
    autosize?: boolean,
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

    const textareaRef = React.useCallback(node => {
        if (node !== null && props.autosize) {
            autosize(node);
        }
    }, [props.value]);

    return (
        <textarea
            data-swarm-textarea={getTextareaStatus(props)}
            ref={textareaRef}
            {...props}
        />
    );
};

export default Textarea;
