// @flow
import * as React from 'react';
import Icon from './Icon';

type Props = {
    /**
     * Classname of wrapper, specified because it is not applied with other
     */
    className?: string,
    /**
     * Whether the numerical input should be interactive.
     */
    disabled?: boolean,
    /**
     * Whether the textarea renders an error state.
     */
    error?: boolean,
    /**
     * Value for textarea.
     */
    value?: string
}

const getStatus = (props: Props): string => {
    return props.disabled ? 'disabled' : (props.error ? 'error' : 'default');
};

const getCharacterCount = (value: string = '') => value.length;

const NumericalInput = (props: Props): React.Element<'textarea'> => {

    const { className = '', ...other } = props;

    return (
        <div data-swarm-number-input={getStatus(props)} className={className} >
            <input
                data-swarm-number-input-field
                type="number"
                pattern="[0-9]*"
                {...other}
            />
            <button data-swarm-number-input-increment onClick={props.onIncrament} ><Icon shape="plus" size="xs" /></button>
            <button data-swarm-number-input-decrement onClick={props.onDecrement} ><Icon shape="minus" size="xs" /></button>
        </div>
    );
};

export default NumericalInput;
