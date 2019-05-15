import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
	const testCases = [
		['Default', <Checkbox key="default">Check me</Checkbox>],
		[
			'Checked',
			<Checkbox key="checked" checked>
				Uncheck me
			</Checkbox>,
		],
		[
			'Disabled unchecked',
			<Checkbox key="disabled" disabled>
				Can&apos;t check me
			</Checkbox>,
		],
		[
			'Disabled checked',
			<Checkbox key="disabled-checked" disabled checked>
				Can&apos;t uncheck me
			</Checkbox>,
		],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
