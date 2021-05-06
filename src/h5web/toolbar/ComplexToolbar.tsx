import { MdAspectRatio, MdGridOn } from 'react-icons/md';
import ToggleBtn from './controls/ToggleBtn';
import DomainSlider from './controls/DomainSlider/DomainSlider';
import SnapshotButton from './controls/SnapshotButton';
import Separator from './Separator';
import Toolbar from './Toolbar';
import ColorMapSelector from './controls/ColorMapSelector/ColorMapSelector';
import ScaleSelector from './controls/ScaleSelector/ScaleSelector';
import shallow from 'zustand/shallow';
import { useComplexConfig } from '../vis-packs/core/complex/config';
import {
  ComplexVisType,
  VIS_TYPE_SYMBOLS,
} from '../vis-packs/core/complex/models';
import Selector from './controls/Selector/Selector';
import { useHeatmapConfig } from '../vis-packs/core/heatmap/config';

function ComplexToolbar() {
  const {
    dataDomain,
    customDomain,
    setCustomDomain,
    colorMap,
    setColorMap,
    scaleType,
    setScaleType,
    keepAspectRatio,
    toggleAspectRatio,
    showGrid,
    toggleGrid,
    invertColorMap,
    toggleColorMapInversion,
  } = useHeatmapConfig((state) => state, shallow);
  const { visType, setVisType } = useComplexConfig((state) => state, shallow);

  return (
    <Toolbar>
      {dataDomain && (
        <DomainSlider
          dataDomain={dataDomain}
          customDomain={customDomain}
          scaleType={scaleType}
          onCustomDomainChange={setCustomDomain}
        />
      )}

      {dataDomain && <Separator />}

      <ColorMapSelector
        value={colorMap}
        onValueChange={setColorMap}
        invert={invertColorMap}
        onInversionChange={toggleColorMapInversion}
      />

      <Separator />

      <ScaleSelector value={scaleType} onScaleChange={setScaleType} />

      <Separator />

      <ToggleBtn
        label="Keep ratio"
        icon={MdAspectRatio}
        value={keepAspectRatio}
        onChange={toggleAspectRatio}
      />
      <ToggleBtn
        label="Grid"
        icon={MdGridOn}
        value={showGrid}
        onChange={toggleGrid}
      />

      <Separator />

      <Selector
        value={visType}
        onChange={(value: ComplexVisType) => setVisType(value)}
        options={Object.values(ComplexVisType)}
        optionComponent={({ option }) => (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>{`${VIS_TYPE_SYMBOLS[option]} ${option}`}</>
        )}
      />

      <Separator />

      <SnapshotButton />
    </Toolbar>
  );
}

export default ComplexToolbar;
