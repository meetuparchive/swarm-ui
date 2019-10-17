import * as React from 'react';

interface Props {
	/**
	 * Indicates whether the toggle is selected
	 */
	checked?: boolean,
	/**
	 * Indicates whether the toggle is disabled
	 */
	disabled?: boolean,
	/**
	 * Text label of the content
	 */
	label?: string,
	/**
	 * Grow select to 100% width (full width)
	 */
	grow?: boolean,
	/**
	 * Text label of the content, applied if label is not set
	 */
	reset?: boolean,
	/**
	 * Strips all styles from the toggle pill
	 */
	children?: React.ReactElement,
};

const getPillState = (reset: boolean, checked: boolean) => {
	if (reset) return 'reset';
	else if (checked) return 'checked';
	else return 'unchecked';
};

const TogglePill = (props: Props) => {
	const { checked = false, disabled, label, children, grow, reset = false, ...other } = props;

	const width = grow ? 'grow' : 'default';

	return (
		<button
			data-swarm-toggle-pill={getPillState(reset, checked)}
			data-swarm-width={width}
			role="checkbox"
			aria-checked={checked}
			disabled={disabled}
			{...other}
		>
			<span>{label || children}</span>
		</button>
	);
};

export { TogglePill };
