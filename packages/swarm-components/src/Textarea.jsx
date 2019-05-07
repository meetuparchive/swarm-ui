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
}

type State = {};

type CharProps = {
    children?: React.Node
}

const getTextareaStatus = (props: Props): string => {
    return props.disabled ? 'disabled' : (props.error ? 'error' : 'default');
};

const getCharacterCount = (value: string = '') => value.length;

const CharCount = (props: CharProps) => <p data-swarm-textarea-char-count className="text--tiny" {...props} />


class Textarea extends React.Component<Props, State> {
    textarea: ?HTMLTextAreaElement;

	componentDidMount() {
        if (this.props.autosize) {
            auto(this.textarea);
        }
    }

	componentDidUpdate(prevProps: Props) {
        if (this.props.value !== prevProps.value) {
            auto.update(this.textarea);
        }
    }

    render() {
        // maxLength is removed because we want to allow for typing over the character limit
        const { maxLength, autosize, ...other } = this.props;

        const remainingCharacters = (parseInt(maxLength, 10) - getCharacterCount(this.props.value));
        const textareaStatus = getTextareaStatus({ ...this.props, error: this.props.error || remainingCharacters < 0 });

        return (
            <div data-swarm-textarea-wrapper>
                <textarea
                    data-swarm-textarea={textareaStatus}
                    ref={textarea => {
                        this.textarea = textarea;
                    }}
                    {...other}
                />
                { maxLength && <CharCount>{remainingCharacters}</CharCount>}
            </div>
        );
    };
};

export default Textarea;
