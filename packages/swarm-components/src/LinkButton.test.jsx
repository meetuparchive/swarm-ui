import React from 'react';
import { shallow } from 'enzyme';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
	const testCases = [
		['Default', <LinkButton key="1">Press me</LinkButton>],
		[
			'Disabled',
			<LinkButton disabled key="2">
				Can&apos;t press me
			</LinkButton>,
		],
		[
			'Primary',
			<LinkButton primary key="3">
				Must press me
			</LinkButton>,
		],
		[
			'Bordered',
			<LinkButton bordered key="4">
				Press me
			</LinkButton>,
		],
		[
			'Icon with text',
			<LinkButton icon="bolt" key="5">
				Press me
			</LinkButton>,
		],
		[
			'Icon (right) with text',
			<LinkButton right icon="chevron-right" key="6">
				Press me
			</LinkButton>,
		],
		['Icon without text', <LinkButton icon="bolt" key="7" />],
		[
			'Inverted',
			<LinkButton inverted key="8">
				{' '}
				Press me
			</LinkButton>,
		],
		[
			'Neutral',
			<LinkButton neutral key="9">
				{' '}
				Press me
			</LinkButton>,
		],
		[
			'Small',
			<LinkButton small key="10">
				{' '}
				Press me
			</LinkButton>,
		],
		[
			'Grow',
			<LinkButton grow key="11">
				Full Width Button
			</LinkButton>,
		],
	];
	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});
