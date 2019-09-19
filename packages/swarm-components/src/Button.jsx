// @flow
import * as React from 'react';
import Icon from './Icon';
import {
	getButtonType,
	getSwarmSize,
	getIconPosition,
	getButtonWidth,
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
	 * Supports icon shapes found at https://swarm-docs.now.sh/Foundations/Icons
	 */
	icon?: string,

	/**
	 * Strips all styles from the button
	 */
	reset?: boolean,

	/**
	 * Inverted styles for dark backgrounds
	 */
	inverted?: boolean,

	/**
	 * The neutral style
	 */
	neutral?: boolean,

	/**
	 * The normal width style (3x padding)
	 */
	normal?: boolean,

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
	 * The large button size
	 */

	large?: boolean,

	/**
	 * Use the small button size
	 */
	small?: boolean,

	/**
	 * Grow button to 100% width (full width)
	 */
	grow?: boolean,

	/**
	 *
	 */
	forwardedRef?: ?React.ElementRef<*>,

	/**
	 * Content of button
	 */
	children: React.Node,
};

class Button extends React.Component<ButtonProps> {
	// destructuring to not pass invalid attributes to node
	render() {
		const {
			icon,
			right,
			grow, // eslint-disable-line no-unused-vars
			children,
			bordered, // eslint-disable-line no-unused-vars
			neutral, // eslint-disable-line no-unused-vars
			normal, // eslint-disable-line no-unused-vars
			primary, // eslint-disable-line no-unused-vars
			inverted, // eslint-disable-line no-unused-vars
			reset, // eslint-disable-line no-unused-vars
			small, // eslint-disable-line no-unused-vars
			large, // eslint-disable-line no-unused-vars
			forwardedRef,
			...other
		} = this.props;

		const buttonType = getButtonType(this.props);

		return (
			<button
				data-swarm-button={buttonType}
				data-swarm-size={getSwarmSize(this.props)}
				data-icon={getIconPosition(this.props)}
				data-swarm-width={getButtonWidth(this.props)}
				type="button"
				ref={forwardedRef}
				{...other}
			>
				{icon ? (
					<span>
						{right ? (
							<>
								{children}
								<Icon shape={icon} size="xs" />
							</>
						) : (
							<>
								<Icon shape={icon} size="xs" />
								{children}
							</>
						)}
					</span>
				) : (
					children
				)}
			</button>
		);
	}
}

export const ForwardedButton = React.forwardRef<ButtonProps, HTMLButtonElement>(
	(props, ref) => <Button {...props} forwardedRef={ref} />
);

export default Button;
