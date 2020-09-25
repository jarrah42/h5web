import type { INTERPOLATORS } from './interpolators';

export type Dims = {
  rows: number;
  cols: number;
};

export type D3Interpolator = (t: number) => string;

export type ColorMap = keyof typeof INTERPOLATORS;
