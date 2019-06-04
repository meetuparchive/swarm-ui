// @flow
type FieldProps = {
	disabled?: ?boolean,
	error?: ?boolean,
};

/**
 *
 * @param {*} props
 *
 */
export const getFormFieldState = (props: FieldProps): string => {
	let state = 'default';

	if (props.disabled) {
		state = 'disabled';
	} else if (props.error) {
		state = 'error';
	}

	return state;
};
