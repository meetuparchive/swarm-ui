import * as React from 'react';
import { motion } from 'framer-motion';
import { ToasterContext } from './Toaster';
import Button from './Button';
import { CheckCircled, CloseCircled, WarningCircled } from '@meetup/swarm-icons/lib/components/solid';

export interface ToastProps {
  /**
   * The status of the toast displayed. Options are success, error, warning, & default
   */
  status: 'success' | 'error' | 'warning' | 'default',
  /**
   * Unique identifier for each toast. Used for dismissing toasts from Toaster
   */
  id: string,
  /**
   * Unique key for each toast. Used as the react key for iterations
   */
  key: string,
  /**
   * duration toast is visible before self dismissing. Default is 5000
   */
  duration: number,
  /**
   * invoked when toast is closed
   */
  onDismiss?(): void,
}

const ICONS = {
  error: 'CloseCircled',
  warning: 'WarningCircled',
  success: 'CheckCircled',
}

const StatusIcon = ({ status, ...rest }) => {
  console.log('si', status)
  if(status === 'success') {
    return <CheckCircled className="color-confirm-green" {...rest} />;
  } else if (status === 'warning') {
    return <WarningCircled className="color-warning-orange" {...rest} />;
  } else if (status === 'error') {
    return <CloseCircled className="color-alert-red" {...rest} />;
  }
  return null;
}

export const Toast = (props: ToastProps) => {
  const { status = 'default', id, onDismiss, duration = 50000 } = props;
  const { removeToast } = React.useContext(ToasterContext);

  React.useEffect(() => {
    const toasterTimeout = window.setTimeout(() => {
      removeToast(id)
    }, duration)

    return () => window.clearTimeout(toasterTimeout);
  }, [id])

  return (
    <motion.li
      data-swarm-toast={status}
      role={status === 'error' ? 'alert' : 'log'}
      aria-relevant='all'
      aria-atomic='true'
      positionTransition
      initial={{ opacity: 0, x: 250, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, x: 250, transition: { duration: 0.2 } }}
      {...props}
    >
      <StatusIcon status={status} height={24} width={24} style={{ paddingRight: 5 }} />
      <div data-swarm-toast-content>
        {props.children}
      </div>
      <Button icon="close" small reset onClick={onDismiss} className="color-gray-6" />
    </motion.li>
  )
}