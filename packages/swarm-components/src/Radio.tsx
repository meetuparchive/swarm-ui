import * as React from 'react';

interface Props {
	/**
	 * Whether the radio button is checked.
	 */
	checked?: boolean,
	/**
	 * Whether the input should be interactive.
	 */
	disabled?: boolean,
	/**
	 * A unique identifier for the input.
	 */
	id?: string,
	/**
	 * Used to associate a group of radio buttons.
	 * Only one radio button in a group can be selected.
	 */
	name: string,
	/**
	 * Value of the input.
	 */
	value: string,
	/**
	 * String label for the input. Will override any children values.
	 */
	label?: string,
	/**
	 * Use children as an alternative to the `label` prop for more complex input labels.
	 * The `label` prop will override children.
	 */
	children?: React.ReactElement,
};

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Radio: React.FC<Props> = (props) => {
	const { checked, label, id, disabled, value, children, name, ...other } = props;

	return (
		<label data-swarm-radio={disabled ? 'disabled' : 'default'}>
			<span
				data-swarm-radio-field={checked ? 'checked' : 'unchecked'}
				tabIndex={0}
				role="checkbox"
				aria-checked={checked}
			>
				{checked && <span data-swarm-radio-dot />}
			</span>
			<input
				type="radio"
				id={id}
				name={name}
				checked={checked}
				disabled={disabled}
				value={value}
				{...other}
			/>
			<span>{label || children}</span>
		</label>
	);
};

export { Radio };
