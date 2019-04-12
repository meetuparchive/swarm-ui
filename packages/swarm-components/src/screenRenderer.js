import Hapi from 'hapi';
import Path from 'path';
import inert from 'inert';

import puppeteer from 'puppeteer';

import ReactDOMServer from 'react-dom/server';

class screenRenderer {
	constructor(config) {
		this.config = { verbose: false, port: 4000, padding: '1em', ...config };

		this.routeIndex = 0;
	}

	log(...params) {
		if (this.config.verbose) {
			console.log(...params);
		}
	}

	async init() {
		const { port, staticPath } = this.config;

		this.browser = await puppeteer.launch();
		this.log('Browser is running');

		this.server = Hapi.server({
			port,
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
	}

	createRoute(slug, element) {
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
								<body style="padding: ${this.config.padding}">
								${ReactDOMServer.renderToStaticMarkup(element)}
								</body>
							</html>`,
		};
	}

	async stop() {
		await this.browser.close();
		return this.server.stop();
	}

	async screenshot(element) {
		const page = await this.browser.newPage();
		page.setViewport(this.config.viewport);

		const SLUG = `route-${this.routeIndex++}`;

		this.server.route(this.createRoute(SLUG, element));

		const TEST_URL = `${this.server.info.uri}/${SLUG}`;

		this.log(`Testing: ${TEST_URL}`);
		await page.goto(TEST_URL);

		return page.screenshot();
	}
}

const getScreenRenderer = async config => {
	const renderer = new screenRenderer(config);

	await renderer.init();

	return renderer;
};

export default getScreenRenderer;
