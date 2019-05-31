import React from 'react';
import { shallow } from 'enzyme';
import CharCount, { getRemainingCharacters } from './CharCount';

describe('CharCount', () => {
	const testCases = [
		['Default', <CharCount key="0" maxLength={80} />],
		['Default with props', <CharCount key="1" className="foo" maxLength={80} data-attribute="foo" />],
		['Value', <CharCount key="0" maxLength={80} value="some test value" />],
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
		expect(getRemainingCharacters(maxLength, 0)).toEqual(maxLength);
		expect(getRemainingCharacters(maxLength, 6)).toEqual(4);
		expect(getRemainingCharacters(maxLength, 15)).toEqual(-5);
	});
});
