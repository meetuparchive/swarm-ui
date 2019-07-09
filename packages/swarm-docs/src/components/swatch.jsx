import React from 'react';


const Swatch = props => {
	const displayName = props.name.split("color").pop().split("-").join(" ");
	const cssVarName = `--${props.name}`;
	return (
		<div onClick={() => navigator.clipboard.writeText(cssVarName)} style={{ cursor: "pointer", position: "relative", backgroundColor: props.cssVariable, height:239, width: 190, margin: 15, "border-radius": 6, "boxShadow": "0px 2px 5px 0px rgba(0, 0, 0, 0.1)", "border": "1px solid #f6f7f8"}}>
			<div style={{ fontFamily: "AndaleMono", "font-size": 13, position: "absolute", bottom: 0, width: "100%",  backgroundColor: "#f6f7f8"}}>
				<div style={{padding: 10}} >
					<p>{`${displayName}`}</p>
					<p>{props.cssVariable}</p>
					<p>{cssVarName}</p>
				</div>
			</div>
		</div>
	);
};

export default Swatch;
