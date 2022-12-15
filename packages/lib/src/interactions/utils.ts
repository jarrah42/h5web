import type { Camera } from '@react-three/fiber';
import { clamp } from 'lodash';
import { Vector2, Vector3 } from 'three';

import type { Size } from '../vis/models';
import { getWorldFOV } from '../vis/utils';
import type { ModifierKey, Selection } from './models';

export function boundWorldPointToFOV(
  unboundedPoint: Vector3,
  camera: Camera
): Vector3 {
  const { topRight, bottomLeft } = getWorldFOV(camera);
  const boundedX = clamp(unboundedPoint.x, bottomLeft.x, topRight.x);
  const boundedY = clamp(unboundedPoint.y, bottomLeft.y, topRight.y);
  return new Vector3(boundedX, boundedY, 0);
}

export function getRatioRespectingRectangle(
  startPoint: Vector2,
  endPoint: Vector2,
  ratio: number | undefined
) {
  if (ratio === undefined) {
    return [startPoint, endPoint];
  }

  const widthSign = Math.sign(endPoint.x - startPoint.x);
  const width = Math.abs(endPoint.x - startPoint.x);

  const heightSign = Math.sign(endPoint.y - startPoint.y);
  const height = Math.abs(endPoint.y - startPoint.y);

  const originalRatio =
    Math.abs(endPoint.x - startPoint.x) / Math.abs(endPoint.y - startPoint.y);

  const shiftX = widthSign * (originalRatio < ratio ? height * ratio : width);
  const shiftY = heightSign * (originalRatio < ratio ? height : width / ratio);

  const centerPoint = endPoint
    .clone()
    .sub(startPoint)
    .divideScalar(2)
    .add(startPoint);

  return [
    new Vector2(centerPoint.x - shiftX / 2, centerPoint.y - shiftY / 2),
    new Vector2(centerPoint.x + shiftX / 2, centerPoint.y + shiftY / 2),
  ];
}

export function getEnclosedRectangle(startPoint: Vector3, endPoint: Vector3) {
  // center = start + (end - start) / 2
  const center = endPoint
    .clone()
    .sub(startPoint)
    .divideScalar(2)
    .add(startPoint);

  return {
    width: Math.abs(endPoint.x - startPoint.x),
    height: Math.abs(endPoint.y - startPoint.y),
    center,
  };
}

export function clampPositionToArea(
  center: Vector3,
  rectSize: Size,
  areaSize: Size
): Vector3 {
  const xBound = Math.max(areaSize.width / 2 - rectSize.width / 2, 0);
  const yBound = Math.max(areaSize.height / 2 - rectSize.height / 2, 0);

  return new Vector3(
    clamp(center.x, -xBound, xBound),
    clamp(center.y, -yBound, yBound),
    0
  );
}

export function clampRectangleToVis(
  startPoint: Vector3,
  endPoint: Vector3,
  visSize: Size
): [Vector3, Vector3] {
  const { center, ...rectSize } = getEnclosedRectangle(startPoint, endPoint);

  const newCenter = clampPositionToArea(center, rectSize, visSize);

  const shift = newCenter.clone().sub(center);
  return [startPoint.clone().add(shift), endPoint.clone().add(shift)];
}

export function getModifierKeyArray(
  keys: ModifierKey | ModifierKey[] | undefined = []
): ModifierKey[] {
  return Array.isArray(keys) ? keys : [keys];
}

export function isSelectionValid(
  selection: Selection | undefined,
  threshold: number
): boolean {
  if (!selection) {
    return false;
  }

  const { htmlStartPoint, htmlEndPoint } = selection;
  const { x: width, y: height } = new Box2(
    htmlStartPoint,
    htmlEndPoint
  ).getSize(new Vector2());

  return width >= threshold && height >= threshold;
}
