import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
	const testCases = [
		['Default', <Button key="1">Press me</Button>],
		[
			'Disabled',
			<Button disabled key="2">
				Can&apos;t press me
			</Button>,
		],
		[
			'Primary',
			<Button primary key="3">
				Must press me
			</Button>,
		],
		[
			'Bordered',
			<Button bordered key="4">
				Press me
			</Button>,
		],
		[
			'Icon with text',
			<Button icon="bolt" key="5">
				Press me
			</Button>,
		],
		[
			'Icon (right) with text',
			<Button right icon="chevron-right" key="6">
				Press me
			</Button>,
		],
		['Icon without text', <Button icon="bolt" key="7" />],
		[
			'Reset',
			<Button reset key="8">
				Press me
			</Button>,
		],
		[
			'Inverted',
			<Button inverted key="9">
				Press me
			</Button>,
		],
		[
			'Neutral',
			<Button neutral key="10">
				Press me
			</Button>,
		],
		[
			'Small',
			<Button small key="11">
				Press me
			</Button>,
		],
		[
			'Grow',
			<Button grow key="12">
				Full Width Button
			</Button>,
		],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
