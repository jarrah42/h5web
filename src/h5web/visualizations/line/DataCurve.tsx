import React, { Suspense, useMemo, useContext, ReactElement } from 'react';
import { BufferGeometry, Vector3 } from 'three';
import { Line } from 'react-three-fiber/components';
import { useThree } from 'react-three-fiber';
import { CurveType } from './models';
import DataGlyphs from './DataGlyphs';
import AxisSystemContext from '../shared/AxisSystemContext';
import { getCanvasScale } from '../shared/utils';

const DEFAULT_COLOR = '#1b998b';

interface Props {
  abscissas: number[];
  ordinates: number[];
  color?: string;
  curveType?: CurveType;
}

function DataCurve(props: Props): ReactElement {
  const {
    abscissas,
    ordinates,
    color = DEFAULT_COLOR,
    curveType = CurveType.LineOnly,
  } = props;

  const { abscissaConfig, ordinateConfig } = useContext(AxisSystemContext);
  const { camera, size } = useThree();
  const { width, height } = size;

  const dataGeometry = useMemo(() => {
    const abscissaScale = getCanvasScale(abscissaConfig, width);
    const ordinateScale = getCanvasScale(ordinateConfig, height);

    const points = ordinates.map((val, index) => {
      const ordinate = ordinateScale(val);
      return new Vector3(
        abscissaScale(abscissas[index]),
        // This is to avoid a three.js warning when ordinateScale(val) is Infinity
        Number.isFinite(ordinate) ? ordinate : 0,
        // Move NaN/Infinity out of the camera FOV (negative val for logScale).
        // This allows to have only curve segments for the positive values
        Number.isFinite(ordinate) ? 0 : camera.far
      );
    });

    const geometry = new BufferGeometry();
    geometry.setFromPoints(points);
    return geometry;
  }, [
    abscissaConfig,
    abscissas,
    camera,
    height,
    ordinateConfig,
    ordinates,
    width,
  ]);

  const showLine = curveType !== CurveType.GlyphsOnly;
  const showGlyphs = curveType !== CurveType.LineOnly;

  return (
    <Suspense fallback={<></>}>
      {showGlyphs && <DataGlyphs geometry={dataGeometry} color={color} />}
      {showLine && (
        <Line geometry={dataGeometry}>
          <lineBasicMaterial attach="material" color={color} linewidth={2} />
        </Line>
      )}
    </Suspense>
  );
}

export default DataCurve;
