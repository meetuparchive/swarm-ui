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
	required?: boolean,
};

const Select = (props: Props) => {
	const {
        disabled,
		error,
        helperText,
        id,
		label,
        name,
		required,
		...other
	} = props;

	return (
		<div data-swarm-select={disabled ? 'disabled' : 'default'}>
			{label && (
				<label
					htmlFor={name}
					data-requiredtext="*"
				>
					{label}
				</label>
            )}

			{helperText && (
                <div>
                    {helperText}
                </div>
            )}

			<div data-swarm-select-wrapper="1">
				<select
					name={name}
					id={id || name}
					required={Boolean(required)}
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
