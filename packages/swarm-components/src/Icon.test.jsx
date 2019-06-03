import React from 'react';
import { shallow } from 'enzyme';
import Icon, { MEDIA_SIZES } from './Icon';

describe('Icon', () => {
	let count = 0;

	const getIconMarkup = props => (
		<div key={++count}>
			{Object.keys(MEDIA_SIZES).map(size => (
				<Icon key={size} size={size} {...props} />
			))}
		</div>
	);

	const testCases = [
		['Regular', getIconMarkup({ shape: 'cog' })],
		['Circled', getIconMarkup({ circle: true, shape: 'cog' })],
		['Circled color', getIconMarkup({ color: 'blue', circle: true, shape: 'cog' })],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
