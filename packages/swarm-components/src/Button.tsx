// @flow
import * as React from 'react';
import { Icon } from './Icon';
import { getButtonType, getSwarmSize, getIconPosition } from './utils/buttonUtils';

export interface ButtonProps {
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
	 * Supports solid icon shapes found at https://swarm-docs.now.sh/Foundations/Icons. This is the recommended way to use icons in buttons.
	 */
	icon?: string,

	/**
	 * Supports icon only padding for using icons as children rather than by passing an icon prop. Using the icon prop is preferred.
	 */
	iconOnly?: boolean,

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
	 * The size of the button. supports "small", "large", & "default"
	 */
	size?: "small" | "large" | "default",
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
	forwardedRef?: React.Ref<ButtonProps | null> | any,

	/**
	 * Content of button
	 */
	children?: React.ReactNode,
};

class Button extends React.Component<ButtonProps> {
	// destructuring to not pass invalid attributes to node
	render() {
		const {
			icon,
			iconOnly,
			right,
			grow,
			children,
			bordered, // eslint-disable-line no-unused-vars
			neutral, // eslint-disable-line no-unused-vars
			primary, // eslint-disable-line no-unused-vars
			inverted, // eslint-disable-line no-unused-vars
			reset, // eslint-disable-line no-unused-vars
			size, // eslint-disable-line no-unused-vars
			small, // eslint-disable-line no-unused-vars
			large, // eslint-disable-line no-unused-vars
			forwardedRef,
			...other
		} = this.props;

		const buttonType = getButtonType(this.props);
		const width = grow ? 'grow' : 'default';


		return (
			<button
				data-swarm-button={buttonType}
				data-swarm-size={getSwarmSize(this.props)}
				data-icon={getIconPosition(this.props)}
				data-swarm-width={width}
				type="button"
				ref={forwardedRef}
				{...other}
			>
				{icon ? (
					<span>
						{right ? (
							<>
								{children}
								<Icon shape={icon} />
							</>
						) : (
							<>
								<Icon shape={icon} />
								{children}
							</>
						)}
					</span>
				) : iconOnly ? (
					<span>{children}</span>
				) : (
					children
				)}
			</button>
		);
	}
}

// any for now. Not sure how to type forwarded ref
const ForwardedButton = React.forwardRef<ButtonProps, any>(
	(props, ref) => <Button {...props} forwardedRef={ref} />
);

export { Button, ForwardedButton };
