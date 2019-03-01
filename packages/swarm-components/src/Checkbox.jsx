// @flow
import * as React from 'react';
import Icon from './Icon';

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
	onChange?: () => mixed,
	/**
		* Whether this checkbox is read-only (does not have an onChange function).
	*/
	readOnly?: boolean,
	/**
		* Child nodes that would be placed if there is no label.
	*/
	children: React.Node,
	/**
		* A label for your checkbox input. It will not be shown if `children` are passed to the component.
	*/
	label: string,
}

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Checkbox = (props: Props): React.Element<'label'> => {
	const {
		checked, label, id, disabled, children, onChange, readOnly, ...rest } = props;
	return (
		<label
			data-swarm-checkbox={disabled ? 'disabled' : 'default'}
			htmlFor={id}
			disabled={disabled}
			{...rest}
		>
			<span
				data-swarm-checkbox-field={checked ? 'checked' : 'unchecked'}
				tabIndex="0"
				role="checkbox"
				aria-checked={checked}
			>
				{checked && (
					<Icon shape="check" size="xs" color={disabled ? '#A2A2A2' : '#ffffff'} />
				)}
			</span>
			<input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={onChange} readOnly={readOnly} />
			<span>{label || children}</span>
		</label>
	);
};

export default Checkbox;
