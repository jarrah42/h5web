import { useThree } from '@react-three/fiber';
import { Vector2 } from 'three';

import { useAxisSystemContext } from '../vis/shared/AxisSystemProvider';
import { getVisibleDomains } from '../vis/utils';
import SelectionRect from './SelectionRect';
import SelectionTool from './SelectionTool';
import { useMoveCameraTo } from './hooks';
import type { Selection, CommonInteractionProps } from './models';
import { getEnclosedRectangle } from './utils';

interface Props extends CommonInteractionProps {
  axis: 'x' | 'y';
}

function AxialSelectToZoom(props: Props) {
  const { axis, modifierKey, disabled } = props;

  const context = useAxisSystemContext();
  const moveCameraTo = useMoveCameraTo();

  const { width, height } = useThree((state) => state.size);
  const camera = useThree((state) => state.camera);

  function getAxialSelection(selection: Selection): Selection {
    const { xVisibleDomain, yVisibleDomain } = getVisibleDomains(
      camera,
      context
    );

    const { startPoint: mouseStartPoint, endPoint: mouseEndPoint } = selection;
    const startPoint =
      axis === 'x'
        ? new Vector2(mouseStartPoint.x, yVisibleDomain[0])
        : new Vector2(xVisibleDomain[0], mouseStartPoint.y);
    const endPoint =
      axis === 'x'
        ? new Vector2(mouseEndPoint.x, yVisibleDomain[1])
        : new Vector2(xVisibleDomain[1], mouseEndPoint.y);

    return {
      startPoint,
      endPoint,
      worldStartPoint: context.dataToWorld(startPoint),
      worldEndPoint: context.dataToWorld(endPoint),
    };
  }

  function onSelectionEnd(selection: Selection) {
    // Work in world coordinates as we need to act on the world camera
    const { worldStartPoint, worldEndPoint } = getAxialSelection(selection);

    if (
      worldStartPoint.x === worldEndPoint.x ||
      worldStartPoint.y === worldEndPoint.y
    ) {
      return;
    }

    const zoomRect = getEnclosedRectangle(worldStartPoint, worldEndPoint);
    const { center: zoomRectCenter } = zoomRect;

    // Change scale first so that moveCameraTo computes the updated camera bounds
    camera.scale.set(zoomRect.width / width, zoomRect.height / height, 1);
    camera.updateMatrixWorld();

    moveCameraTo(zoomRectCenter.x, zoomRectCenter.y);
  }

  return (
    <SelectionTool
      id={`${axis.toUpperCase()}SelectToZoom`}
      modifierKey={modifierKey}
      disabled={disabled}
      onSelectionEnd={onSelectionEnd}
    >
      {(selection) => (
        <SelectionRect
          fill="white"
          stroke="black"
          fillOpacity={0.25}
          {...getAxialSelection(selection)}
        />
      )}
    </SelectionTool>
  );
}

export type { Props as AxialSelectToZoomProps };
export default AxialSelectToZoom;