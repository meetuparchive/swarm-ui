import React from 'react';

import puppeteer from 'puppeteer';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });

import { init, createRoute } from './testServer';
const TEST_SERVER_PORT = 4000;

import Button from './Button';

describe('👀 components are visually the same', function() {
	let server, browser, page;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		server = await init({
			port: TEST_SERVER_PORT,
		});
		browser = await puppeteer.launch();
	});

	// This is ran when the suite is done. Stop your server here and close the browser.
	afterAll(async () => {
		await browser.close();

		// comment next line out if you want to to open it in your browser for debugging
		return server.stop();
	});

	// This is ran before every test. It's where you open a new page.
	beforeEach(async () => {
		page = await browser.newPage();
		page.setViewport({ width: 200, height: 100 });
	});

	describe('Button', () => {
		it('Default', async () => {
			const SLUG = 'Button';

			server.route(createRoute(SLUG, <Button>Press me</Button>));
			await page.goto(`${server.info.uri}/${SLUG}`);

			expect(await page.screenshot()).toMatchImageSnapshot({
				customSnapshotIdentifier: SLUG,
			});
		});

		it('Disabled', async () => {
			const SLUG = 'Button-disabled';

			server.route(
				createRoute(SLUG, <Button disabled>Can&apos;t press me</Button>)
			);
			await page.goto(`${server.info.uri}/${SLUG}`);

			expect(await page.screenshot()).toMatchImageSnapshot({
				customSnapshotIdentifier: SLUG,
			});
		});

		it('Primary', async () => {
			const SLUG = 'Button-primary';

			server.route(createRoute(SLUG, <Button primary>Must press me</Button>));
			await page.goto(`${server.info.uri}/${SLUG}`);

			expect(await page.screenshot()).toMatchImageSnapshot({
				customSnapshotIdentifier: SLUG,
			});
		});
	});
});
