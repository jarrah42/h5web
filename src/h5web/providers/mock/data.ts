import { range } from 'lodash-es';
import ndarray from 'ndarray';
import {
  assertArray,
  assertDataset,
  assertDefined,
  assertNumericType,
  assertSimpleShape,
} from '../../guards';
import { getEntityAtPath } from '../../utils';
import { ScaleType } from '../../visualizations/shared/models';
import {
  compoundType,
  floatType,
  intType,
  scalarShape,
  stringType,
  makeStrAttr,
  makeDataset,
  makeDatatype,
  makeExternalLink,
  makeGroup,
  makeNxDataGroup,
  makeNxDataset,
  makeNxGroup,
  makeSimpleDataset,
} from './utils';

/* -------------------- */
/* ----- METADATA ----- */

export const mockDomain = 'source.h5';

export const mockMetadata = makeNxGroup(mockDomain, 'NXroot', {
  defaultPath: 'nexus_entry',
  children: [
    makeGroup('entities', [
      makeGroup('empty_group'),
      makeExternalLink('external_link', 'my_file', 'entry_000/dataset'),
      makeDatatype('datatype', compoundType),
      makeDataset('raw', scalarShape, compoundType),
      makeDataset('raw_large', scalarShape, compoundType),
      makeDataset('scalar_int', scalarShape, intType),
      makeDataset('scalar_str', scalarShape, stringType),
    ]),
    makeGroup('nD_datasets', [
      makeSimpleDataset('oneD_linear', intType, [41]),
      makeSimpleDataset('oneD', intType, [41]),
      makeSimpleDataset('twoD', intType, [20, 41]),
      makeSimpleDataset('threeD', intType, [9, 20, 41]),
      makeSimpleDataset('fourD', intType, [3, 9, 20, 41]),
    ]),
    makeNxGroup('nexus_entry', 'NXentry', {
      defaultPath: 'nx_process/nx_data',
      children: [
        makeNxGroup('nx_process', 'NXprocess', {
          children: [
            makeNxDataGroup('nx_data', {
              signal: makeNxDataset('twoD', intType, [20, 41]),
              silxStyle: { signalScaleType: ScaleType.SymLog },
              title: makeDataset('title', scalarShape, stringType, {
                id: 'title_twoD',
              }),
            }),
          ],
        }),
        makeNxDataGroup('spectrum', {
          signal: makeNxDataset('twoD_spectrum', intType, [20, 41], {
            interpretation: 'spectrum',
            units: 'arb. units',
          }),
          errors: makeNxDataset('errors', floatType, [20, 41], {
            id: 'errors_twoD',
          }),
          axes: { X: makeNxDataset('X', intType, [41], { units: 'nm' }) },
          axesAttr: ['.', 'X'],
        }),
        makeNxDataGroup('image', {
          signal: makeNxDataset('fourD_image', intType, [3, 9, 20, 41], {
            longName: 'Interference fringes',
            interpretation: 'image',
          }),
          axes: {
            X: makeNxDataset('X', intType, [41], { units: 'nm' }),
            Y: makeNxDataset('Y', intType, [20], {
              units: 'deg',
              longName: 'Angle (degrees)',
            }),
          },
          axesAttr: ['.', '.', 'Y', 'X'],
          silxStyle: { signalScaleType: ScaleType.Log },
        }),
        makeNxDataGroup('log_spectrum', {
          signal: makeNxDataset('oneD', intType, [41]),
          errors: makeNxDataset('oneD_errors', intType, [41]),
          axes: { X_log: makeNxDataset('X_log', floatType, [41]) },
          axesAttr: ['X_log'],
          silxStyle: {
            signalScaleType: ScaleType.Log,
            axesScaleType: [ScaleType.Log],
          },
        }),
      ],
    }),
    makeGroup('nexus_malformed', [
      makeGroup('default_not_found', [], {
        attributes: [makeStrAttr('default', '/test')],
      }),
      makeGroup('no_signal', [], {
        attributes: [makeStrAttr('NX_class', 'NXdata')],
      }),
      makeGroup('signal_not_found', [], {
        attributes: [
          makeStrAttr('NX_class', 'NXdata'),
          makeStrAttr('signal', 'unknown'),
        ],
      }),
    ]),
  ],
});

/* ------------------ */
/* ----- VALUES ----- */

const arr1 = range(-20, 21);
const arr2 = range(0, 100, 5);
const arr3 = range(-1, 1.25, 0.25);
const arr4 = range(10, 40, 10);

const oneD = arr1.map((val) => val ** 2);
const twoD = arr2.map((offset) => oneD.map((val) => val - offset));
const threeD = arr3.map((multiplier) =>
  twoD.map((arrOneD) => arrOneD.map((val) => val * multiplier))
);
const fourD = arr4.map((divider) =>
  threeD.map((arrTwoD) =>
    arrTwoD.map((arrOneD) => arrOneD.map((val) => Math.sin(val / divider)))
  )
);

export const mockValues = {
  null: null,
  raw: { int: 42 },
  raw_large: { str: '.'.repeat(1000) },
  scalar_int: 0,
  scalar_str: 'foo',
  oneD_linear: arr1,
  oneD,
  twoD,
  twoD_spectrum: twoD,
  threeD,
  fourD,
  X: arr1,
  Y: arr2,
  X_log: arr1.map((_, i) => (i + 1) * 0.1),
  title_twoD: 'NeXus 2D',
  oneD_str: ['foo', 'bar'],
  errors_twoD: arr2.map((offset) => arr1.map((val) => Math.abs(val - offset))),
  fourD_image: fourD,
  oneD_errors: oneD.map((x) => Math.abs(x) / 10),
};

export function getMockDataArray(path: string): ndarray {
  const dataset = getEntityAtPath(mockMetadata, path);
  assertDefined(dataset, `Expected entity at path "${path}"`);
  assertDataset(dataset, `Expected group at path "${path}"`);
  assertNumericType(dataset);
  assertSimpleShape(dataset);

  const value = mockValues[dataset.id as keyof typeof mockValues];
  assertArray<number>(value);

  return ndarray(value.flat(Infinity), dataset.shape.dims);
}
