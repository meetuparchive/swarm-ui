// @flow
import * as React from 'react';

export type Props = {
  /**
   * Indicates whether the toggle is selected
   */
  checked?: boolean,
  /**
   * Indicates whether the toggle is disabled
   */
  disabled?: boolean,
  /**
   * Text label of the content
   */
  label?: string,
  /**
	 * Grow select to 100% width (full width)
	 */
	grow?: boolean,
  /**
   * Text label of the content, applied if label is not set
   */
  children?: React.Node
};

const TogglePill = (props: Props): React.Element<'button'> => {
  const {
    checked,
    disabled,
    label,
    children,
    grow,
    ...rest
  } = props;

  const width = grow ? 'grow' : 'default';

  return (
    <button
      data-swarm-toggle-pill={checked ? 'checked' : 'unchecked'}
      data-swarm-width={width}
      role='checkbox'
      aria-checked={checked}
      disabled={disabled}
      checked={checked}
      {...rest}
    >
      <span>{label || children}</span>
    </button>
  );
};

export default TogglePill;
