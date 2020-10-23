import React, { ReactElement, useEffect } from 'react';
import { usePrevious } from 'react-use';
import type { HDF5Value } from '../../providers/models';
import type { DimensionMapping } from '../../dimension-mapper/models';
import HeatmapVis from './HeatmapVis';
import { assertArray, assertOptionalArray } from '../shared/utils';
import { useMappedArray, useDomain, useBaseArray } from '../shared/hooks';
import { useHeatmapConfig } from './config';

interface Props {
  value: HDF5Value;
  dims: number[];
  mapperState: DimensionMapping;
  valueLabel?: string;
  axesLabels?: (string | undefined)[];
  axesValues?: Record<string, HDF5Value>;
}

function MappedHeatmapVis(props: Props): ReactElement {
  const {
    value,
    axesLabels = [],
    axesValues = {},
    valueLabel,
    dims,
    mapperState,
  } = props;
  assertArray<number>(value);

  const {
    customDomain,
    colorMap,
    scaleType,
    keepAspectRatio,
    showGrid,
    resetDomains,
    autoScale,
    disableAutoScale,
  } = useHeatmapConfig();

  const baseArray = useBaseArray(value, dims);
  const dataArray = useMappedArray(baseArray, mapperState);
  const dataDomain = useDomain(
    (autoScale ? dataArray.data : baseArray.data) as number[],
    scaleType
  );
  const prevDataDomain = usePrevious(dataDomain);

  // Disable `autoScale` for 2D datasets (baseArray and dataArray span the same values)
  useEffect(() => {
    disableAutoScale(!baseArray.shape || baseArray.shape.length <= 2);
  }, [baseArray.shape, disableAutoScale]);

  // Use `customDomain` if any, unless `dataDomain` just changed (in which case it is stale and needs to be reset - cf. `useEffect` below)
  const domain =
    customDomain && dataDomain === prevDataDomain ? customDomain : dataDomain;

  useEffect(() => {
    resetDomains(dataDomain); // in config, update `dataDomain` and reset `customDomain`
  }, [dataDomain, resetDomains]);

  const abscissaLabel = mapperState && axesLabels[mapperState.indexOf('x')];
  const abscissas = abscissaLabel && axesValues[abscissaLabel];
  assertOptionalArray<number>(abscissas);

  const ordinateLabel = mapperState && axesLabels[mapperState.indexOf('y')];
  const ordinates = ordinateLabel && axesValues[ordinateLabel];
  assertOptionalArray<number>(ordinates);

  return (
    <HeatmapVis
      dataArray={dataArray}
      dataLabel={valueLabel}
      domain={domain}
      colorMap={colorMap}
      scaleType={scaleType}
      keepAspectRatio={keepAspectRatio}
      showGrid={showGrid}
      abscissaParams={{ label: abscissaLabel, values: abscissas }}
      ordinateParams={{ label: ordinateLabel, values: ordinates }}
    />
  );
}

export default MappedHeatmapVis;
