import React from 'react';
import { shallow } from 'enzyme';
import TogglePill from './TogglePill';

describe('TogglePill', () => {
	const testCases = [
		['Default', <TogglePill key="default">Toggle me</TogglePill>],
		[
			'Checked',
			<TogglePill key="checked" checked>
				Un-toggle me
			</TogglePill>,
		],
		[
			'Disabled',
			<TogglePill key="disabled" disabled>
				Can&apos;t toggle me
			</TogglePill>,
		],
		[
			'Disabled Checked',
			<TogglePill key="disabled-checked" disabled checked>
				Can&apos;t un-toggle me
			</TogglePill>,
		],
		[
			'Grow',
			<TogglePill key="grow" grow>
				Full width (grow)
			</TogglePill>,
		],
		[
			'Reset',
			<TogglePill key="reset" reset>
				No styles
			</TogglePill>,
		],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
