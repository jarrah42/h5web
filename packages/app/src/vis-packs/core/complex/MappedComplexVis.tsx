import { HeatmapVis, useSafeDomain, useVisDomain } from '@h5web/lib';
import type { H5WebComplex, ScaleType } from '@h5web/shared';
import { createPortal } from 'react-dom';
import shallow from 'zustand/shallow';

import type { DimensionMapping } from '../../../dimension-mapper/models';
import { useHeatmapConfig } from '../heatmap/config';
import { useMappedArray, useSlicedDimsAndMapping } from '../hooks';
import type { AxisMapping } from '../models';
import { DEFAULT_DOMAIN } from '../utils';
import ComplexToolbar from './ComplexToolbar';
import { useComplexConfig } from './config';
import { usePhaseAmplitudeArrays } from './hooks';
import { ComplexVisType } from './models';

interface Props {
  value: H5WebComplex[];
  dims: number[];
  dimMapping: DimensionMapping;
  axisMapping?: AxisMapping;
  title: string;
  colorScaleType?: ScaleType;
  toolbarContainer: HTMLDivElement | undefined;
}

function MappedComplexVis(props: Props) {
  const {
    value,
    dims,
    dimMapping,
    axisMapping = [],
    title,
    colorScaleType,
    toolbarContainer,
  } = props;

  const {
    customDomain,
    colorMap,
    scaleType,
    layout,
    showGrid,
    invertColorMap,
  } = useHeatmapConfig((state) => state, shallow);

  const { visType } = useComplexConfig((state) => state, shallow);

  const [slicedDims, slicedMapping] = useSlicedDimsAndMapping(dims, dimMapping);

  const [mappedArray] = useMappedArray(value, slicedDims, slicedMapping);

  const {
    phaseArray,
    phaseDomain = DEFAULT_DOMAIN,
    amplitudeArray,
    amplitudeDomain = DEFAULT_DOMAIN,
  } = usePhaseAmplitudeArrays(mappedArray, scaleType);

  const dataArray =
    visType !== ComplexVisType.Amplitude ? phaseArray : amplitudeArray;
  const dataDomain =
    visType !== ComplexVisType.Amplitude ? phaseDomain : amplitudeDomain;

  const visDomain = useVisDomain(customDomain, dataDomain);
  const [safeDomain] = useSafeDomain(visDomain, dataDomain, scaleType);

  return (
    <>
      {toolbarContainer &&
        createPortal(
          <ComplexToolbar
            dataDomain={dataDomain}
            initialScaleType={colorScaleType}
          />,
          toolbarContainer
        )}

      <HeatmapVis
        dataArray={dataArray}
        domain={safeDomain}
        title={`${title} (${visType.toLowerCase()})`}
        colorMap={colorMap}
        scaleType={scaleType}
        layout={layout}
        showGrid={showGrid}
        invertColorMap={invertColorMap}
        abscissaParams={axisMapping[dimMapping.indexOf('x')]}
        ordinateParams={axisMapping[dimMapping.indexOf('y')]}
        alpha={
          visType === ComplexVisType.PhaseAmplitude
            ? {
                array: amplitudeArray,
                domain: amplitudeDomain,
              }
            : undefined
        }
      />
    </>
  );
}

export default MappedComplexVis;