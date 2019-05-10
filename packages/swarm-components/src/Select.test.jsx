import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('Button', () => {
    let count = 0;

    const getSelectMarkup = (props) => (
        <div key={++count}>
            <Select {...props}>
                <option value="geoffrey">Geoffrey</option>
                <option value="drhorse">Doctor Horse, MD Junior</option>
                <option value="chompyhorse">Mister Chompy</option>
            </Select>
        </div>
    );

	const testCases = [
		['Default', getSelectMarkup({name: "select"})],
		['Disabled', getSelectMarkup({name: "select", disabled: true})],
		['Error', getSelectMarkup({name: "select", error: true})],
		['With Id', getSelectMarkup({name: "select", id: "select"})],
		['Required Text', getSelectMarkup({name: "select", requireText: "Must fill!"})],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
