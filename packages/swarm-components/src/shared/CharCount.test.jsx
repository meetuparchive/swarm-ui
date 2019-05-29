import React from 'react';
import { shallow } from 'enzyme';
import CharCount, {
    getCharacterCount,
} from './CharCount';

describe('CharCount', () => {
	const testCases = [
		['Default', <CharCount key="0" />],
		['with props', <CharCount key="1" className="foo" data-attribute="foo" />],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
    });
});

describe('getCharacterCount', () => {
	it('returns 0 when no argument provided', () => {
		expect(getCharacterCount()).toEqual(0);
	});

	it('returns the length of a string', () => {
		expect(getCharacterCount('')).toEqual(0);
		expect(getCharacterCount('f')).toEqual(1);
		expect(getCharacterCount('f234')).toEqual(4);
		expect(getCharacterCount('ff ff ff')).toEqual(8);
	});
});
