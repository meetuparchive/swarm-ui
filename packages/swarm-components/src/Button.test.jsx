import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';
import Button from './Button';
import { getTestMarkup } from './testUtils/testUtils.js';

describe('Button', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 300, height: 2000 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	const testCases = [
		['Default', <Button key="1" >Press me</Button>],
		['Disabled', <Button disabled key="2">Can&apos;t press me</Button>],
		['Primary', <Button primary key="3">Must press me</Button>],
		['Bordered', <Button bordered key="4">Press me</Button>],
		['Icon with text', <Button icon="bolt" key="5">Press me</Button>],
		['Icon (right) with text', <Button right icon="chevron-right" key="6">Press me</Button>],
		['Icon without text', <Button icon="bolt" key="7" />],
		['Reset', <Button reset key="8"> Press me</Button>],
		['Inverted', <Button inverted key="9">Press me</Button>, {backgroundColor: 'black', padding: '1em'}],
		['Neutral', <Button neutral key="10">Press me</Button>],
		['Small', <Button small key="11">Press me</Button>],
		['Grow', <Button grow key="12">Full Width Button</Button>],
	];

	it('Default', async () => {
		expect(
			await renderer.screenshot(getTestMarkup(testCases))
		).toMatchImageSnapshot();
	});
});
