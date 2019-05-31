// @flow
import type { TextInputProps } from '../TextInput';
import type { TextareaProps } from '../Textarea';

type FormFieldProps = TextInputProps | TextareaProps;

/**
 *
 * @param {*} props
 *
 */
export const getFormFieldState = (props: FormFieldProps): string => {
	let state = 'default';

	if (props.disabled) {
		state = 'disabled';
	} else if (props.error) {
		state = 'error';
    };

    return state;
};
