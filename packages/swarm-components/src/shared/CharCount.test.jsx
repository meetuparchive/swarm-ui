import React from 'react';
import { shallow } from 'enzyme';
import CharCount, {
	getRemainingCharacters,
	hasMaxLengthError,
} from './CharCount';

describe('CharCount', () => {
	const testCases = [
		['Default', <CharCount key="0" maxLength={80} />],
		[
			'Default with props',
			<CharCount key="1" className="foo" maxLength={80} data-attribute="foo" />,
		],
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

describe('hasMaxLengthError', () => {
	const maxLength = 10;

	it('returns false when no charLength argument is provided', () => {
		expect(hasMaxLengthError(maxLength)).toEqual(false);
	});

	it('returns false when value length is less than maxLength', () => {
		expect(hasMaxLengthError(maxLength, 5)).toEqual(false);
	});

	it('returns false when value length is equal to maxLength', () => {
		expect(hasMaxLengthError(maxLength, maxLength)).toEqual(false);
	});

	it('returns true when value length is greater than maxLength', () => {
		expect(hasMaxLengthError(maxLength, 15)).toEqual(true);
	});
});
