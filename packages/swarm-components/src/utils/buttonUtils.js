// @flow
import type {ButtonProps} from '../Button';
import type {LinkButtonProps} from '../LinkButton';

// TODO:
// find a better, more dynamic solution
export const FILLS = {
	default: 'var(--color-viridian)',
	disabled: 'var(--color-gray-4)',
	primary: 'var(--color-white)',
	neutral: 'var(--color-gray-7)',
	bordered: 'var(--color-gray-7)',
	inverted: 'var(--color-white)',
};

type Props = ButtonProps | LinkButtonProps;

/**
 *
 * @param {*} props
 *
 */
export const getButtonType = (props: Props): string => {
	let buttonType = 'default';

	if (props.disabled) {
		buttonType = 'disabled';
	} else if (props.primary) {
		buttonType = 'primary';
	} else if (props.neutral) {
		buttonType = 'neutral';
	} else if (props.bordered) {
		buttonType = 'bordered';
	} else if (props.inverted) {
		buttonType = 'inverted';
	}

	return buttonType;
};

export const getSwarmSize = (props: Props): string => {
	return props.small ? 'small' : 'default';
};

export const getIconPosition = (props: Props): string => {
	return (props.children) ? (props.right ? 'right' : 'left') : 'only';
};
