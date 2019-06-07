// @flow
import * as React from 'react';
import Icon from './Icon';
import { getButtonType, getSwarmSize, getIconPosition } from './utils/buttonUtils';

export type LinkButtonProps = {
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
	 * Grow link to 100% width (full width)
	 */
	grow?: boolean,

	/**
	 * Content of button
	 */
	children: React.Node,
};

const LinkButton = (props: LinkButtonProps): React.Element<'a'> => {
	// destructuring to not pass invalid attributes to node
	const {
		icon,
		right,
		grow,
		children,
		bordered, // eslint-disable-line no-unused-vars
		neutral, // eslint-disable-line no-unused-vars
		primary, // eslint-disable-line no-unused-vars
		inverted, // eslint-disable-line no-unused-vars
		small, // eslint-disable-line no-unused-vars
		...other
	} = props;

	const buttonType = getButtonType(props);
	const width = grow ? 'grow' : 'default';

	return (
		<a
			data-swarm-link={buttonType}
			data-swarm-size={getSwarmSize(props)}
			data-icon={getIconPosition(props)}
			data-swarm-width={width}
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
		</a>
	);
};

export default LinkButton;
