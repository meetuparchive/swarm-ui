import React from 'react';
import colors from '@meetup/swarm-constants/build/js/colors';
import Swatch from './swatch';

const Swatches = props => {
 return(
 	<div style={{display: "flex", "flexWrap": "wrap"}}>
	 {colors.map(color => <Swatch cssVariable={color.color} name={color.name} />)}
	 </div>);

};
export default Swatches;

