/* eslint-disable no-param-reassign */
import {
  createContextStore,
  Action,
  State,
  action,
  Actions,
  Computed,
  computed,
} from 'easy-peasy';
import { extent } from 'd3-array';
import { ScaleLinear, ScaleSymLog, scaleSymlog, scaleLinear } from 'd3-scale';
import { ColorMap, INTERPOLATORS } from './interpolators';

export type D3Interpolator = (t: number) => string;
export type DataScale =
  | ScaleLinear<number, number>
  | ScaleSymLog<number, number>;

interface HeatmapState {
  domain?: [number, number];
  findDomain: Action<HeatmapState, number[]>;

  colorMap: ColorMap;
  setColorMap: Action<HeatmapState, ColorMap>;

  hasLogScale: boolean;
  toggleLogScale: Action<HeatmapState>;

  interpolator: Computed<HeatmapState, D3Interpolator>;
  dataScale: Computed<HeatmapState, DataScale | undefined>;
}

export const HeatmapStore = createContextStore<HeatmapState>({
  domain: undefined,
  findDomain: action((state, values) => {
    const [min, max] = extent(values);
    state.domain =
      min === undefined || max === undefined ? undefined : [min, max];
  }),

  colorMap: 'Magma',
  setColorMap: action((state, colorMap) => {
    state.colorMap = colorMap;
  }),

  hasLogScale: false,
  toggleLogScale: action(state => {
    state.hasLogScale = !state.hasLogScale;
  }),

  interpolator: computed(state => INTERPOLATORS[state.colorMap]),
  dataScale: computed(state => {
    if (state.domain === undefined) {
      return undefined;
    }

    const scale = (state.hasLogScale ? scaleSymlog : scaleLinear)();
    scale.domain(state.domain);

    return scale;
  }),
});

export function useHeatmapState(): State<HeatmapState> {
  return HeatmapStore.useStoreState(state => state);
}

export function useHeatmapActions(): Actions<HeatmapState> {
  return HeatmapStore.useStoreActions(actions => actions);
}
