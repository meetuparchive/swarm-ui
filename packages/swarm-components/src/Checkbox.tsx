import * as React from 'react';
import { Icon } from './Icon';

export type Props = {
	/**
	 * Whether the box should be checked.
	 */
	checked: boolean,
	/**
	 * Whether the box should be interactive.
	 */
	disabled?: boolean,
	/**
	 * An identifier for the checkbox.
	 */
	id?: string,
	/**
	 * A callback function that is called when the checkbox is toggled.
	 */
	onChange?: () => void,
	/**
	 * Child nodes that would be placed if there is no label.
	 */
	children?: React.ReactNode,
	/**
	 * A label for your checkbox input. It will not be shown if `children` are passed to the component.
	 */
	label?: string,
	/**
	 * Name for checkbox form field.
	 */
	name?: string,
	/**
	 * Value for checkbox form field.
	 */
	value?: string | boolean,
};

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Checkbox = (props: Props): React.ReactElement => {
	const {
		checked,
		label,
		id,
		disabled,
		children,
		onChange,
		name,
		value,
		...rest
	} = props;

	return (
		<label
			data-swarm-checkbox={disabled ? 'disabled' : 'default'}
			htmlFor={id}
			{...rest}
		>
			<span
				data-swarm-checkbox-field={checked ? 'checked' : 'unchecked'}
				role="checkbox"
				aria-checked={checked}
			>
				{checked && (
					<Icon
						shape="check"
						color={disabled ? 'var(--color-gray-6)' : '#ffffff'}
					/>
				)}
			</span>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				disabled={disabled}
				onChange={onChange}
				readOnly={!onChange || disabled}
				name={name}
				value={`${value}`}
			/>
			<span>{label || children}</span>
		</label>
	);
};

export { Checkbox };
