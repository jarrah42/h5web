import { useThree } from '@react-three/fiber';
import { useState, useLayoutEffect } from 'react';
import type { ReactNode } from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';

interface Props {
  overflowCanvas?: boolean; // allow children to overflow above axes
  container?: HTMLElement;
  children?: ReactNode;
}

function Html(props: Props) {
  const {
    overflowCanvas = false,
    container: customContainer,
    children,
  } = props;

  const [reactRoot, setReactRoot] = useState<Root>();

  const r3fRoot = useThree((state) => state.gl.domElement.parentElement);
  const canvasWrapper = r3fRoot?.parentElement;

  // Choose DOM container to which to append `renderTarget`
  // (with `canvasWrapper`, `Html` children are allowed to overflow above the axes)
  const container =
    customContainer || (overflowCanvas ? canvasWrapper : r3fRoot);

  const [renderTarget] = useState(() => document.createElement('div'));

  useLayoutEffect(() => {
    const root = createRoot(renderTarget);
    setReactRoot(root);

    return () => {
      root.unmount();
    };
  }, [renderTarget]);

  useLayoutEffect(() => {
    reactRoot?.render(<>{children}</>); // eslint-disable-line react/jsx-no-useless-fragment
  }, [children, reactRoot]);

  useLayoutEffect(() => {
    container?.append(renderTarget);

    return () => {
      renderTarget.remove();
    };
  }, [container, renderTarget]);

  return null;
}

export default Html;
