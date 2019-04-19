import Hapi from 'hapi';
import Path from 'path';
import inert from 'inert';

import puppeteer from 'puppeteer';

import ReactDOMServer from 'react-dom/server';

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
		const { port, host, staticPath } = this.config;

		this.browser = await puppeteer.launch();
		this.log('Browser is running');

		this.server = Hapi.server({
			port,
			host,
		});

		await this.server.register(inert);

		// serving static files
		this.server.route({
			method: 'GET',
			path: '/static/{param*}',
			handler: {
				directory: {
					path: Path.join(__dirname, staticPath),
				},
			},
		});

		await this.server.start();
		this.log('Server running on %s', this.server.info.uri);

		return this;
	}

	createRoute(slug, element, bodyStyle='') {
		const links = this.config.stylesheets
			.map(
				stylesheet =>
					`<link
						rel="stylesheet"
						type="text/css"
						href="/static/${stylesheet}" />`
			)
			.join('\n');

		return {
			method: 'GET',
			path: `/${slug}`,
			handler: () => `<html>
								<head>
									${links}
								</head>
								<body style="padding: ${this.config.padding}; ${bodyStyle}">
								${ReactDOMServer.renderToStaticMarkup(element)}
								</body>
							</html>`,
		};
	}

	async stop() {
		await this.browser.close();
		return this.server.stop();
	}

	async screenshot(element, screenshotConfig) {
		const page = await this.browser.newPage();
		page.setViewport(
			(screenshotConfig && screenshotConfig.viewport) || this.config.viewport
		);

		const slug = `route-${this.routeIndex++}`;

		this.server.route(this.createRoute(slug, element, screenshotConfig.bodyStyle));

		const testUrl = `${this.server.info.uri}/${slug}`;

		this.log(`Testing: ${testUrl}`);
		await page.goto(testUrl);

		return page.screenshot();
	}
}

export default async config => new screenRenderer(config).init();
