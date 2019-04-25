import Hapi from 'hapi';
import Path from 'path';
import inert from 'inert';

import puppeteer from 'puppeteer';

import ReactDOMServer from 'react-dom/server';

import icons from '../testUtils/icons';
import getPort from 'get-port';

class screenRenderer {
	constructor(config) {
		this.config = {
			viewport: { width: 800, height: 600 },
			verbose: false,
			port: 4000,
			host: 'localhost',
			padding: '1em',
			...config,
		};

		this.routeIndex = 0;
	}

	log(...params) {
		if (this.config.verbose) {
			console.log(...params);
		}
	}

	async init() {
		const { host, port, staticPath } = this.config;

		this.browser = await puppeteer.launch();
		this.log('Browser is running');

		this.server = Hapi.server({
			host,
			port,
			host,
		});

		await this.server.register(inert);

		// serving static styles from swarm-styles
		this.server.route({
			method: 'GET',
			path: '/static/{param*}',
			handler: {
				directory: {
					path: Path.join(__dirname, '../../../swarm-styles/dist'),
				},
			},
		});

		// serving font files from swarm-docs
		this.server.route({
			method: 'GET',
			path: '/assets/{param*}',
			handler: {
				directory: {
					path: Path.join(__dirname, '../../../swarm-docs/src/assets'),
				},
			},
		});

		await this.server.start();
		this.log('Server running on %s', this.server.info.uri);

		return this;
	}

	createRoute(slug, element, bodyStyle = '') {
		return {
			method: 'GET',
			path: `/${slug}`,
			handler: () => `<html>
								<head>
									<link rel="stylesheet" type="text/css" href="/static/global.css" />
									<link rel="stylesheet" type="text/css" href="/static/main.css" />
									<link rel="stylesheet" type="text/css" href="/assets/graphik.css" />
									${icons}
								</head>
								<body style="padding:1em; ${bodyStyle}">
								${ReactDOMServer.renderToStaticMarkup(element)}
								</body>
							</html>`,
		};
	}

	async stop() {
		await this.browser.close();
		return this.server.stop();
	}

	async screenshot(element, screenshotConfig = {}) {
		const page = await this.browser.newPage();
		page.setViewport(
			(screenshotConfig && screenshotConfig.viewport) || this.config.viewport
		);

		const slug = `route-${this.routeIndex++}`;

		this.server.route(
			this.createRoute(slug, element, screenshotConfig.bodyStyle)
		);

		const testUrl = `${this.server.info.uri}/${slug}`;

		this.log(`Testing: ${testUrl}`);
		await page.goto(testUrl);

		if (screenshotConfig.beforeScreenshot) {
			screenshotConfig.beforeScreenshot(page);
		}

		return page.screenshot();
	}
}

export default async config => {
	if (!config.port) {
		config.port = await getPort();
	}

	// enforse localhost when not specified
	if (!config.host) {
		config.host = 'localhost';
	}

	return new screenRenderer(config).init();
};
