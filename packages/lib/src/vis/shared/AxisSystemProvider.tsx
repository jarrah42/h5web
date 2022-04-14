import { useThree } from '@react-three/fiber';
import type { PropsWithChildren } from 'react';
import { useCallback, useMemo } from 'react';
import { Matrix4, Vector2, Vector3 } from 'three';

import type { AxisConfig } from '../models';
import { getCanvasScale, getSizeToFit } from '../utils';
import { AxisSystemContext } from './AxisSystemContext';

interface Props {
  visRatio: number | undefined;
  abscissaConfig: AxisConfig;
  ordinateConfig: AxisConfig;
  floatingToolbar: HTMLDivElement | undefined;
}

function AxisSystemProvider(props: PropsWithChildren<Props>) {
  const {
    visRatio,
    abscissaConfig,
    ordinateConfig,
    children,
    floatingToolbar,
  } = props;

  const availableSize = useThree((state) => state.size);
  const visSize = getSizeToFit(availableSize, visRatio);

  const abscissaScale = getCanvasScale(abscissaConfig, visSize.width);
  const ordinateScale = getCanvasScale(ordinateConfig, visSize.height);

  const worldToData = (vec: Vector2 | Vector3) =>
    new Vector2(abscissaScale.invert(vec.x), ordinateScale.invert(vec.y));
  const dataToWorld = (vec: Vector2 | Vector3) =>
    new Vector2(abscissaScale(vec.x), ordinateScale(vec.y));

  const cameraToHtmlMatrix = useMemo(() => {
    const { width, height } = availableSize;
    return new Matrix4()
      .makeScale(width / 2, -height / 2, 1) // scale from normalized camera space to HTML space
      .setPosition(width / 2, height / 2); // account for shift of (0,0) position (center for camera, top-left for HTML)
  }, [availableSize]);

  const camera = useThree((state) => state.camera);
  const worldToHtml = useCallback(
    (point: Vector2 | Vector3) => {
      const cameraPoint = new Vector3(point.x, point.y, 0).project(camera);
      const htmlPoint = cameraPoint.clone().applyMatrix4(cameraToHtmlMatrix);
      return new Vector2(htmlPoint.x, htmlPoint.y);
    },
    [camera, cameraToHtmlMatrix]
  );

  return (
    <AxisSystemContext.Provider
      value={{
        visSize,
        abscissaConfig,
        ordinateConfig,
        abscissaScale,
        ordinateScale,
        worldToData,
        dataToWorld,
        worldToHtml,
        floatingToolbar,
      }}
    >
      {children}
    </AxisSystemContext.Provider>
  );
}

export default AxisSystemProvider;
