import type {
  AttributeValues,
  Entity,
  ArrayShape,
  Dataset,
  ScalarShape,
  ProvidedEntity,
} from '@h5web/shared';
import type { FetchStore } from 'react-suspense-fetch';

import type { ImageAttribute } from '../vis-packs/core/models';
import type { NxAttribute } from '../vis-packs/nexus/models';

export type EntitiesStore = FetchStore<ProvidedEntity, string>;

export interface ValuesStore extends FetchStore<unknown, ValuesStoreParams> {
  cancelOngoing: () => void;
  evictCancelled: () => void;
}

export interface ValuesStoreParams {
  dataset: Dataset<ScalarShape | ArrayShape>;
  selection?: string | undefined;
}

export interface AttrValuesStore extends FetchStore<AttributeValues, Entity> {
  getSingle: (
    entity: Entity,
    attrName: NxAttribute | ImageAttribute
  ) => unknown;
}

export type ExportFormat = 'csv' | 'npy' | 'tiff';
export type ExportURL = URL | (() => Promise<URL | Blob>) | undefined;

export type ProgressCallback = (prog: number[]) => void;
