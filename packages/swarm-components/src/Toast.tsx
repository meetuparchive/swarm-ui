import * as React from 'react';
import { motion } from 'framer-motion';
import { ToasterContext } from './Toaster';
import Button from './Button';

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

export const Toast = (props: ToastProps) => {
  const { status = 'default', id, onDismiss, duration = 5000 } = props;
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
      initial={{ opacity: 0, x: 250, scale: 0.3 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, x: 250, transition: { duration: 0.2 } }}
      {...props}
    >
      {props.children}
      <Button icon="close" onClick={onDismiss}/>
    </motion.li>
  )
}