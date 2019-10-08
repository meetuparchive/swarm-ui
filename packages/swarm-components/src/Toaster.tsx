import * as React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { Toast } from './Toast';
import Button from './Button';

const removeToast = (toasts: Array<any>, id: string) => {
  return [...toasts.filter(t => t.id !== id)];
};

interface ToasterContextInterface {
  toasts: Array<any>,
  addToast: (i: any) => void,
  removeToast: (i: any) => void,
}


export const ToasterContext = React.createContext<ToasterContextInterface>({ toasts: [], addToast: (i) => i, removeToast: (i) => i });

export const useToaster = () => {
  return React.useContext(ToasterContext);
}

const createPortalNode = (): HTMLDivElement => {
    const node = document.createElement('div');
    node.id = 'swarm-toaster';
    return node;
}


export const Toaster = (props) => {
  const [toasts, setToasts] = React.useState([]);
  // by using useState instead of useRef we can guarantee the element is a dom node when component is intantiated
  const [portalNode] = React.useState(createPortalNode());

  const addToast = (toast) => {
    console.log(toast)
    return setToasts(t => [...t, toast]);
  
  };

  const removeToast = (toastId) => {
    return setToasts(ts => {
      return ts.filter(t => t.props.id !== toastId)
    })
  }

  React.useEffect(() => {
    // Add portal div to body
    document.body.prepend(portalNode);

    // remove portal node when provider is removed from page
    return () => portalNode.remove();
  }, [])


  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast }}>
      {ReactDOM.createPortal(
        <div data-swarm-toaster>
          <ul style={{ width: '100%' }}>
            <AnimatePresence initial={false}>
              {toasts}
            </AnimatePresence>
          </ul>
        </div>,
        portalNode
      )}
        {props.children}
    </ToasterContext.Provider>
  );
}
