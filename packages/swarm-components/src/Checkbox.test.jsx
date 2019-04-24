import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
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
	it('Unchecked', async () => {
		expect(
			await renderer.screenshot(<Checkbox>Check me</Checkbox>)
		).toMatchImageSnapshot();
	});
	it('Checked', async () => {
		expect(
			await renderer.screenshot(<Checkbox checked>Uncheck me</Checkbox>)
		).toMatchImageSnapshot();
	});
	it('Disbled unchecked', async () => {
		expect(
			await renderer.screenshot(
				<Checkbox disabled>Can&apos;t check me</Checkbox>
			)
		).toMatchImageSnapshot();
	});
	it('Disbled checked', async () => {
		expect(
			await renderer.screenshot(
				<Checkbox disabled checked>
					Can&apos;t uncheck me
				</Checkbox>
			)
		).toMatchImageSnapshot();
	});
});
