import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';

import FieldHelper from './FieldHelper';

describe('FieldHelper', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 200, height: 100 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});
	it('Default', async () => {
		expect(
			await renderer.screenshot(<FieldHelper>Help me!</FieldHelper>)
		).toMatchImageSnapshot();
	});
	it('Custom styling', async () => {
		expect(
			await renderer.screenshot(
				<FieldHelper style={{ color: 'red' }}>
					Help me, I&apos;m red!
				</FieldHelper>
			)
		).toMatchImageSnapshot();
	});
});
