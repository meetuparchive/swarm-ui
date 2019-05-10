import React from 'react';
import { shallow } from 'enzyme';
import Icon, { MEDIA_SIZES } from './Icon';

describe('Icon', () => {
	const getIconMarkup = (key, props) => (
		<div key={key}>
			{Object.keys(MEDIA_SIZES).map(size => (
				<Icon key={size} size={size} {...props} />
			))}
		</div>
	);

	const testCases = [
		['Regular', getIconMarkup("1", {shape: "cog"})],
		['Circled', getIconMarkup("2", {circle: true, shape: "cog"})],
		['Circled color', getIconMarkup("3", {color: "blue", circle: true, shape: "cog"})],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
