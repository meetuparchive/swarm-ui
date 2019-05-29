import React from 'react';
import { shallow } from 'enzyme';
import CharCount, { getRemainingCharacters } from './CharCount';

describe('CharCount', () => {
	const testCases = [
		['Default', <CharCount key="0" />],
		['with props', <CharCount key="1" className="foo" data-attribute="foo" />],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});
});

describe('getRemainingCharacters', () => {
	const maxLength = 10;

	it('returns `maxLength` when no value provided', () => {
		expect(getRemainingCharacters(maxLength)).toEqual(maxLength);
	});

	it('returns the remaining character count', () => {
		expect(getRemainingCharacters(maxLength, '')).toEqual(maxLength);
		expect(getRemainingCharacters(maxLength, 'f')).toEqual(9);
		expect(getRemainingCharacters(maxLength, 'f234')).toEqual(6);
		expect(getRemainingCharacters(maxLength, 'ff ff ')).toEqual(4);
		expect(getRemainingCharacters(maxLength, '000000000000000')).toEqual(-5);
	});
});
