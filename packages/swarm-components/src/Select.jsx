// @flow
import * as React from 'react';
import Icon from './Icon';

type Props = React.ElementConfig<HTMLSelectElement> & {
    disabled?: boolean,
	error?: string,
	helperText?: string,
    id?: string,
	label?: string,
	name?: string,
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
				<label
					htmlFor={name}
				>
					{label}
					{requiredText ? <span> {requiredText}</span> : ''}
				</label>
            )}

			{helperText && (
                <p data-swarm-select-helper-text="1">
                    {helperText}
                </p>
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
