// @flow
import * as React from 'react';
import auto from 'autosize';

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
    value?: string,
    /**
     * max length of input field
     */
    maxLength?: string | number,
    /**
	 * Grow select to 100% width (full width)
	 */
	grow?: boolean
}

type CharProps = {
    children?: React.Node
}

const getTextareaStatus = (props: Props): string => {
    return props.disabled ? 'disabled' : (props.error ? 'error' : 'default');
};

const getCharacterCount = (value: string = '') => value.length;

const CharCount = (props: CharProps) => <p data-swarm-textarea-char-count className="text--tiny" {...props} />;


const Textarea = (props: Props): React.Element<'div'> => {
    const {
        maxLength,
        autosize,
        grow = true,
    } = props;

    const textareaRef = React.useCallback(node => {
        if (node !== null && autosize) {
            auto(node);
        }
    }, [props.value]);

    const remainingCharacters = (parseInt(maxLength, 10) - getCharacterCount(props.value));
    const textareaStatus = getTextareaStatus({ ...props, error: props.error || remainingCharacters < 0 });
    const width = grow ? 'grow' : 'default';

    return (
        <div
            data-swarm-width={width}
            data-swarm-textarea-wrapper
        >
            <textarea
                data-swarm-textarea={textareaStatus}
                data-swarm-width={width}
                ref={textareaRef}
                {...props}
            />
            {maxLength && <CharCount>{remainingCharacters}</CharCount>}
        </div>
   );
};

export default Textarea;
