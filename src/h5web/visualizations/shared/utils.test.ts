import { tickStep } from 'd3-array';
import { computeVisSize, findDomain, getTicksProp } from './utils';

describe('Shared visualization utilities', () => {
  describe('computeVisSize', () => {
    describe('with aspect ratio > 1', () => {
      it('should return available size with width reduced', () => {
        const availableSize = { width: 20, height: 10 };
        const size = computeVisSize(availableSize, 1.5);

        expect(size?.width).toBeLessThanOrEqual(availableSize.width);
        expect(size?.height).toBeLessThanOrEqual(availableSize.height);
        expect(size).toEqual({ width: 10 * 1.5, height: 10 });
      });

      it('should return available size with height reduced', () => {
        const availableSize = { width: 12, height: 50 };
        const size = computeVisSize(availableSize, 3);

        expect(size?.width).toBeLessThanOrEqual(availableSize.width);
        expect(size?.height).toBeLessThanOrEqual(availableSize.height);
        expect(size).toEqual({ width: 12, height: 12 / 3 });
      });
    });

    describe('with aspect ratio < 1', () => {
      it('should return available size with width reduced', () => {
        const availableSize = { width: 20, height: 10 };
        const size = computeVisSize(availableSize, 0.5);

        expect(size?.width).toBeLessThanOrEqual(availableSize.width);
        expect(size?.height).toBeLessThanOrEqual(availableSize.height);
        expect(size).toEqual({ width: 10 * 0.5, height: 10 });
      });

      it('should return available size with height reduced', () => {
        const availableSize = { width: 12, height: 50 };
        const size = computeVisSize(availableSize, 0.75);

        expect(size?.width).toBeLessThanOrEqual(availableSize.width);
        expect(size?.height).toBeLessThanOrEqual(availableSize.height);
        expect(size).toEqual({ width: 12, height: 12 / 0.75 });
      });
    });

    it('should return available size when no aspect ratio is provided', () => {
      const size = computeVisSize({ width: 20, height: 10 }, undefined);
      expect(size).toEqual({ width: 20, height: 10 });
    });

    it('should return `undefined` when no space is available for visualization', () => {
      const size = computeVisSize({ width: 0, height: 0 }, 1);
      expect(size).toBeUndefined();
    });
  });

  describe('findDomain', () => {
    it('should return the domain of the data', () => {
      const data = [2, 0, 10, 5, 2, -1];
      const domain = findDomain(data);
      expect(domain).toEqual([-1, 10]);
    });

    it('should return undefined when the data is empty', () => {
      const domain = findDomain([]);
      expect(domain).toBeUndefined();
    });
  });

  describe('getTicksProp', () => {
    describe('without forcing to integers', () => {
      it('should return number of ticks allowed for available size regardless of visible domain', () => {
        const prop1 = getTicksProp([0, 1], 200);
        expect(prop1).toEqual({ numTicks: 3 });

        const prop2 = getTicksProp([5, 20], 1000);
        expect(prop2).toEqual({ numTicks: 10 });
      });
    });

    describe('with only integers', () => {
      const onlyIntegers = true;

      it('should return zero tick values when visible domain spans zero indices', () => {
        const prop1 = getTicksProp([0.2, 0.8], 10, onlyIntegers);
        expect(prop1).toEqual({ tickValues: [] });

        const prop2 = getTicksProp([5.01, 5.02], 10, onlyIntegers);
        expect(prop2).toEqual({ tickValues: [] });
      });

      it('should return as many integer tick values as indices when space allows for it', () => {
        const prop1 = getTicksProp([0, 3], 1000, onlyIntegers);
        expect(prop1).toEqual({ tickValues: [0, 1, 2, 3] });

        const prop2 = getTicksProp([5.4, 6.9], 1000, onlyIntegers);
        expect(prop2).toEqual({ tickValues: [6] });
      });

      it('should return evenly-spaced tick values for available space', () => {
        const prop1 = getTicksProp([0.8, 20.2], 1000, onlyIntegers); // domain has 20 potential ticks but space allows for 10
        expect(prop1).toEqual({
          tickValues: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        });

        const prop2 = getTicksProp([2, 7], 200, onlyIntegers); // domain has 8 potential ticks but space allows for 3
        expect(prop2).toEqual({ tickValues: [2, 4, 6] });
      });

      it('should always return integer tick values', () => {
        // Tick count is not always respected, which is acceptable
        const prop1 = getTicksProp([0, 4], 200, onlyIntegers); // domain has 5 potential ticks but space allows for 3
        expect(prop1).toEqual({ tickValues: [0, 1, 2, 3, 4] });

        // This is because `d3.tickStep` is not too worried about the count...
        expect(tickStep(0, 4, 3)).toBe(1); // step should actually be 2 to end up with 3 ticks: `[0, 2, 4]`

        // Unfortunately, this behaviour can lead to decimal tick values (i.e. step < 1)...
        expect(tickStep(0, 2, 3)).toBe(0.5); // we'd end up with `[0, 0.5, 1, 1.5, 2]` instead of `[0, 1, 2]`

        // So we specifically work around it by forcing the step to be greater than or equal to 1
        const prop2 = getTicksProp([0, 2], 200, onlyIntegers);
        expect(prop2).toEqual({ tickValues: [0, 1, 2] });
      });
    });
  });
});