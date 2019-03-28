// @flow
import * as React from 'react';
import Icon from './Icon';

export type Props = {
	/**
	 * Indicated whether the toggle is selected
	 */
	checked: boolean,
	/**
	 * Indicated whether the toggle is disabled
	 */
	disabled?: boolean,
	/**
	 * Action to be performed when the toggle is interacted with
	 */
	onChange?: () => null,
};

const FILLS = {
	checked: 'var(--color-viridian)',
	unchecked: 'var(--color-gray-4)',
};

const Toggle = (props: Props): React.Element<'button'> => {
	const { checked = false, disabled = false, ...rest } = props;
	const checkedStatus = checked ? 'checked' : 'unchecked';
	const fillIcon = checked ? 'check' : 'cross';

	return (
		<button
			data-swarm-toggle={checkedStatus}
			role="checkbox"
			type="button"
			aria-checked={checked}
			aria-readonly={disabled}
			checked={checked}
			disabled={disabled}
			{...rest}
		>
			<span data-swarm-toggle-switch-disc>
				<Icon shape={fillIcon} size="xs" color={FILLS[checkedStatus]} />
			</span>
		</button>
	);
};

export default Toggle;
