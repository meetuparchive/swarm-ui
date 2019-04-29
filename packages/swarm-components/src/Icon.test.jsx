import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';
import { getTestMarkup } from './testUtils/testUtils.js';

import Icon, { MEDIA_SIZES } from './Icon';

describe('Icon', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 400, height: 500 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	const testCases = [
		[
			'Regular',
			Object.keys(MEDIA_SIZES).map(size => (
				<Icon key={size} size={size} shape="cog" />
			)),
		],
		[
			'Circled',
			Object.keys(MEDIA_SIZES).map(size => (
				<Icon key={size} size={size} circle shape="cog" />
			)),
		],
		[
			'Circled color',
			Object.keys(MEDIA_SIZES).map(size => (
				<Icon key={size} size={size} color="blue" circle shape="cog" />
			)),
		],
	];

	it('Should match screenshot', async () =>
		expect(
			await renderer.screenshot(getTestMarkup(testCases))
		).toMatchImageSnapshot());
});
