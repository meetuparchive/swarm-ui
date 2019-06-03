// @flow
import * as React from 'react';
import Icon from './Icon';

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
	 * Unique identifier for select tag.
	 */
	id?: string,
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
	const { disabled, error, id, name, requiredText, ...other } = props;

	const selectState = disabled ? 'disabled' : error ? 'error' : 'default';

	return (
		<div data-swarm-select={selectState}>
			<div data-swarm-select-wrapper>
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
