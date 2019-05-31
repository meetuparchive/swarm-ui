// @flow
import * as React from 'react';
import auto from 'autosize';

import CharCount, {
    getRemainingCharacters,
} from './shared/CharCount';

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
    name: string,
    /**
     * Name for the input.
     */
    value?: string,
    /**
     * max length of input field
     */
    maxLength?: number,
}

type State = {};

export const getTextareaStatus = (props: Props): string => {
    return props.disabled ? 'disabled' : (props.error ? 'error' : 'default');
};


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
        const {
            maxLength,
            autosize, // eslint-disable-line no-unused-vars
            value = '',
            ...other
        } = this.props;

        const charLength = value.length;
        const remainingCharacters = getRemainingCharacters(maxLength, charLength);
        const textareaStatus = getTextareaStatus({ ...this.props, error: this.props.error || remainingCharacters < 0 });

        return (
            <div data-swarm-textarea-wrapper>
                <textarea
                    value={value}
                    data-swarm-textarea={textareaStatus}
                    ref={textarea => {
                        this.textarea = textarea;
                    }}
                    {...other}
                />
                {maxLength && <CharCount maxLength={maxLength} charLength={charLength} />}
            </div>
        );
    };
};

export default Textarea;
