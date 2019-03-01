import * as React from 'react';
import Icon from './Icon';

export type Props = {
	checked: boolean,
	disabled?: boolean,
	id?: string,
	name: string,
};

// Can not inline css vars as color to Icon. Gray 5 icon fill on disbaled
const Checkbox = (props: Props): React.ReactElement<'label'> => {
	const { checked, label, id = 'a', disabled, onChange, children, ...rest } = props;
	return (
		<label
			data-swarm-checkbox={disabled ? 'disabled' : 'default'}
			for={id}
			disabled={disabled}
			{...rest}
		>
			<span
				data-swarm-checkbox-field={checked ? 'checked' : 'unchecked'}
				role='checkbox'
				aria-checked={checked}
			>
				{checked && (
					<Icon shape="check" size="xs" color={disabled ? '#A2A2A2' : '#ffffff'} />
				)}
			</span>
			<input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={onChange} />
			<span>{label || children}</span>
		</label>
	);
};

export default Checkbox;
