// @flow
import * as React from 'react';
import Icon from './Icon';
import FieldLabel from './FieldLabel';
import FeildHelper from './FieldHelper';
import FieldHelper from './FieldHelper';

type Props = React.ElementConfig<HTMLSelectElement> & {
	/**
	 * Whether the select menu is disabled.
	 */
	disabled?: boolean,
	/**
	 * Whether the select menu has errored.
	 */
	error?: string,
	/**
	 * Line of text further describing the select menu.
	 */
	helperText?: string,
	/**
	 * Unique identifier for select tag.
	 */
	id?: string,
	/**
	 * Associated <label> tag for the <select> tag.
	 */
	label?: string,
	/**
	 * Name of select menu form field.
	 */
	name: string,
	/**
	 * Copy to be used for a required select field.
	 */
	requiredText?: string,
};

const Select = (props: Props) => {
	const {
        disabled,
		error,
        helperText,
        id,
		label,
        name,
		requiredText,
		...other
	} = props;

	const selectState = disabled
		? 'disabled'
		: (error ? 'error' : 'default');

	return (
		<div data-swarm-select={selectState}>
			{label && (
				<FieldLabel
					htmlFor={name}
				>
					{label}
					{requiredText ? <span> {requiredText}</span> : ''}
				</FieldLabel>
            )}

			{helperText && (
				<FieldHelper>
                    {helperText}
                </FieldHelper>
            )}

			<div data-swarm-select-wrapper="1">
				<select
					name={name}
					id={id || name}
					required={Boolean(requiredText)}
					disabled={disabled}
					{...other}
				/>

				<span data-swarm-select-arrow="chevron-down">
					<Icon shape="chevron-down" size="xs" />
				</span>
			</div>
		</div>
	);
};

export default Select;
