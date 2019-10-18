import React from 'react';
import { shallow } from 'enzyme';
import { NumericalInput, getStatus } from './NumericalInput';

describe('NumericalInput', () => {
	describe('render', () => {
		const mockOnChange = jest.fn();
		const mockOnBlur = jest.fn();
		const testCases = [
			['Default', <NumericalInput key="0" value={null} onChange={mockOnChange} />],
			[
				'Default with classname',
				<NumericalInput
					key="1"
					value={null}
					onChange={mockOnChange}
					className="foo"
				/>,
			],
			[
				'Default with id',
				<NumericalInput key="2" value={null} onChange={mockOnChange} id="foo" />,
			],
			[
				'Default with step',
				<NumericalInput key="3" value={null} onChange={mockOnChange} step={2} />,
			],
			[
				'Default with max',
				<NumericalInput key="4" value={null} onChange={mockOnChange} max={10} />,
			],
			[
				'Default with min',
				<NumericalInput key="5" value={null} onChange={mockOnChange} min={1} />,
			],
			[
				'Default with onBlur',
				<NumericalInput
					key="6"
					value={null}
					onChange={mockOnChange}
					onBlur={mockOnBlur}
				/>,
			],
			[
				'Disabled',
				<NumericalInput key="7" value={null} onChange={mockOnChange} disabled />,
			],
			[
				'Error',
				<NumericalInput key="8" value={null} onChange={mockOnChange} error />,
			],
		];

		test.each(testCases)('Snapshot: %s', (description, element) => {
			expect(shallow(element)).toMatchSnapshot();
		});
	});

	describe('getDerivedStateFromProps', () => {
		const prevState = {
			value: 4,
		};

		it('should return a new state value when state has changed', () => {
			const nextProps = {
				onChange: jest.fn(),
				value: 5,
			};

			expect(NumericalInput.getDerivedStateFromProps(nextProps, prevState)).toEqual({
				value: nextProps.value,
			});
		});

		it('should return same state value when state has not changed', () => {
			const nextProps = {
				onChange: jest.fn(),
				value: 4,
			};

			expect(NumericalInput.getDerivedStateFromProps(nextProps, prevState)).toEqual({
				value: prevState.value,
			});
		});
	});

	describe('_updateValueByStep', () => {
		describe('with no min, max, or step prop', () => {
			it('should increase value by 1 when increasing', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={null} onChange={jest.fn()} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(true)).toEqual(
					1
				);
			});

			it('should decrease value by 1 when decreasing', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={null} onChange={jest.fn()} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(false)).toEqual(
					-1
				);
			});
		});

		describe('with step prop only', () => {
			it('should increase value by `step` when increasing', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={null} onChange={jest.fn()} step={2} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(true)).toEqual(
					2
				);
			});

			it('should decrease value by `step` when decreasing', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={null} onChange={jest.fn()} step={2} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(false)).toEqual(
					-2
				);
			});
		});

		describe('with min prop only', () => {
			it('should decrease by `1` when value stays greater than min', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={1} onChange={jest.fn()} min={0} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(false)).toEqual(
					0
				);
			});

			it('should not decrease past `min`', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={0} onChange={jest.fn()} min={0} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(false)).toEqual(
					0
				);
			});
		});

		describe('with max prop only', () => {
			it('should increase by `1` when value stays less than max', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={0} onChange={jest.fn()} max={10} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(true)).toEqual(
					1
				);
			});

			it('should not increase past `max`', () => {
				const numericalInputComponent = shallow(
					<NumericalInput value={10} onChange={jest.fn()} max={10} />
				);
				expect(numericalInputComponent.instance()._updateValueByStep(true)).toEqual(
					10
				);
			});
		});
	});

	describe('_updateValue', () => {
		it('calls setState', () => {
			let numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={jest.fn()} />
			);

			numericalInputComponent.setState = jest.fn(numericalInputComponent.setState);
			numericalInputComponent.instance()._updateValue(5);

			expect(numericalInputComponent.setState).toHaveBeenCalled();
		});

		it('calls the `onChange` callback prop', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);

			numericalInputComponent.instance()._updateValue(5);
			expect(mockOnChange).toHaveBeenCalled();
		});
	});

	describe('onBlur', () => {
		it('should call the onBlur prop', () => {
			const mockOnChange = jest.fn();
			const mockOnBlur = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} onBlur={mockOnBlur} />
			);
			const numericalInputInstance = numericalInputComponent.instance();

			global.document = {
				activeElement: numericalInputInstance.fauxInputEl,
			};
			numericalInputInstance.onBlur({});

			expect(mockOnBlur).toHaveBeenCalled();
		});

		it('should state `isFieldFocused` state to false', () => {
			const mockOnChange = jest.fn();
			const mockOnBlur = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} onBlur={mockOnBlur} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			global.document = {
				activeElement: numericalInputInstance.fauxInputEl,
			};
			numericalInputInstance.onBlur({});

			expect(numericalInputComponent.state('isFieldFocused')).toEqual(false);
		});
	});

	describe('onChange', () => {
		it('should call the onChange prop', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();

			numericalInputInstance.onChange({
				target: {
					value: '10',
				},
			});

			expect(mockOnChange).toHaveBeenCalled();
		});

		it('should not call onChange when target value is not a number', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();

			numericalInputInstance.onChange({
				target: {
					value: 'foo',
				},
			});

			expect(mockOnChange).not.toHaveBeenCalled();
		});
	});

	describe('onFocus', () => {
		it('should set `isFieldFocused` state to true', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			numericalInputInstance.onFocus({});

			expect(numericalInputComponent.state('isFieldFocused')).toEqual(true);
		});
	});

	describe('onKeyDown', () => {
		it('should preventDefault on the event if key is an `E`', () => {
			const mockOnChange = jest.fn();
			const mockPreventDefault = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			numericalInputInstance.onKeyDown({
				key: 'E',
				preventDefault: mockPreventDefault,
			});

			expect(mockPreventDefault).toHaveBeenCalled();

			mockPreventDefault.mockClear();
			numericalInputInstance.onKeyDown({
				key: 'e',
				preventDefault: mockPreventDefault,
			});

			expect(mockPreventDefault).toHaveBeenCalled();
		});

		it('should not preventDefault is key is not an `E`', () => {
			const mockOnChange = jest.fn();
			const mockPreventDefault = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			numericalInputInstance.onKeyDown({
				key: '$',
				preventDefault: mockPreventDefault,
			});

			expect(mockPreventDefault).not.toHaveBeenCalled();
		});
	});

	describe('incrementAction', () => {
		it('should call e.preventDefault', () => {
			const mockOnChange = jest.fn();
			const mockPreventDefault = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();

			numericalInputInstance.incrementAction({ preventDefault: mockPreventDefault });

			expect(mockPreventDefault).toHaveBeenCalled();
		});

		it('should call this._updateValueByStep', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			numericalInputInstance._updateValueByStep = jest.fn();
			numericalInputInstance.incrementAction({ preventDefault: jest.fn() });

			expect(numericalInputInstance._updateValueByStep).toHaveBeenCalledWith(true);
		});

		it('should call this._updateValue', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			numericalInputInstance._updateValue = jest.fn();

			const stepValue = numericalInputInstance._updateValueByStep(true);
			numericalInputInstance.incrementAction({ preventDefault: jest.fn() });

			expect(numericalInputInstance._updateValue).toHaveBeenCalledWith(stepValue);
		});
	});

	describe('decrementAction', () => {
		it('should call e.preventDefault', () => {
			const mockOnChange = jest.fn();
			const mockPreventDefault = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();

			numericalInputInstance.decrementAction({ preventDefault: mockPreventDefault });

			expect(mockPreventDefault).toHaveBeenCalled();
		});

		it('should call this._updateValueByStep', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			numericalInputInstance._updateValueByStep = jest.fn();
			numericalInputInstance.decrementAction({ preventDefault: jest.fn() });

			expect(numericalInputInstance._updateValueByStep).toHaveBeenCalledWith(false);
		});

		it('should call this._updateValue', () => {
			const mockOnChange = jest.fn();
			const numericalInputComponent = shallow(
				<NumericalInput value={0} onChange={mockOnChange} />
			);
			const numericalInputInstance = numericalInputComponent.instance();
			numericalInputInstance._updateValue = jest.fn();

			const stepValue = numericalInputInstance._updateValueByStep(false);
			numericalInputInstance.decrementAction({ preventDefault: jest.fn() });

			expect(numericalInputInstance._updateValue).toHaveBeenCalledWith(stepValue);
		});
	});
});

describe('getStatus', () => {
	it('returns disabled when props contain disabled=true', () => {
		expect(getStatus({ disabled: true })).toEqual('disabled');
		expect(getStatus({ disabled: true, error: true })).toEqual('disabled');
	});

	it('returns error when props contain error=true', () => {
		expect(getStatus({ error: true })).toEqual('error');
	});

	it('returns default when props do not contain disabled or error', () => {
		expect(getStatus({})).toEqual('default');
	});
});
