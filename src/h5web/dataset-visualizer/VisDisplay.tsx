import React from 'react';
import { HDF5SimpleShape, HDF5Dataset } from '../providers/models';
import { Vis } from './models';
import {
  RawVis,
  ScalarVis,
  MatrixVis,
  LineVis,
  HeatmapVis,
} from '../visualizations';
import { useValue } from '../providers/hooks';
import HeatmapProvider from '../visualizations/heatmap/HeatmapProvider';
import { Dims } from '../visualizations/heatmap/models';
import LineProvider from '../visualizations/line/LineProvider';

interface Props {
  key: string; // reset states when switching between datasets
  vis: Vis;
  dataset: HDF5Dataset;
}

function VisDisplay(props: Props): JSX.Element {
  const { vis, dataset } = props;
  const value = useValue(dataset.id);

  if (value === undefined) {
    return <></>;
  }

  if (vis === Vis.Raw) {
    return <RawVis data={value} />;
  }

  if (vis === Vis.Scalar) {
    return <ScalarVis data={value} />;
  }

  if (vis === Vis.Matrix) {
    return (
      <MatrixVis dims={(dataset.shape as HDF5SimpleShape).dims} data={value} />
    );
  }

  if (vis === Vis.Line) {
    return (
      <LineProvider data={value}>
        <LineVis />
      </LineProvider>
    );
  }

  if (vis === Vis.Heatmap) {
    return (
      <HeatmapProvider
        dims={(dataset.shape as HDF5SimpleShape).dims as Dims}
        data={value}
      >
        <HeatmapVis />
      </HeatmapProvider>
    );
  }

  throw new Error('Visualization not supported');
}

export default VisDisplay;
