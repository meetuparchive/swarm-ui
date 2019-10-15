// @flow
import React from 'react';
import * as Icons from '@meetup/swarm-icons/lib/components/solid';

function toPascalCase(s) {
	const capitalized = s.charAt(0).toUpperCase() + s.slice(1);
	return capitalized.replace(/-(\w)/g, g => g[1].toUpperCase());
}

type Props = {
	shape: string,
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
	const { shape, ...other } = props;

	const Component = Icons[toPascalCase(shape)];

	if (!Component) {
		console.warn(
			`The ${shape} icon does not exist in the solid icon family used in <Button />, please see the docs for current supported icons https://swarm-docs.now.sh/Foundations/Icons`
		);
	}

	return Component ? <Component {...other} /> : null;
};

export default Icon;
