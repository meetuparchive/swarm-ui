import React from 'react';
import colors from '@meetup/swarm-constants/build/js/colors';
import Swatch from './swatch';

const Swatches = () => (
	<div style={{display: "flex", "flexWrap": "wrap"}}>
		{colors.map(color => <Swatch hex={color.hex} name={color.name} key={color.name} />)}
	</div>
);

export default Swatches;
