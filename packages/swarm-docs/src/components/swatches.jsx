import React from 'react';
import colors from '@meetup/swarm-constants/build/js/colors';
import Swatch from './swatch';

const Swatches = props => {
 return(
 	<div style={{display: "flex", "flex-wrap": "wrap"}}>
	 {colors.map(color => <Swatch cssVariable={color.color} />)}
	 </div>);

};
export default Swatches;

