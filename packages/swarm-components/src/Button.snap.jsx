import React from 'react';

import Button from './Button';

module.exports = [
	{
		description: 'Default',
		element: <Button>Press me</Button>,
	},
	{
		description: 'Disabled',
		element: <Button disabled>Can&apos;t press me</Button>,
	},
	{
		description: 'Primary',
		element: <Button primary>Must press me</Button>,
	},
];
