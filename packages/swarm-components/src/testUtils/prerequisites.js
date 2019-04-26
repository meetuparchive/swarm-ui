import fs from 'fs';
import Path from 'path';
import { Exception } from 'handlebars';

// setup.js
module.exports = async () => {
	if (
		!fs.existsSync(
			Path.join(__dirname, '../../../swarm-styles/dist/global.css')
		)
	) {
		throw new Exception(
			"Can't find packages/swarm-styles/dist/global.css! Did you run `yarn build`?"
		);
	}

	if (
		!fs.existsSync(Path.join(__dirname, '../../../swarm-styles/dist/main.css'))
	) {
		throw new Exception(
			"Can't find packages/swarm-styles/dist/main.css! Did you run `yarn build`?"
		);
	}

	if (
		!fs.existsSync(
			Path.join(__dirname, '../../../swarm-docs/src/assets/graphik.css')
		)
	) {
		throw new Exception(
			"Can't find packages/swarm-docs/src/assets/graphik.css"
		);
	}
};
