import {
  CurveType,
  ScaleSelector,
  Separator,
  ToggleBtn,
  ToggleGroup,
  Toolbar,
} from '@h5web/lib';
import { ScaleType } from '@h5web/shared';
import { FiItalic } from 'react-icons/fi';
import { MdGridOn, MdDomain } from 'react-icons/md';
import shallow from 'zustand/shallow';

import { useLineConfig } from './config';

const SCALETYPE_OPTIONS = [ScaleType.Linear, ScaleType.Log, ScaleType.SymLog];

function LineToolbar() {
  const {
    curveType,
    setCurveType,
    showGrid,
    toggleGrid,
    xScaleType,
    setXScaleType,
    yScaleType,
    setYScaleType,
    autoScale,
    isAutoScaleDisabled,
    toggleAutoScale,
    showErrors,
    areErrorsDisabled,
    toggleErrors,
  } = useLineConfig((state) => state, shallow);

  return (
    <Toolbar>
      <ScaleSelector
        label="X"
        value={xScaleType}
        onScaleChange={setXScaleType}
        options={SCALETYPE_OPTIONS}
      />
      <ScaleSelector
        label="Y"
        value={yScaleType}
        onScaleChange={setYScaleType}
        options={SCALETYPE_OPTIONS}
      />

      <Separator />

      <ToggleBtn
        label="Auto-scale"
        icon={MdDomain}
        value={autoScale}
        onToggle={toggleAutoScale}
        disabled={isAutoScaleDisabled}
      />

      <ToggleBtn
        label="Errors"
        icon={(props) => (
          <FiItalic
            transform="skewX(20)"
            style={{ marginLeft: '-0.25em', marginRight: '0.0625rem' }}
            {...props}
          />
        )}
        value={!areErrorsDisabled && showErrors}
        onToggle={toggleErrors}
        disabled={areErrorsDisabled}
      />

      <ToggleBtn
        label="Grid"
        icon={MdGridOn}
        value={showGrid}
        onToggle={toggleGrid}
      />

      <Separator />

      <ToggleGroup
        role="radiogroup"
        ariaLabel="Curve type"
        value={curveType}
        onChange={(val) => {
          setCurveType(val as CurveType);
        }}
      >
        <ToggleGroup.Btn label="Line" value={CurveType.LineOnly} />
        <ToggleGroup.Btn label="Points" value={CurveType.GlyphsOnly} />
        <ToggleGroup.Btn label="Both" value={CurveType.LineAndGlyphs} />
      </ToggleGroup>
    </Toolbar>
  );
}

export default LineToolbar;