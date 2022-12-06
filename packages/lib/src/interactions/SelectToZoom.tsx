import { useThree } from '@react-three/fiber';
import type { Vector3 } from 'three';

import { useVisCanvasContext } from '../vis/shared/VisCanvasProvider';
import { worldToHtml } from '../vis/utils';
import SelectionRect from './SelectionRect';
import SelectionTool from './SelectionTool';
import { useMoveCameraTo } from './hooks';
import type { CommonInteractionProps, Selection } from './models';
import { Box, clampRectToArea, getRatioRect } from './utils';

const MIN_ZOOM = 20;

type Props = CommonInteractionProps;

function SelectToZoom(props: Props) {
  const context = useVisCanvasContext();
  const { canvasSize, canvasRatio, visRatio, visSize, worldToData } = context;

  const { width, height } = canvasSize;
  const keepRatio = visRatio !== undefined;

  const camera = useThree((state) => state.camera);
  const moveCameraTo = useMoveCameraTo();

  function isValidZoomRect(startPoint: Vector3, endPoint: Vector3): boolean {
    const { size } = new Box(
      worldToHtml(camera, context, startPoint),
      worldToHtml(camera, context, endPoint)
    );

    if (keepRatio) {
      // At least `MIN_ZOOM` on one axis and 1 on the other
      return (
        (size.width >= MIN_ZOOM && size.height > 0) ||
        (size.height >= MIN_ZOOM && size.width > 0)
      );
    }

    // At least MIN_ZOOM on both axes
    return size.width >= MIN_ZOOM && size.height >= MIN_ZOOM;
  }

  function onSelectionEnd(selection: Selection) {
    const { worldStartPoint, worldEndPoint } = selection;

    if (!isValidZoomRect(worldStartPoint, worldEndPoint)) {
      return;
    }

    // Work in world coordinates as we need to act on the world camera
    const [ratioWorldStartPoint, ratioWorldEndPoint] = getRatioRect(
      worldStartPoint,
      worldEndPoint,
      keepRatio ? canvasRatio : undefined
    );

    const { size: zoomSize, center3: zoomCenter } = new Box(
      ratioWorldStartPoint,
      ratioWorldEndPoint
    );

    // Change scale first so that moveCameraTo computes the updated camera bounds
    camera.scale.set(zoomSize.width / width, zoomSize.height / height, 1);
    camera.updateMatrixWorld();

    moveCameraTo(zoomCenter);
  }

  return (
    <SelectionTool id="SelectToZoom" onSelectionEnd={onSelectionEnd} {...props}>
      {({ startPoint, endPoint, worldStartPoint, worldEndPoint }) => {
        const isValid = isValidZoomRect(worldStartPoint, worldEndPoint);

        const [ratioWorldStartPoint, ratioWorldEndPoint] = getRatioRect(
          worldStartPoint,
          worldEndPoint,
          keepRatio ? canvasRatio : undefined
        );

        const [clampedStartPoint, clampedEndPoint] = clampRectToArea(
          ratioWorldStartPoint,
          ratioWorldEndPoint,
          visSize
        ).map(worldToData);

        return (
          <>
            <SelectionRect
              startPoint={startPoint}
              endPoint={endPoint}
              fill="white"
              stroke="black"
              fillOpacity={keepRatio || !isValid ? 0 : 0.25}
              strokeDasharray={keepRatio || !isValid ? '4' : undefined}
            />
            {keepRatio && isValid && (
              <SelectionRect
                startPoint={clampedStartPoint}
                endPoint={clampedEndPoint}
                fillOpacity={0.25}
                fill="white"
                stroke="black"
              />
            )}
          </>
        );
      }}
    </SelectionTool>
  );
}

export type { Props as SelectToZoomProps };
export default SelectToZoom;
