# `swarm-components`

> TODO: description

## Usage

```
const swarmComponents = require('swarm-components');

```

## Testing
This repo uses `puppeteer` and `hapi`-based web server to render components and generate screenshots to determine discrepancies using visual comparison. Screenshots are commited to repository (see `src/__image_screenshots__/` folder).

We use `jest-image-snapshot` jest extension to help us manage comparison similarly - it provides `.toMatchImageSnapshot()` method to your tests, which behaves similarly to native `.toMatchSnapshot()`. You need to extend `expect` method before using it:
```js
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });
```

We use `screenRenderer`, our custom wrapper around `puppeteer` for testing using Chrome and web server which renders and serves components as web pages.

To generate component screenshots, initialize renderer before tests:
```js
import getScreenRenderer from './testUtils/screenRenderer';
describe('LinkButton', () => {
	let renderer;

	beforeAll(async () => {
		renderer = await getScreenRenderer({
			viewport: { width: 300, height: 2000 },
		});
	});
...
```
also, don't forget to stop renderer once all tests in the suit are complete:
```js
	afterAll(() => {
		return renderer.stop();
    });
```

For individual tests, just call an async `renderer.screenshot()` method and pass a component you'd like to render and call `toMatchImageSnapshot` method provided by `jest-image-snapshot` jest extension:
```js
it('Visually matches', async () => {
    expect(
        await renderer.screenshot(<FieldLabel>Field Label</FieldLabel>)
    ).toMatchImageSnapshot();
});
```
Second parameter to `screenshot` method is a configuration object that allows you to customize renderer for individual screnshots:
* `viewport` - resize window
* `bodyStyle` - custom styles applied to `<body>` of the page before rendering (default: `padding: 1em`)
* `beforeScreenshot` - a callback which gets `puppeteer`'s `page` object passed it to it. Useful for firing events on the page before taking a screenshot like clicking individual elements, for example

