import React from 'react';


const Swatch = props => {
	const displayName = props.name.split("color").pop().split("-").join(" ")
	return (
		<div onClick={() => navigator.clipboard.writeText(`--${props.name}`)} style={{ cursor: "pointer", backgroundColor: props.cssVariable, height:250, width: 200, margin: 15, "border-radius": 6}}>
			<p style={{backgroundColor: "white", "margin-top": 150, "text-align": "center"}} >{`${displayName}`}</p>
		</div>
	);
};

export default Swatch;
