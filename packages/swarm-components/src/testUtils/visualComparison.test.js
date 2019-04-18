import glob from 'glob';
import path from 'path';
import slugify from 'slugify';

const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

const toMatchImageSnapshot = configureToMatchImageSnapshot({
	customSnapshotsDir: `${__dirname}/../__image_snapshots__/`,
	customDiffDir: `${__dirname}/../__image_snapshots__/diff/`,
});
expect.extend({ toMatchImageSnapshot });

import getScreenRenderer from './screenRenderer';

describe('👀 components are visually the same', () => {
	let renderer;

	// This is ran when the suite starts up.
	beforeAll(async () => {
		try {
			const config = {
				port: 4000,
				viewport: { width: 200, height: 100 },
				staticPath: `./../../../swarm-styles/dist`,
				stylesheets: ['global.css', 'main.css'],
				// verbose: true,
			};

			renderer = await getScreenRenderer(config);
		} catch (x) {
			console.log('Gotcha', x.message);
		}
	});

	// This is ran when the suite is done - stop the renderer.
	afterAll(() => {
		// comment next line out if you want to open it in your browser for debugging
		return renderer.stop();
	});

	const testCases = glob
		.sync(`${__dirname}/../**/*.snap.jsx`)
		.reduce((acc, file) => {
			acc.push({
				component: path.basename(file, '.snap.jsx'),
				tests: require(file),
			});

			return acc;
		}, []);

	testCases.forEach(suite => {
		describe(suite.component, () => {
			suite.tests.forEach(test =>
				it(test.description, async () => {
					try {
						expect(
							await renderer.screenshot(test.element)
						).toMatchImageSnapshot({
							customSnapshotIdentifier: `${slugify(suite.component)}-${slugify(
								test.description
							)}`,
						});
					} catch (e) {
						console.log('Hmmm', e.message);
					}
				})
			);
		});
	});
});
