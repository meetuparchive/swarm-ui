import React from 'react';
import { shallow } from 'enzyme';
import FieldHelper from './FieldHelper';

describe('FieldHelper', () => {
	const testCases = [
		['Default', <FieldHelper key="1">Help me!</FieldHelper>],
		[
			'Custom Styling',
			<FieldHelper style={{ color: 'red' }} key="2">
				Help me, I&apos;m red!
			</FieldHelper>,
		],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
