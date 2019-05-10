import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

describe('Radio', () => {
    const mockOnChange = jest.fn();
	const testCases = [
		['Default', <Radio name="radio" key="0" label="Default" />],
		['Children', <Radio name="radio" key="1">Children</Radio>],
		['Checked', <Radio name="radio" key="2" label="Checked" checked />],
		['Disabled', <Radio name="radio" key="3" label="Disabled" disabled />],
		['Checked Disabled', <Radio name="radio" key="4" label="Checked Disabled" checked disabled />],
		['With Id', <Radio name="radio" id="radio" key="5" label="Id" />],
		['With onChange', <Radio name="radio" key="6" label="onChange" onChange={mockOnChange} />],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
