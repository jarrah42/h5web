import type { Domain } from '@h5web/shared';
import type { NdArray } from 'ndarray';
import type { TextureFilter } from 'three';

import type { VisScaleType } from '../models';
import type { VisMeshProps } from '../shared/VisMesh';
import VisMesh from '../shared/VisMesh';
import HeatmapMaterial from './HeatmapMaterial';
import type { ColorMap, TextureSafeTypedArray } from './models';

interface Props extends VisMeshProps {
  values: NdArray<TextureSafeTypedArray | Uint16Array>; // uint16 values are treated as half floats
  domain: Domain;
  scaleType: VisScaleType;
  colorMap: ColorMap;
  invertColorMap?: boolean;
  magFilter?: TextureFilter;
  alphaValues?: NdArray<TextureSafeTypedArray | Uint16Array>; // uint16 values are treated as half floats
  alphaDomain?: Domain;
}

function HeatmapMesh(props: Props) {
  const {
    values,
    domain,
    scaleType,
    colorMap,
    invertColorMap,
    magFilter,
    alphaValues,
    alphaDomain,
    ...visMeshProps
  } = props;

  return (
    <VisMesh {...visMeshProps}>
      <HeatmapMaterial
        values={values}
        domain={domain}
        scaleType={scaleType}
        colorMap={colorMap}
        invertColorMap={invertColorMap}
        magFilter={magFilter}
        alphaValues={alphaValues}
        alphaDomain={alphaDomain}
      />
    </VisMesh>
  );
}

export type { Props as HeatmapMeshProps };
export default HeatmapMesh;
