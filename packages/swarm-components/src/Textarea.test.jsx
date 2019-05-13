import React from 'react';
import { shallow, mount } from 'enzyme';
import Textarea, {
	getTextareaStatus,
	getCharacterCount,
	CharCount,
} from './Textarea';
import auto from 'autosize';
import { isTryStatement } from '@babel/types';

// mock `auto` from autosize library
jest.mock('autosize', () => {
	let autosize = jest.fn();
	autosize.update = jest.fn();
	autosize.destory = jest.fn();
	return autosize;
});

describe('Textarea', () => {
    const mockOnChange = jest.fn();

	const testCases = [
		['Default (empty)', <Textarea key="0" value="" />],
		['Default (value)', <Textarea key="1" value="foo" />],
		['Disabled', <Textarea key="2" value="" disabled />],
		['Error', <Textarea key="3" value="foo" error />],
		['maxLength', <Textarea key="4" value="foo" maxLength />],
		['autosize', <Textarea key="5" value="foo" autosize />],
		['onChange', <Textarea key="6" value="" onChange={mockOnChange} />],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
    });

    describe('autosize', ()=> {
        it('calls autosize on mount', () => {
			auto.mockClear();
            mount(<Textarea value="something" onChange={mockOnChange} autosize />);
            expect(auto).toHaveBeenCalled();
		});

		it('calls autosize.update on componentDidUpdate', () => {
			auto.mockClear();
            const textarea = mount(<Textarea value="something" onChange={mockOnChange} autosize />);
			textarea.instance().componentDidUpdate({value: "prev props values"});
			expect(auto.update).toHaveBeenCalled();
		});
    });
});

describe('getTextareaStatus', () => {
	it('returns disabled when props contain disabled=true', () => {
		expect(getTextareaStatus({disabled: true})).toEqual('disabled');
		expect(getTextareaStatus({disabled: true, error: true})).toEqual('disabled');
	});

	it('returns error when props contain error=true', () => {
		expect(getTextareaStatus({error: true})).toEqual('error');
	});

	it('returns default when props do not contain disabled or error', () => {
		expect(getTextareaStatus({})).toEqual('default');
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

describe('CharCount', () => {
	const testCases = [
		['Default', <CharCount key="0" />],
		['with props', <CharCount key="1" className="foo" data-attribute="foo" />],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
    });
});
