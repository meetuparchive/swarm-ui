import * as React from 'react';
import { stat } from 'fs';

export interface Props {
  children: React.ReactChildren,
  error?: boolean,
  success?: boolean,
}

const getToastStatus = (props: Props) => {
  let status = 'default'
  if (props.success) {
    status = 'success';
  }
  if (props.error) {
    status = 'error'
  }
  return status;
}

const Toast = (props: Props) => {
  const { error, success } = props;

  return (
    <div 
      data-swarm-toast={getToastStatus(props)}
      role={error ? 'alert' : 'log'}
      aria-relevant="all"
      aria-atomic="true"
      {...props}
    >
      {props.children}
    </div>
  )
}

export default Toast;