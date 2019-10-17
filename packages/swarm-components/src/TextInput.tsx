import * as React from 'react';
import { Icon } from './Icon';
import { CharCount, hasMaxLengthError } from './shared/CharCount';
import { getFormFieldState } from './utils/formUtils';

const ICON_SIZES = Object.freeze({
	XXS: 'xxs',
	XS: 'xs',
	S: 's',
	M: 'm',
	L: 'l',
	XL: 'xl',
	XXL: 'xxl',
});

interface TextInputProps {
	/**
	 * Whether the input should be interactive.
	 */
	disabled?: boolean,
	/**
	 * Whether the field has an error.
	 */
	error?: boolean,
	/**
	 * An identifier for the input.
	 */
	id: string,
	/**
	 * Whether the input is a search field.
	 */
	isSearch?: boolean,
	/**
	 * Name for the input.
	 */
	name: string,
	/**
	 * A regular expression that the input's value is checked against on form submission.
	 */
	pattern?: string,
	/**
	 * Value of input.
	 */
	value?: string,
	/**
	 * Name of icon to render in the input
	 */
	iconShape?: string,
	/**
	 * Optional size for icon if `iconShape` is provided.
	 * Default size is `xs`
	 */
	iconSize?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
	/**
	 * max length of input field
	 */
	maxLength?: number,
};

/**
 * @module TextInput
 */
const TextInput = (props: TextInputProps): React.ReactElement => {
	const {
		name,
		error,
		isSearch,
		pattern,
		disabled,
		id,
		iconShape,
		value = '',
		maxLength,
		...other
	} = props;

	const wrapperState = iconShape ? 'icon' : 'default';
	const charLength = value.length;
	const inputState = getFormFieldState({
		...props,
		error: error || hasMaxLengthError(maxLength, charLength),
	});

	return (
		<div data-swarm-text-input-wrapper={wrapperState}>
			<input
				data-swarm-text-input={inputState}
				type={isSearch ? 'search' : 'text'}
				name={name}
				pattern={pattern}
				disabled={disabled}
				id={id}
				value={value}
				{...other}
			/>
			{iconShape && (
				<span data-swarm-input-icon={iconShape}>
					<Icon shape={iconShape} aria-hidden />
				</span>
			)}
			{maxLength && <CharCount maxLength={maxLength} charLength={charLength} />}
		</div>
	);
};

export { TextInput };
