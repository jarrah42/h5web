import { ImageType } from '@h5web/lib';
import create from 'zustand';
import createContext from 'zustand/context';
import { persist } from 'zustand/middleware';

import type { ConfigProviderProps } from '../../models';
import type { Layout } from '../heatmap/models';

interface RgbVisConfig {
  showGrid: boolean;
  toggleGrid: () => void;

  layout: Layout;
  setLayout: (layout: Layout) => void;

  imageType: ImageType;
  setImageType: (channels: ImageType) => void;
}

function createStore() {
  return create<RgbVisConfig>(
    persist(
      // https://github.com/pmndrs/zustand/issues/701
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (set, get) => ({
        showGrid: false,
        toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),

        layout: 'cover',
        setLayout: (layout: Layout) => set({ layout }),

        imageType: ImageType.RGB,
        setImageType: (imageType: ImageType) => set({ imageType }),
      }),
      {
        name: 'h5web:rgb',
        version: 1,
      }
    )
  );
}

const { Provider, useStore } = createContext<RgbVisConfig>();
export { useStore as useRgbConfig };

export function RgbConfigProvider(props: ConfigProviderProps) {
  const { children } = props;
  return <Provider createStore={createStore}>{children}</Provider>;
}