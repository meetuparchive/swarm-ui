import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';

import FieldLabel from './FieldLabel';
import Checkbox from './Checkbox';

describe('FieldLabel', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 300, height: 100 },
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	it('Label alone', async () => {
		expect(
			await renderer.screenshot(<FieldLabel>Field Label</FieldLabel>)
		).toMatchImageSnapshot();
	});

	it('Pass focus', async () => {
		const checkboxWithLabel = (
			<div>
				<FieldLabel id="swarm-external-label" htmlFor="swarm-checkbox">
					External checkbox Label
				</FieldLabel>
				<Checkbox id="swarm-checkbox">Checkbox&apos;s own text</Checkbox>
			</div>
		);

		expect(
			await renderer.screenshot(checkboxWithLabel, {
				beforeScreenshot: page => {
					page.click('#swarm-external-label');
				},
			})
		).toMatchImageSnapshot();
	});
});
