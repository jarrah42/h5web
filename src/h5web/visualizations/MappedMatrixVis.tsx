import React, { ReactElement } from 'react';
import type { HDF5Dataset, HDF5Value } from '../providers/models';
import type { DimensionMapping } from '../dataset-visualizer/models';
import MatrixVis from './matrix/MatrixVis';
import { assertArray } from './shared/utils';
import { useMappedArray } from './shared/hooks';

interface Props {
  value: HDF5Value;
  dataset: HDF5Dataset;
  mapperState: DimensionMapping;
}

function MappedMatrixVis(props: Props): ReactElement {
  const { value, dataset, mapperState } = props;
  assertArray<number | string>(value);

  const dataArray = useMappedArray(dataset, value, mapperState);
  return <MatrixVis dataArray={dataArray} />;
}

export default MappedMatrixVis;
