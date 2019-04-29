import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';
import Toggle from './Toggle';
import { getTestMarkup } from './testUtils/testUtils.js';

describe('Toggle', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 200, height: 1000 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	const testCases = [
		['Default', <Toggle key="1" />],
		['Checked', <Toggle key="2" checked />],
		['Disabled', <Toggle key="3" disabled />],
		['Disabled Checked', <Toggle key="4" disabled checked />],
	];

	it('Should match screenshot', async () => {
		expect(
			await renderer.screenshot(getTestMarkup(testCases))
		).toMatchImageSnapshot();
	});
});
