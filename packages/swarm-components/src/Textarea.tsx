import * as React from 'react';
import auto from 'autosize';

import { CharCount, hasMaxLengthError } from './shared/CharCount';

import { getFormFieldState } from './utils/formUtils';

interface Props {
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
};

type State = {};

const Textarea = (props: Props): React.ReactElement => {
	// maxLength is removed because we want to allow for typing over the character limit
	const { maxLength, value = '', autosize, ...rest} = props;
	const textareaRef = React.useRef<HTMLTextAreaElement>(null);

	React.useEffect(() => {
		if (autosize) {
			auto(textareaRef.current);
		}
	}, [])

	React.useEffect(() => {
		if (autosize) {
			auto.update(textareaRef.current);
		}
	}, [value])

		const charLength = value.length;
		const textareaState = getFormFieldState({
			...props,
			error: props.error || hasMaxLengthError(maxLength, charLength),
		});

		return (
			<div data-swarm-textarea-wrapper>
				<textarea
					value={value}
					data-swarm-textarea={textareaState}
					ref={textareaRef}
					{...rest}
				/>
				{maxLength && <CharCount maxLength={maxLength} charLength={charLength} />}
			</div>
		);
	}

export { Textarea };
