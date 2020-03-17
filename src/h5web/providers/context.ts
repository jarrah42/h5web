import { createContext } from 'react';
import { HDF5Link, HDF5GenericEntity, HDF5Id, HDF5Value } from './models';
import { TreeNode } from '../explorer/models';

interface DataProvider {
  getDomain: () => string;
  getMetadataTree: () => Promise<TreeNode<HDF5Link>>;
  getEntity: (link?: HDF5Link) => Promise<HDF5GenericEntity | undefined>;
  getValue: (id: HDF5Id) => Promise<HDF5Value>;
}

function missing(): never {
  throw new Error(
    'Missing data provider context; please wrap `<H5Web />` with one of the available providers.'
  );
}

export const DataProviderContext = createContext<DataProvider>({
  getDomain: missing as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  getMetadataTree: missing as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  getEntity: missing as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  getValue: missing as any, // eslint-disable-line @typescript-eslint/no-explicit-any
});