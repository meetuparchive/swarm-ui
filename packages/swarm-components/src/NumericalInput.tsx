import * as React from 'react';
import { Icon } from './Icon';

type Value = number | null | undefined;

interface Props {
	/**
	 * Classname of wrapper, specified because it is not applied with other
	 */
	className?: string,
	/**
	 * indicates whether the input is disabled
	 */
	disabled?: boolean,
	/**
	 * indicates whether there is an error on the input
	 */
	error?: React.ReactElement,
	/**
	 * the maximum integer allowed
	 */
	max?: number | undefined,
	/**
	 * the minimum integer allowed
	 */
	min?: number | undefined,
	/**
	 * Required change handler with Value, not event
	 */
	onChange: (value: Value) => void,
	/**
	 * funcitonality invo
	 * ked when the form field is blurred
	 */
	onBlur?: () => void,
	/**
	 * The amount the input will increment or decrement when using keyboard interactions
	 */
	step: number,
	/**
	 * The value of the field
	 */
	value: Value,
};

type State = {
	isFieldFocused: boolean,
	value: Value,
};

export const getStatus = (props: Props): string => {
	return props.disabled ? 'disabled' : props.error ? 'error' : 'default';
};

export const isDefined = (number: Value): boolean => {
	return typeof number !== 'undefined' && number !== null;
};

class NumericalInput extends React.Component<Props, State> {
	fauxInputEl: HTMLInputElement | null | undefined;
	decrementBtnEl: HTMLButtonElement | null | undefined;
	incrementBtnEl: HTMLButtonElement | null | undefined;

	static defaultProps = {
		step: 1,
	};

	state = {
		value: isDefined(this.props.value) ? this.props.value : null,
		isFieldFocused: false,
	};

	// internal value updater when passed a value via props
	static getDerivedStateFromProps(nextProps: Props, prevState: State) {
		const isNewValue = nextProps.onChange && nextProps.value !== prevState.value;

		return {
			value: isNewValue ? nextProps.value : prevState.value,
		};
	}

	_updateValueByStep = (isIncreasing: boolean) => {
		const min: number = isDefined(this.props.min)
			? Number(this.props.min)
			: -Infinity;
		const max: number = isDefined(this.props.max) ? Number(this.props.max) : Infinity;
		const step: number = this.props.step || 1;

		const currentVal: number = this.state.value
			? this.state.value
			: this.props.min
			? this.props.min
			: 0;
		const newValue = isIncreasing ? currentVal + step : currentVal - step;
		const minConstrainedValue = Math.max(newValue, min);

		return Math.min(minConstrainedValue, max);
	};

	// private value updater for keyboard and button interactions
	_updateValue = (value: Value) => {
		this.setState({ value });

		if (this.props.onChange) {
			this.props.onChange(value);
		}
	};

	// this signals blur for the input and the two button controls
	// only registers a blur when all elements are blurred
	onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLButtonElement>) => {
		const formControls = [this.fauxInputEl, this.decrementBtnEl, this.incrementBtnEl];
		if (formControls.every(c => c !== document.activeElement)) {
			this.setState({ isFieldFocused: false });
			if (this.props.onBlur) {
				this.props.onBlur(e);
			}
		}
	};

	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(e.target.value, 10);
		if (Number.isNaN(newValue)) {
			return;
		}
		this._updateValue(newValue);
	};

	// this signals focus for the inpurt and the two button controls
	onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLButtonElement>) => {
		this.setState({ isFieldFocused: true });
	};

	onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// Disable the 'e' or 'E' values because we don't
		// support scientific notation at the moment
		if (e.key.toLowerCase() === 'e') {
			e.preventDefault();
		}
	};

	// the event for the increment button
	incrementAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		this._updateValue(this._updateValueByStep(true));
	};

	// the event for the decrement button
	decrementAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		this._updateValue(this._updateValueByStep(false));
	};

	render() {
		const {
			className = '',
			onChange, // eslint-disable-line no-unused-vars
			onBlur, // eslint-disable-line no-unused-vars
			value, // eslint-disable-line no-unused-vars
			...other
		} = this.props;

		return (
			<div data-swarm-number-input={getStatus(this.props)} className={className}>
				<input
					data-swarm-number-input-field
					type="number"
					pattern="[0-9]*"
					onBlur={this.onBlur}
					onFocus={this.onFocus}
					onChange={this.onChange}
					onKeyDown={this.onKeyDown}
					value={this.state.value === null ? '' : this.state.value}
					{...other}
				/>
				<button
					data-swarm-number-input-decrement
					tabIndex={-1}
					onBlur={this.onBlur}
					onClick={this.decrementAction}
					onFocus={this.onFocus}
					ref={(el: HTMLButtonElement | null) => (this.decrementBtnEl = el)}
				>
					<Icon shape="minus" />
				</button>
				<button
					data-swarm-number-input-increment
					tabIndex={-1}
					onBlur={this.onBlur}
					onClick={this.incrementAction}
					onFocus={this.onFocus}
					ref={(el: HTMLButtonElement | null) => (this.incrementBtnEl = el)}
				>
					<Icon shape="add" />
				</button>
			</div>
		);
	}
}

export { NumericalInput };
