import type { NdArray } from 'ndarray';
import { ProviderContext } from '../../providers/context';
import type { Dataset, Value } from '@h5web/shared';
import { isDefined, ScaleType } from '@h5web/shared';
import { useContext, useMemo } from 'react';
import type { DimensionMapping } from '../../dimension-mapper/models';
import { applyMapping, getBaseArray, getSliceSelection } from './utils';
import { createMemo } from 'react-use';
import { isAxis } from '../../dimension-mapper/utils';
import { getCombinedDomain } from '@h5web/lib';
import {
  getBounds,
  getValidDomainForScale,
} from '@h5web/lib/src/h5web/vis-packs/core/utils';

export function usePrefetchValues(
  datasets: (Dataset | undefined)[],
  dimMapping?: DimensionMapping
): void {
  const { valuesStore } = useContext(ProviderContext);
  datasets.filter(isDefined).forEach(({ path }) => {
    valuesStore.prefetch({ path, selection: getSliceSelection(dimMapping) });
  });
}

export function useDatasetValue<D extends Dataset>(
  dataset: D,
  dimMapping?: DimensionMapping
): Value<D>;

export function useDatasetValue<D extends Dataset>(
  dataset: D | undefined,
  dimMapping?: DimensionMapping
): Value<D> | undefined;

export function useDatasetValue(
  dataset: Dataset | undefined,
  dimMapping?: DimensionMapping
): unknown {
  const { valuesStore } = useContext(ProviderContext);

  if (!dataset) {
    return undefined;
  }

  // If `dimMapping` is not provided or has no slicing dimension, the entire dataset will be fetched
  return valuesStore.get({
    path: dataset.path,
    selection: getSliceSelection(dimMapping),
  });
}

export function useDatasetValues<D extends Dataset>(
  datasets: D[]
): Record<string, Value<D>>;

export function useDatasetValues(datasets: Dataset[]): Record<string, unknown> {
  const { valuesStore } = useContext(ProviderContext);

  return Object.fromEntries(
    datasets.map(({ name, path }) => [name, valuesStore.get({ path })])
  );
}

const useBounds = createMemo(getBounds);
const useValidDomainForScale = createMemo(getValidDomainForScale);

export function useDomain(
  valuesArray: NdArray<number[]> | number[],
  scaleType: ScaleType = ScaleType.Linear,
  errorArray?: NdArray<number[]> | number[]
) {
  const bounds = useBounds(valuesArray, errorArray);
  return useValidDomainForScale(bounds, scaleType);
}

export function useDomains(
  valuesArrays: (NdArray<number[]> | number[])[],
  scaleType: ScaleType = ScaleType.Linear
) {
  const allBounds = useMemo(() => {
    return valuesArrays.map((arr) => getBounds(arr));
  }, [valuesArrays]);

  return useMemo(
    () => allBounds.map((bounds) => getValidDomainForScale(bounds, scaleType)),
    [allBounds, scaleType]
  );
}

export const useCombinedDomain = createMemo(getCombinedDomain);

const useBaseArray = createMemo(getBaseArray);
const useApplyMapping = createMemo(applyMapping);

export function useMappedArray<T extends unknown[] | undefined>(
  value: T,
  dims: number[],
  mapping: DimensionMapping,
  autoScale?: boolean
): T extends (infer U)[]
  ? [NdArray<U[]>, NdArray<U[]>]
  : [undefined, undefined];

export function useMappedArray<T>(
  value: T[] | undefined,
  dims: number[],
  mapping: DimensionMapping,
  autoScale?: boolean
) {
  const baseArray = useBaseArray(value, dims);
  const mappedArray = useApplyMapping(baseArray, mapping);

  return [mappedArray, autoScale ? mappedArray : baseArray];
}

export function useMappedArrays(
  values: number[][],
  dims: number[],
  mapping: DimensionMapping,
  autoScale?: boolean
) {
  const baseArrays = useMemo(
    () => values.map((v) => getBaseArray(v, dims)),
    [dims, values]
  );
  const mappedArrays = useMemo(
    () => baseArrays.map((v) => applyMapping(v, mapping)),
    [baseArrays, mapping]
  );

  return [mappedArrays, autoScale ? mappedArrays : baseArrays];
}

export function useSlicedDimsAndMapping(
  dims: number[],
  dimMapping: DimensionMapping
): [number[], DimensionMapping] {
  return useMemo(
    () => [
      dims.filter((_, i) => isAxis(dimMapping[i])),
      dimMapping.filter(isAxis),
    ],
    [dimMapping, dims]
  );
}