#!/usr/bin/env node

const fs = require('fs');
const argv = require('yargs').options('f', {
	alias: 'family',
	default: 'solid',
}).argv;

const ICON_SIZES = {
	line: '24',
	solid: '18',
	large: '28',
};

console.log(`building ${argv.family} icon set`);

function toCamelCase(s) {
	return s.replace(/[\s-](\w)/g, g => g[1].toUpperCase());
}

const createIconComponent = (componentName, contents, size) => {
	return `import React from 'react';

const ${componentName} = props => (
	<svg data-swarm-icon height="${size}" width="${size}" viewBox="0 0 ${size} ${size}" {...props}>
		${contents}
	</svg>
);

export default ${componentName};
`;
};

const files = fs.readdirSync(`${__dirname}/icons/${argv.family}`);

if (!files.length) {
	console.error('Could not list the directory.');
	process.exit(1);
}

const alphabetizedFiles = files.sort((a, b) =>
	toCamelCase(a).localeCompare(toCamelCase(b))
);

alphabetizedFiles.forEach(function(file, index) {
	// syncronous in order to keep alphabetical order
	const data = fs.readFileSync(`${__dirname}/icons/${argv.family}/${file}`);
	let contents = data.toString();

	// stripping outer svg tag
	contents = contents
		.replace(/<svg[^>]*>/, '')
		.replace('</svg>', '')
		.replace(/(\S)\/>/g, '$1 />')
		.replace(/\sfill="#[^"]*"/g, '')
		.replace(/fill-rule/g, 'fillRule');

	const camelCaseFilename = toCamelCase(file);
	const componentName =
		camelCaseFilename.charAt(0).toUpperCase() + // TitleCasing
		camelCaseFilename.slice(1).replace('.svg', ''); // stripping .svg extension

	// write component JSX
	fs.writeFileSync(
		`${__dirname}/components/${argv.family}/${componentName}.jsx`,
		createIconComponent(componentName, contents, ICON_SIZES[argv.family] || '18')
	);
});

buildIndex(alphabetizedFiles, argv.family);

function buildIndex(files, family) {
	// initialize empty index file
	fs.writeFileSync(`${__dirname}/components/${argv.family}/index.js`, '');

	files.forEach(function(file, index) {
		const camelCaseFilename = toCamelCase(file);
		const componentName =
			camelCaseFilename.charAt(0).toUpperCase() + // TitleCasing
			camelCaseFilename.slice(1).replace('.svg', ''); // stripping .svg extension
		appendToIndex(componentName, family);
	});
}

function appendToIndex(component, family) {
	console.log('writing to index:', family, component);
	// append export to index file
	fs.appendFileSync(
		`${__dirname}/components/${family}/index.js`,
		`export { default as ${component} } from './${component}';\n`
	);
}

console.log(`finished building ${argv.family} icon set`);
