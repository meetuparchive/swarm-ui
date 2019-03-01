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
	onClick?: (*) => void,
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
	children: React.Node,
};

/**
 *
 * @param {*} props
 *
 */
export const getButtonType = (props: Props): string => {
	let buttonType = 'default';
	if (props.disabled) buttonType = 'disabled';
	if (props.primary) buttonType = 'primary';
	if (props.neutral) buttonType = 'neutral';
	if (props.bordered) buttonType = 'bordered';
	if (props.inverted) buttonType = 'inverted';
	return buttonType;
};

export const getSwarmSize = (props: Props): string => {
	let size = 'default';
	if (props.small) size = 'small';
	return size;
};

export const getIconPosition = (props: Props): string => {
	let position = 'left';
	if (props.right) position = 'right';
	if (!props.children) position = 'only';
	return position;
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

const Button = (props: Props): React.Element<'button'> => {
	// destructuring to not pass invalid attributes to node
	const {
		primary,
		neutral,
		bordered,
		inverted,
		small,
		icon,
		right,
		children,
		...rest
	} = props;

	if (props.disabled) {
		delete props.onClick;
	}

	const buttonType = getButtonType(props);

	return (
		<button
			data-swarm-button={buttonType}
			data-swarm-size={getSwarmSize(props)}
			data-icon={getIconPosition(props)}
			{...rest}
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
		</button>
	);
};

export default Button;
