import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {
	const mockOnChange = jest.fn();

	const testCases = [
		['Default (empty)', <TextInput key="1" id="default" name="default" value="" />],
		[
			'Default (value)',
			<TextInput key="2" id="default" name="default" value="foo" />,
		],
		[
			'Disabled',
			<TextInput key="3" id="disabled" name="disabled" value="" disabled />,
		],
		['Error', <TextInput key="4" id="error" name="error" value="" error />],
		[
			'isSearch',
			<TextInput key="5" id="isSearch" name="isSearch" value="" isSearch />,
		],
		[
			'Pattern',
			<TextInput
				key="6"
				id="pattern"
				name="pattern"
				value=""
				pattern="[A-Za-z]{3}"
			/>,
		],
		[
			'onChange',
			<TextInput
				key="7"
				id="onChange"
				name="onChange"
				value=""
				onChange={mockOnChange}
			/>,
		],
		[
			'Icon',
			<TextInput key="8" id="icon" name="icon" value="" iconShape="location-pin" />,
		],
		[
			'Icon (custom size)',
			<TextInput
				key="9"
				id="iconsize"
				name="iconsize"
				value=""
				iconShape="location-pin"
				iconSize="m"
			/>,
		],
		[
			'maxLength (char count)',
			<TextInput
				key="10"
				id="maxLength"
				name="maxLength"
				value="foo fooo"
				maxLength={20}
			/>,
		],
	];

	test.each(testCases)('Snapshot: %s', (description, element) => {
		expect(shallow(element)).toMatchSnapshot();
	});

	describe('maxLength', () => {
		it('should render error state when maxLength exceeded', () => {
			const textInput = shallow(<TextInput name="foo" value="" maxLength={3} />);
			textInput.setProps({ value: 'new value' });
			expect(textInput.exists('[data-swarm-text-input="error"]')).toEqual(true);
		});
	});
});
