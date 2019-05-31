// @flow
import * as React from 'react';

type CharProps = {
	maxLength: number,
	charLength?: number,
};

export const getRemainingCharacters = (maxLength: number, charLength: number = 0) => maxLength - charLength;

const CharCount = (props: CharProps) => {
	const {
		maxLength,
		charLength = 0,
		...other
	} = props;

	return (
		<p data-swarm-textarea-char-count className="text--tiny" {...other}>
			{getRemainingCharacters(maxLength, charLength)}
		</p>
	);
};

export default CharCount;
