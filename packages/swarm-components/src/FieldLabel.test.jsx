import React from 'react';
import { shallow } from 'enzyme';
import FieldLabel from './FieldLabel';

describe('FieldLabel', () => {
	const testCases = [['Regular', <FieldLabel key="1">Field Label</FieldLabel>]];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
