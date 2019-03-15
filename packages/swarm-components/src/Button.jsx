// @flow
import * as React from 'react';
import Icon from './Icon';

type Props = {
	/**
	 * The bordered button
	 */
	bordered?: boolean,

	/**
	 * Classes for additional styles to be applied
	 */
	className?: string,

	/**
	 * Indicates whether the button is disabled or not
	 */
	disabled?: boolean,

	/**
	 * Supports icon classes found at https://meetup.github.io/swarm-icons/
	 */
	icon?: string,

	/**
	 * Inverted styles for dark backgrounds
	 */
	inverted?: boolean,

	/**
	 * The neutral style
	 */
	neutral?: boolean,

	/**
	 * The function invoked when interacting with Button
	 */
	onClick?: () => {},

	/**
	 * The primary style
	 */
	primary?: boolean,

	/**
	 * Aligns the icon to the right
	 */
	right?: boolean,

	/**
	 * Use the small button size
	 */
	small?: boolean,

	/**
	 * Content of button
	 */
	children: React.Node,

	/**
	 * Render an anchor styled as a button instead
	 * of a button element
	 */
	isLink?: boolean,
};

// TODO: find a better, more dynamic solution
const FILLS = {
	default: 'var(--color-viridian)',
	disabled: 'var(--color-gray-4)',
	primary: 'var(--color-white)',
	neutral: 'var(--color-gray-7)',
	bordered: 'var(--color-gray-7)',
	inverted: 'var(--color-white)',
};

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

const Button = (props: Props): React.Element<'button' | 'a'> => {
	// destructuring to not pass invalid attributes to node
	const {
		icon,
		right,
		children,
		isLink,
		...other
	} = props;

	const Component = isLink ? 'a' : 'button';
	const buttonType = getButtonType(props);

	return (
		<Component
			data-swarm-button={buttonType}
			data-swarm-size={getSwarmSize(props)}
			data-icon={getIconPosition(props)}
			{...other}
		>
			{icon ? (
				<span>
					{right ? (
						<>
							{children}
							<Icon shape={icon} size="xs" color={FILLS[buttonType]} />
						</>
					) : (
						<>
							<Icon shape={icon} size="xs" color={FILLS[buttonType]} />
							{children}
						</>
					)}
				</span>
			) : (
				children
			)}
		</Component>
	);
};

export default Button;
