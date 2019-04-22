import React from 'react';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './testUtils/screenRenderer';

import Button from './Button';

describe('Button', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 200, height: 100 },
			staticPath: '../../../swarm-styles/dist',
			stylesheets: ['global.css', 'main.css'],
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

	it('Bordered', async () => {
		expect(
			await renderer.screenshot(<Button bordered>Press me</Button>)
		).toMatchImageSnapshot();
	});

	it('Icon with text', async () => {
		expect(
			await renderer.screenshot(<Button icon="bolt">Press me</Button>)
		).toMatchImageSnapshot();
	});
	it('Icon (right) with text', async () => {
		expect(
			await renderer.screenshot(<Button right icon="chevron-right">Press me</Button>)
		).toMatchImageSnapshot();
	});
	it('Icon without text', async () => {
		expect(
			await renderer.screenshot(<Button icon="bolt" />)
		).toMatchImageSnapshot();
	});
	it('Reset', async () => {
		expect(
			await renderer.screenshot(<Button reset> Press me</Button>)
		).toMatchImageSnapshot();
	});
	it('Inverted', async () => {
		// Adding a background so the inverted button shows up in the screenshot.
		expect(
			await renderer.screenshot(<Button inverted> Press me</Button>, {bodyStyle: 'background-color:powderblue;'})
		).toMatchImageSnapshot();
	});
	it('Neutral', async () => {
		expect(
			await renderer.screenshot(<Button neutral> Press me</Button>)
		).toMatchImageSnapshot();
	});
	it('Small', async () => {
		expect(
			await renderer.screenshot(<Button small> Press me</Button>)
		).toMatchImageSnapshot();
	});
});
