module.exports = {
	'packages/**/*.{js,jsx}': [
		'prettier --write --single-quote --use-tabs --trailing-comma es5',
		'eslint',
		'git add',
	],
};
