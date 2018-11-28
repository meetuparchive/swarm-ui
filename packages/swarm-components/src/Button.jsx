// @flow
import * as React from 'react';

type Props = {
  children: React.Node
};

function Button(props: Props) {
  return <button data-swarm-button="primary" {...props} />;
}

export default Button;
