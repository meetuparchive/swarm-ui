// @flow
import * as React from 'react';
import Icon from './Icon';
import {
	FILLS,
	getButtonType,
	getSwarmSize,
	getIconPosition,
} from './utils/buttonUtils';

export type ButtonProps = {
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
};

const Button = (props: ButtonProps): React.Element<'button'> => {
	// destructuring to not pass invalid attributes to node
	const { icon, right, children, ...other } = props;

	const buttonType = getButtonType(props);

	return (
		<button
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
		</button>
	);
};

export default Button;
