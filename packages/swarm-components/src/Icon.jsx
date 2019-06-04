// @flow
import React from 'react';
import cx from 'classnames';
import { VALID_SHAPES } from 'swarm-icons/dist/js/shapeConstants';

export const ICON_CLASS = 'svg';
export const SVG_THIN_STYLE = '--small';
export const ICON_CIRCLED_CLASS = 'svg--circled';

export const MEDIA_SIZES = {
	xxs: '12',
	xs: '20',
	s: '24',
	m: '36',
	l: '48',
	xl: '72',
	xxl: '120',
};

const SMALL_ICON_VARIANT_WHITELIST = VALID_SHAPES.filter(
	s => !s.startsWith('external') && !s.startsWith('meetup') // no third party icons // logos use same path for `xs`
);

/**
 * @param {String} shape - icon shape
 * @param {String} size - icon size
 * @returns {String} icon name (with or without suffix)
 */
export const getIconShape = (shape: string, size: string) => {
	if (!SMALL_ICON_VARIANT_WHITELIST.includes(shape)) {
		return shape;
	}

	const suffix =
		size === 'xxs' || size === 'xs' || size === 's' ? SVG_THIN_STYLE : '';
	return `${shape}${suffix}`;
};

type Props = {
	/** Which of our media sizes to render the icon at */
	size?: string,
	/** The name of the icon shape to render */
	shape: string,
	/** Whether the icon is outlined with a circle */
	circle?: boolean,
	/** What color the icon should be filled with */
	color?: string,
	/** Class applied to svg tag */
	className?: string,
	/** Object of css styles */
	style?: {
		color?: string,
		fill?: string,
	},
};

type AllStyles = {
	color?: string,
	fill?: string,
};

/**
 * Icon component used to insert an svg icon into a component or page
 *
 * **Accessibility** If an Icon is used on its own without supporting
 * text to explain what it is/does, be a good citizen and pass in an
 * `aria-label` attribute describing what the icon represents
 *
 * @module Icon
 */
const Icon = (props: Props) => {
	const { className, shape, size = 'xs', color, style, circle, ...other } = props;

	const classNames = cx(
		ICON_CLASS,
		`svg--${shape}`,
		{ [ICON_CIRCLED_CLASS]: circle },
		className,
		'svg-icon',
		'valign--middle'
	);

	const sizeVal = MEDIA_SIZES[size];

	const allStyles: AllStyles = style || {};
	if (color) {
		allStyles.fill = color;
	}

	return (
		<svg
			preserveAspectRatio="xMinYMin meet"
			width={sizeVal}
			height={sizeVal}
			viewBox={`0 0 ${sizeVal} ${sizeVal}`}
			className={classNames}
			role="img"
			style={allStyles}
			{...other}
		>
			<use xlinkHref={`#icon-${getIconShape(shape, size)}`} />
		</svg>
	);
};

Icon.defaultProps = {
	size: 's',
};

export default Icon;
