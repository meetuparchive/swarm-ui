import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';

import Button from './Button';

describe('👀 components are visually the same', function() {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			port: 4000,
			viewport: { width: 200, height: 100 },
			staticPath: '../../swarm-styles/dist',
			stylesheets: ['global.css', 'main.css'],
			// verbose: true,
		});
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	describe('Button', () => {
		it('Default', async () => {
			expect(
				await renderer.screenshot(<Button>Press me</Button>)
			).toMatchImageSnapshot();
		});

		it('Disabled', async () => {
			expect(
				await renderer.screenshot(<Button disabled>Can&apos;t press me</Button>)
			).toMatchImageSnapshot();
		});

		it('Primary', async () => {
			expect(
				await renderer.screenshot(<Button primary>Must press me</Button>)
			).toMatchImageSnapshot();
		});
	});
});
