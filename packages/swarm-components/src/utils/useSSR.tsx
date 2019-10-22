import * as React from 'react';

// Originally found at https://github.com/alex-cory/use-ssr/blob/master/useSSR.ts

interface UseSSRReturn {
  isBrowser: boolean,
  isServer: boolean,
  isNative: boolean,
  canUseWorkers: boolean,
  canUseEventListeners: boolean,
  canUseViewport: boolean,
};

enum Device {
  BROWSER = 'BROWSER',
  SERVER = 'SERVER',
  NATIVE = 'NATIVE',
};


const { BROWSER, SERVER, NATIVE } = Device;

const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const canUseNative: boolean = typeof navigator != 'undefined' && navigator.product == 'ReactNative';

const location = canUseNative ? NATIVE : canUseDOM ? BROWSER : SERVER;


function useSSR(): UseSSRReturn {
  const [whereAmI, setWhereAmI] = React.useState(location)

  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    setWhereAmI(location);
  });

  const useSSRObject = React.useMemo(() => ({
    isBrowser: whereAmI === BROWSER,
    isServer: whereAmI === SERVER,
    isNative: whereAmI === NATIVE,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: whereAmI === BROWSER && !!window.addEventListener,
    canUseViewport: whereAmI === BROWSER && !!window.screen
  }), [whereAmI])

  return React.useMemo(() => Object.assign(Object.values(useSSRObject), useSSRObject), [whereAmI])
}

export { useSSR };