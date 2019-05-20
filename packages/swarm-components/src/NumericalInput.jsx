// @flow
import * as React from 'react';
import Icon from './Icon';
import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from 'constants';

type Value = number | null;
type Props = {
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
    error?: React$Node,
    /**
     * the maximum integer allowed
     */
	max?: number,
    /**
     * the minimum integer allowed
     */
    min?: number,
    /**
     * Required change handler with Value, not event
     */
    onChange: Value => void,
    /**
     * funcitonality invoked when the form field is blurred
     */
    onBlur?: (SyntheticInputEvent<HTMLInputElement>) => void,
    /**
     * The amount the input will increment or decrement when using keyboard interactions
     */
    step?: number,
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

export const isDefined = (number: number): boolean => {
	return (typeof number !== 'undefined' && number !== null);
}

export class NumericalInput extends React.Component<Props, State> {
	fauxInputEl: HTMLInputElement | null;
	decrementBtnEl: HTMLButtonElement | null;
	incrementBtnEl: HTMLButtonElement | null;

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
		const min = isDefined(this.props.min) ? this.props.min : -Infinity;
		const max = isDefined(this.props.max) ? this.props.max : Infinity;

		const currentVal = this.state.value ? this.state.value : (isDefined(this.props.min) ? this.props.min : 0);
		const newValue = isIncreasing ? currentVal + this.props.step : currentVal - this.props.step;
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
	onBlur = (e: SyntheticInputEvent<HTMLInputElement>) => {
		const formControls = [this.fauxInputEl, this.decrementBtnEl, this.incrementBtnEl];
		if (formControls.every(c => c !== document.activeElement)) {
			this.setState({ isFieldFocused: false });
            if (this.props.onBlur) {
                this.props.onBlur(e);
            }
		}
	};

	onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
		const newValue = e.target.value ? parseInt(e.target.value, 10) : null;
		if (Number.isNaN(newValue)) {
			return;
		}
		this._updateValue(newValue);
	};

    // this signals focus for the inpurt and the two button controls
	onFocus = (e: SyntheticFocusEvent<HTMLInputElement>) => {
		this.setState({ isFieldFocused: true });
	};

	onKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
		// Disable the 'e' or 'E' values because we don't
		// support scientific notation at the moment
		if (e.key.toLowerCase() === 'e') {
			e.preventDefault();
		}
	};

    // the event for the increment button
	incrementAction = (e: SyntheticInputEvent<HTMLInputElement>) => {
		e.preventDefault();
		this._updateValue(this._updateValueByStep(true));
	};

    // the event for the decrement button
	decrementAction = (e: SyntheticInputEvent<HTMLInputElement>) => {
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
					tabIndex="-1"
					onBlur={this.onBlur}
					onClick={this.decrementAction}
                    onFocus={this.onFocus}
                    ref={(el: HTMLButtonElement | null) =>
                        (this.decrementBtnEl = el)
                    }
				>
					<Icon shape="minus" size="xs" />
				</button>
				<button
					data-swarm-number-input-increment
					tabIndex="-1"
					onBlur={this.onBlur}
					onClick={this.incrementAction}
                    onFocus={this.onFocus}
                    ref={(el: HTMLButtonElement | null) =>
                        (this.incrementBtnEl = el)
                    }
				>
					<Icon shape="plus" size="xs" />
				</button>
			</div>
		);
	}
}

export default NumericalInput;
