import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import InteractionsProvider from '../../interactions/InteractionsProvider';
import type { Aspect, AxisConfig } from '../models';
import { getAxisOffsets, getVisRatio } from '../utils';
import AxisSystem from './AxisSystem';
import Html from './Html';
import R3FCanvas from './R3FCanvas';
import RatioEnforcer from './RatioEnforcer';
import ThresholdAdjuster from './ThresholdAdjuster';
import ViewportCenterer from './ViewportCenterer';
import styles from './VisCanvas.module.css';
import VisCanvasProvider from './VisCanvasProvider';

const NO_OFFSETS = { left: 0, right: 0, top: 0, bottom: 0 };

interface Props {
  title?: string;
  aspect?: Aspect;
  abscissaConfig: AxisConfig;
  ordinateConfig: AxisConfig;
  raycasterThreshold?: number;
  showAxes?: boolean;
}

function VisCanvas(props: PropsWithChildren<Props>) {
  const {
    title,
    aspect = 'auto',
    abscissaConfig,
    ordinateConfig,
    raycasterThreshold,
    showAxes = true,
    children,
  } = props;

  const visRatio = getVisRatio(aspect, abscissaConfig, ordinateConfig);

  const axisOffsets = showAxes
    ? getAxisOffsets({
        left: !!ordinateConfig.label,
        bottom: !!abscissaConfig.label,
        top: !!title,
      })
    : NO_OFFSETS;

  const [svgOverlay, setSvgOverlay] = useState<SVGSVGElement>();
  const [floatingToolbar, setFloatingToolbar] = useState<HTMLDivElement>();

  return (
    <div
      className={styles.canvasWrapper}
      style={{
        paddingBottom: axisOffsets.bottom,
        paddingLeft: axisOffsets.left,
        paddingTop: axisOffsets.top,
        paddingRight: axisOffsets.right,
      }}
    >
      <R3FCanvas className={styles.r3fRoot} orthographic>
        <VisCanvasProvider
          visRatio={visRatio}
          abscissaConfig={abscissaConfig}
          ordinateConfig={ordinateConfig}
          svgOverlay={svgOverlay}
          floatingToolbar={floatingToolbar}
        >
          <AxisSystem
            axisOffsets={axisOffsets}
            title={title}
            showAxes={showAxes}
          />
          <InteractionsProvider>{children}</InteractionsProvider>
          <ViewportCenterer />
          <RatioEnforcer />
          {raycasterThreshold !== undefined && (
            <ThresholdAdjuster value={raycasterThreshold} />
          )}
        </VisCanvasProvider>

        <Html>
          <svg
            ref={(elem) => setSvgOverlay(elem || undefined)}
            className={styles.svgOverlay}
          />
        </Html>
        <Html>
          <div
            ref={(elem) => setFloatingToolbar(elem || undefined)}
            className={styles.floatingToolbar}
          />
        </Html>
      </R3FCanvas>
    </div>
  );
}

export type { Props as VisCanvasProps };
export default VisCanvas;
