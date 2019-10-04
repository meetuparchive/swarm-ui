import React from 'react';
import { Toaster, Toast, Button, useToaster } from '@meetup/swarm-components';

const AddToast = () => {
  const { addToast } = useToaster();
  const [ id, setId ] = React.useState(Math.random());

  return <Button onClick={() => {
    setId(Math.random());
    addToast(<Toast id={id} key={id}><p>test</p></Toast>);
  }}>Add Toast</Button>;
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
      <Toaster>
        <div>
          <AddToast />
          <RemoveToastsSection />
        </div>
      </Toaster>
    </>
  );
};

export default Example;
