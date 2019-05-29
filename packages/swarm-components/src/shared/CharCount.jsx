// @flow
import * as React from 'react';

type CharProps = {
	children?: React.Node,
};

export const getRemainingCharacters = (maxLength: number, value: string = '') =>
	maxLength - value.length;

const CharCount = (props: CharProps) => (
	<p data-swarm-textarea-char-count className="text--tiny" {...props} />
);

export default CharCount;
