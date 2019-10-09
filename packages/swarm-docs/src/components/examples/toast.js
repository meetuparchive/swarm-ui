import React from 'react';
import { Toast, Button, useToaster } from '@meetup/swarm-components';

// eslint-disable-next-line
const AddToast = ({ status = 'default' }) => {
  const { addToast, removeToast } = useToaster();
  const [ id, setId ] = React.useState(Math.random());

  return <Button onClick={() => {
    setId(Math.random());
    addToast(<Toast id={id} key={id} status={status} onDismiss={() => removeToast(id)}><p>test test test test test test test test test test test test</p><p className="color-gray-6 text--tiny">text small</p><br /><a href="#">test link</a></Toast>);
  }}>Add {status} Toast</Button>;
};

// eslint-disable-next-line
const RemoveToast = ({ id }) => {
  const { removeToast } = useToaster();

  return <Button onClick={() => removeToast(id)}>Remove Toast {id}</Button>;
};

const RemoveToastsSection = () => {
  const { toasts } = useToaster();

  return (
    <div>
      {toasts.map(toast => <RemoveToast id={toast.props.id} key={toast.props.id} />)}
    </div>
    );
};

const Example = () => {
  return (
    <>
        <div>
          <AddToast />
          <AddToast status='warning' />
          <AddToast status='success' />
          <AddToast status='error' />
          <RemoveToastsSection />
        </div>
    </>
  );
};

export default Example;
