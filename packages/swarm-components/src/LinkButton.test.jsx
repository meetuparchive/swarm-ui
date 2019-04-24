import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			port: 4000,
			viewport: { width: 300, height: 100 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	const testCases = [
		['Default', <LinkButton key="1" >Press me</LinkButton>],
		['Disabled', <LinkButton disabled key="2">Can&apos;t press me</LinkButton>],
		['Primary', <LinkButton primary key="3">Must press me</LinkButton>],
		['Bordered', <LinkButton bordered key="4">Press me</LinkButton>],
		['Icon with text', <LinkButton icon="bolt" key="5">Press me</LinkButton>],
		['Icon (right) with text', <LinkButton right icon="chevron-right" key="6">Press me</LinkButton>],
		['Icon without text', <LinkButton icon="bolt" key="7" />],
		['Inverted', <LinkButton inverted key="9"> Press me</LinkButton>, {bodyStyle: 'background-color:powderblue;'}],
		['Neutral', <LinkButton neutral key="10"> Press me</LinkButton>],
		['Small', <LinkButton small key="11"> Press me</LinkButton>],
	];

	test.each(testCases)('Visual diff: %s', async (description, element) => {
		expect(
			await renderer.screenshot(element)
		).toMatchImageSnapshot();
	});
});