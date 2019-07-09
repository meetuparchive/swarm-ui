import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const getSwatchStyles = hex => (
	{
		cursor: "pointer",
		position: "relative",
		backgroundColor: hex,
		height: 239,
		width: 190, margin: 10,
		borderRadius: 6,
		boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.1)",
		border: "1px solid #f6f7f8"
	}
);

const swatchBackground = {
	fontFamily: "AndaleMono",
	fontSize: 13,
	position: "absolute",
	bottom: 0,
	width: "100%",
	backgroundColor: "#f6f7f8"
};

const Swatch = ({name, hex}) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		}
	  }, [copied]);

	const onClickColorSwatch = (cssVarName) => {
		navigator.clipboard.writeText(`var(${cssVarName})`);
		setCopied(!copied);
	};

	const displayName = name.split("color").pop().split("-").join(" ");
	const cssVarName = `--${name}`;
	return (
		<button
			onClick={() => onClickColorSwatch(cssVarName)}
			style={getSwatchStyles(hex)}>
			{ copied && <p style={{ position: 'absolute', width: '100%', background: `linear-gradient(90deg, ${hex} 35%, #fff 35%, #fff 65%, ${hex} 65%)`, top: 2}}>Copied!</p>}
			<div style={swatchBackground}>
				<p style={{padding: 8}}>{`${displayName}`} <br/> {hex} <br/> {cssVarName} </p>
			</div>
		</button>
	);
};

Swatch.propTypes = {
	name: PropTypes.string,
	hex: PropTypes.string,
};

export default Swatch;

