import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';
import TogglePill from './TogglePill';
import { getTestMarkup } from './testUtils/testUtils.js';

describe('TogglePill', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 300, height: 1000 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

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
			<TogglePill key="default" disabled checked>
				Can&apos;t un-toggle me
			</TogglePill>,
		],
	];

	it('Should match screenshot', async () => {
		expect(
			await renderer.screenshot(getTestMarkup(testCases))
		).toMatchImageSnapshot();
	});
});
