import React from 'react';


const Swatch = props => {
	return (
		<div onClick={() => navigator.clipboard.writeText(props.cssVariable)}style={{ backgroundColor: props.cssVariable, height:300, width: 200, margin: 10 }}>
			<p style={{backgroundColor: "white", "margin-top": 150, "text-align": "center"}} >{`${props.cssVariable}`}</p>
		</div>
	);
};

export default Swatch;
