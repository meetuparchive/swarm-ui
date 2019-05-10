import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
	const testCases = [
		['Default', <Toggle key="1" />],
		['Checked', <Toggle key="2" checked />],
		['Disabled', <Toggle key="3" disabled />],
		['Disabled Checked', <Toggle key="4" disabled checked />],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
