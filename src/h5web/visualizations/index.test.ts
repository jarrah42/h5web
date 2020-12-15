import type { Entity } from '../providers/models';
import { Vis, VIS_DEFS } from '.';
import { NxInterpretation } from './nexus/models';
import {
  intType,
  compoundType,
  scalarShape,
  stringType,
  floatType,
  makeStrAttr,
  makeSimpleShape,
  makeDataset,
  makeDatatype,
  makeGroup,
  makeNxData,
  makeNxGroup,
  makeSimpleDataset,
  withAttributes,
  withNxInterpretation,
} from '../providers/mock/utils';

const datasetIntScalar = makeDataset('dataset_int', scalarShape, intType);
const datasetFltScalar = makeDataset('dataset_flt', scalarShape, floatType);
const datasetStrScalar = makeDataset('dataset_flt', scalarShape, stringType);
const datasetInt0D = makeSimpleDataset('dataset_int_0d', intType, []);
const datasetInt1D = makeSimpleDataset('dataset_int_1d', intType, [5]);
const datasetInt2D = makeSimpleDataset('dataset_int_2d', intType, [5, 3]);
const datasetStr2D = makeSimpleDataset('dataset_str_2d', stringType, [5, 3]);
const datasetFlt3D = makeSimpleDataset('dataset_flt_3d', intType, [5, 3, 1]);

const spectrumDatasetInt1D = withNxInterpretation(
  datasetInt1D,
  NxInterpretation.Spectrum
);
const imageDatasetInt1D = withNxInterpretation(
  datasetInt1D,
  NxInterpretation.Image
);
const spectrumDatasetInt2D = withNxInterpretation(
  datasetInt2D,
  NxInterpretation.Spectrum
);
const imageDatasetInt2D = withNxInterpretation(
  datasetInt2D,
  NxInterpretation.Image
);

const groupEmpty = makeGroup('group_empty');
const datatypeInt = makeDatatype('datatype_int', intType);

function makeSupportFn(vis: Vis) {
  return (entity: Entity) => VIS_DEFS[vis].supportsEntity(entity);
}

