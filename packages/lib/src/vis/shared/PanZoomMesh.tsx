import { useThree } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { clamp } from 'lodash';
import { useRef, useCallback, useEffect } from 'react';
import { Vector2, Vector3 } from 'three';

import { useWheelCapture } from '../hooks';
import { useAxisSystemContext } from './AxisSystemContext';

const ZOOM_FACTOR = 0.95;

const CAMERA_TOP_RIGHT = new Vector3(1, 1, 0);

function PanZoomMesh() {
  const { abscissaScale, ordinateScale, visSize } = useAxisSystemContext();
  const { width: visWidth, height: visHeight } = visSize;

  const camera = useThree((state) => state.camera);
  const { width, height } = useThree((state) => state.size);
  const invalidate = useThree((state) => state.invalidate);

  const startOffsetPosition = useRef<Vector3>(); // `useRef` to avoid re-renders
  const viewportCenter = useRef<Vector2>();

  const moveCameraTo = useCallback(
    (x: number, y: number) => {
      /* Save mesh coordinates at requested camera position so we can keep this point
           in the centre of the viewport on resize. */
      viewportCenter.current = new Vector2(
        abscissaScale.invert(x),
        ordinateScale.invert(y)
      );
      const { position, projectionMatrixInverse } = camera;

      // Project from normalized camera space (-1, -1) to (1, 1) to local camera space (-Xbound, -Ybound) to (Xbound, Ybound)
      const cameraLocalBounds = CAMERA_TOP_RIGHT.clone().applyMatrix4(
        projectionMatrixInverse
      );

      const xBound = Math.max(visWidth / 2 - cameraLocalBounds.x, 0);
      const yBound = Math.max(visHeight / 2 - cameraLocalBounds.y, 0);

      position.set(
        clamp(x, -xBound, xBound),
        clamp(y, -yBound, yBound),
        position.z
      );

      camera.updateMatrixWorld();
      invalidate();
    },
    [abscissaScale, ordinateScale, camera, visWidth, visHeight, invalidate]
  );

  const onPointerDown = useCallback(
    (evt: ThreeEvent<PointerEvent>) => {
      const { sourceEvent, unprojectedPoint } = evt;
      const { target, pointerId } = sourceEvent;
      (target as Element).setPointerCapture(pointerId); // https://stackoverflow.com/q/28900077/758806

      const projectedPoint = camera.worldToLocal(unprojectedPoint.clone());
      startOffsetPosition.current = camera.position.clone().add(projectedPoint);
    },
    [camera]
  );

  const onPointerUp = useCallback((evt: ThreeEvent<PointerEvent>) => {
    const { sourceEvent } = evt;
    const { target, pointerId } = sourceEvent;
    (target as Element).releasePointerCapture(pointerId); // https://stackoverflow.com/q/28900077/758806

    startOffsetPosition.current = undefined;
  }, []);

  const onPointerMove = useCallback(
    (evt: ThreeEvent<PointerEvent>) => {
      if (!startOffsetPosition.current) {
        return;
      }

      // Prevent events from reaching tooltip mesh when panning
      evt.stopPropagation();

      const projectedPoint = camera.worldToLocal(evt.unprojectedPoint.clone());
      const { x: pointerX, y: pointerY } = projectedPoint;
      const { x: startX, y: startY } = startOffsetPosition.current;

      const targetX = startX - pointerX;
      const targetY = startY - pointerY;

      moveCameraTo(targetX, targetY);
    },
    [camera, moveCameraTo]
  );

  const onWheel = useCallback(
    (evt: ThreeEvent<WheelEvent>) => {
      const { sourceEvent } = evt;
      const factor = sourceEvent.deltaY > 0 ? ZOOM_FACTOR : 1 / ZOOM_FACTOR;

      camera.zoom = Math.max(1, camera.zoom * factor);
      camera.updateProjectionMatrix();

      const projectedPoint = camera.worldToLocal(evt.unprojectedPoint.clone());
      const { x: pointerX, y: pointerY } = projectedPoint;
      const { x: camX, y: camY } = camera.position;

      moveCameraTo(
        camX + pointerX * (1 - 1 / factor),
        camY + pointerY * (1 - 1 / factor)
      );
    },
    [camera, moveCameraTo]
  );

  useEffect(() => {
    if (viewportCenter.current) {
      // On resize, move camera to the latest saved viewport center coordinates
      const { x, y } = viewportCenter.current;
      moveCameraTo(abscissaScale(x), ordinateScale(y));
    }
  }, [abscissaScale, viewportCenter, moveCameraTo, ordinateScale]);

  useWheelCapture();

  return (
    <mesh {...{ onPointerMove, onPointerUp, onPointerDown, onWheel }}>
      <meshBasicMaterial opacity={0} transparent />
      <planeGeometry args={[width, height]} />
    </mesh>
  );
}

export default PanZoomMesh;