describe('Visualization definitions', () => {
  describe('Vis.Raw', () => {
    const supportsEntity = makeSupportFn(Vis.Raw);

    it('should support any dataset', () => {
      expect(supportsEntity(datasetInt1D)).toBe(true);
    });

    it('should not support group and datatype', () => {
      expect(supportsEntity(groupEmpty)).toBe(false);
      expect(supportsEntity(datatypeInt)).toBe(false);
    });
  });

  describe('Vis.Scalar', () => {
    const supportsEntity = makeSupportFn(Vis.Scalar);

    it('should support dataset with base type and scalar shape', () => {
      expect(supportsEntity(datasetIntScalar)).toBe(true);
      expect(supportsEntity(datasetFltScalar)).toBe(true);
      expect(supportsEntity(datasetStrScalar)).toBe(true);
    });

    it('should not support dataset with advanced type', () => {
      const dataset = makeDataset('foo', scalarShape, compoundType);
      expect(supportsEntity(dataset)).toBe(false);
    });

    it('should not support dataset with non-scalar shape', () => {
      expect(supportsEntity(datasetInt1D)).toBe(false);
    });

    it('should not support group and datatype', () => {
      expect(supportsEntity(groupEmpty)).toBe(false);
      expect(supportsEntity(datatypeInt)).toBe(false);
    });
  });

  describe('Vis.Matrix', () => {
    const supportsEntity = makeSupportFn(Vis.Matrix);

    it('should support dataset with base type, simple shape and at least one dimension', () => {
      expect(supportsEntity(datasetInt1D)).toBe(true);
      expect(supportsEntity(datasetStr2D)).toBe(true);
      expect(supportsEntity(datasetFlt3D)).toBe(true);
    });

    it('should not support dataset with advanced type', () => {
      const dataset = makeDataset('foo', makeSimpleShape([1]), compoundType);
      expect(supportsEntity(dataset)).toBe(false);
    });

    it('should not support dataset with non-simple shape', () => {
      expect(supportsEntity(datasetIntScalar)).toBe(false);
    });

    it('should not support dataset with no dimension', () => {
      expect(supportsEntity(datasetInt0D)).toBe(false);
    });

    it('should not support group and datatype', () => {
      expect(supportsEntity(groupEmpty)).toBe(false);
      expect(supportsEntity(datatypeInt)).toBe(false);
    });
  });

  describe('Vis.Line', () => {
    const supportsEntity = makeSupportFn(Vis.Line);

    it('should support dataset with numeric type, simple shape and at least one dimension', () => {
      expect(supportsEntity(datasetInt1D)).toBe(true);
      expect(supportsEntity(datasetFlt3D)).toBe(true);
    });

    it('should not support dataset with non-numeric type', () => {
      expect(supportsEntity(datasetStr2D)).toBe(false);
    });

    it('should not support dataset with non-simple shape', () => {
      expect(supportsEntity(datasetIntScalar)).toBe(false);
    });

    it('should not support dataset with no dimension', () => {
      expect(supportsEntity(datasetInt0D)).toBe(false);
    });

    it('should not support group and datatype', () => {
      expect(supportsEntity(groupEmpty)).toBe(false);
      expect(supportsEntity(datatypeInt)).toBe(false);
    });
  });

  describe('Vis.Heatmap', () => {
    const supportsEntity = makeSupportFn(Vis.Heatmap);

    it('should support dataset with numeric type, simple shape and at least two dimensions', () => {
      expect(supportsEntity(datasetInt2D)).toBe(true);
      expect(supportsEntity(datasetFlt3D)).toBe(true);
    });

    it('should not support dataset with non-numeric type', () => {
      expect(supportsEntity(datasetStr2D)).toBe(false);
    });

    it('should not support dataset with non-simple shape', () => {
      expect(supportsEntity(datasetIntScalar)).toBe(false);
    });

    it('should not support dataset with less than two dimensions', () => {
      expect(supportsEntity(datasetInt1D)).toBe(false);
    });

    it('should not support group and datatype', () => {
      expect(supportsEntity(groupEmpty)).toBe(false);
      expect(supportsEntity(datatypeInt)).toBe(false);
    });
  });

  describe('Vis.NxSpectrum', () => {
    const supportsEntity = makeSupportFn(Vis.NxSpectrum);

    it('should support NXdata group referencing signal with spectrum interpretation', () => {
      const group = makeNxData('foo', { signal: spectrumDatasetInt1D });
      expect(supportsEntity(group)).toBe(true);
    });

    it('should support NXdata group referencing signal with numeric type, simple shape, one dimension and no interpretation', () => {
      const group = makeNxData('foo', { signal: datasetInt1D });
      expect(supportsEntity(group)).toBe(true);
    });

    it('should support NXdata group referencing signal with numeric type, simple shape, one dimension and unknown interpretation', () => {
      const group = makeNxData('foo', {
        signal: withAttributes(datasetInt1D, [
          makeStrAttr('interpretation', 'unknown'),
        ]),
      });

      expect(supportsEntity(group)).toBe(true);
    });

    it('should not support NXdata group referencing signal with non-spectrum interpretation', () => {
      const group = makeNxData('foo', { signal: imageDatasetInt1D });
      expect(supportsEntity(group)).toBe(false);
    });

    it('should support group with relative `default` path to supported NXdata group', () => {
      const group = makeNxGroup('foo', 'NXentry', {
        defaultPath: 'bar',
        children: [makeNxData('bar', { signal: spectrumDatasetInt1D })],
      });

      expect(supportsEntity(group)).toBe(true);
    });

    it('should support group with absolute `default` path to supported NXdata group', () => {
      const rootGroup = makeNxGroup('root', 'NXroot', {
        children: [
          makeNxGroup('foo', 'NXentry', {
            defaultPath: '/foo/bar',
            children: [makeNxData('bar', { signal: spectrumDatasetInt1D })],
          }),
        ],
      });

      const [groupWithDefault] = rootGroup.children;
      expect(supportsEntity(groupWithDefault)).toBe(true);
    });

    it('should support group with multi-step `default` path to supported NXdata group', () => {
      const group = makeNxGroup('root', 'NXroot', {
        defaultPath: 'foo',
        children: [
          makeNxGroup('foo', 'NXentry', {
            defaultPath: 'bar',
            children: [makeNxData('bar', { signal: spectrumDatasetInt1D })],
          }),
        ],
      });

      expect(supportsEntity(group)).toBe(true);
    });

    it('should not support group with no `NXdata` class and no `default` attribute', () => {
      const groupWithSignal = makeGroup('foo', [datasetInt1D], {
        attributes: [makeStrAttr('signal', datasetInt1D.name)],
      });

      expect(supportsEntity(groupEmpty)).toBe(false);
      expect(supportsEntity(groupWithSignal)).toBe(false);
    });

    it('should not support dataset', () => {
      expect(supportsEntity(datasetInt1D)).toBe(false);
    });
  });

  describe('Vis.NxImage', () => {
    const supportsEntity = makeSupportFn(Vis.NxImage);

    it('should support NXdata group referencing signal with image interpretation', () => {
      const group = makeNxData('foo', { signal: imageDatasetInt2D });
      expect(supportsEntity(group)).toBe(true);
    });

    it('should support NXdata group referencing signal with numeric type, simple shape, two dimensions and no interpretation', () => {
      const group = makeNxData('foo', { signal: datasetInt2D });
      expect(supportsEntity(group)).toBe(true);
    });

    it('should support NXdata group referencing signal with numeric type, simple shape, more than two dimensions and unknown interpretation', () => {
      const group = makeNxData('foo', {
        signal: withAttributes(datasetFlt3D, [
          makeStrAttr('interpretation', 'unknown'),
        ]),
      });

      expect(supportsEntity(group)).toBe(true);
    });

    it('should not support NXdata group referencing signal with less than two dimensions', () => {
      const group = makeNxData('foo', { signal: datasetInt1D });
      expect(supportsEntity(group)).toBe(false);
    });

    it('should not support NXdata group referencing signal with non-image interpretation', () => {
      const group = makeNxData('foo', { signal: spectrumDatasetInt2D });
      expect(supportsEntity(group)).toBe(false);
    });

    it('should support group with relative `default` path to supported NXdata group', () => {
      const group = makeNxGroup('foo', 'NXentry', {
        defaultPath: 'bar',
        children: [makeNxData('bar', { signal: imageDatasetInt2D })],
      });

      expect(supportsEntity(group)).toBe(true);
    });

    it('should support group with absolute `default` path to supported NXdata group', () => {
      const rootGroup = makeNxGroup('root', 'NXroot', {
        children: [
          makeNxGroup('foo', 'NXentry', {
            defaultPath: '/foo/bar',
            children: [makeNxData('bar', { signal: imageDatasetInt2D })],
          }),
        ],
      });

      const [groupWithDefault] = rootGroup.children;
      expect(supportsEntity(groupWithDefault)).toBe(true);
    });

    it('should support group with multi-step `default` path to supported NXdata group', () => {
      const group = makeNxGroup('root', 'NXroot', {
        defaultPath: 'foo',
        children: [
          makeNxGroup('foo', 'NXentry', {
            defaultPath: 'bar',
            children: [makeNxData('bar', { signal: imageDatasetInt2D })],
          }),
        ],
      });

      expect(supportsEntity(group)).toBe(true);
    });

    it('should not support group with no `NXdata` class and no `default` attribute', () => {
      const groupWithSignal = makeGroup('foo', [datasetInt2D], {
        attributes: [makeStrAttr('signal', datasetInt2D.name)],
      });

      expect(supportsEntity(groupEmpty)).toBe(false);
      expect(supportsEntity(groupWithSignal)).toBe(false);
    });

    it('should not support dataset', () => {
      expect(supportsEntity(datasetInt1D)).toBe(false);
    });
  });
});