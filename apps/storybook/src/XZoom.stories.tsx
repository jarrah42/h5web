import { Pan, VisCanvas, XAxisZoom } from '@h5web/lib';
import type { ModifierKey as ModifierKeyType } from '@h5web/lib/src/vis/models';
import type { Meta, Story } from '@storybook/react';

import VisCanvasStoriesConfig from './VisCanvas.stories';

interface TemplateProps {
  disabled?: boolean;
  modifierKey?: ModifierKeyType;
}

const Template: Story<TemplateProps> = (args) => {
  const { disabled, modifierKey } = args;

  return (
    <VisCanvas
      abscissaConfig={{ visDomain: [-10, 0], showGrid: true }}
      ordinateConfig={{ visDomain: [50, 100], showGrid: true }}
    >
      <Pan />
      <XAxisZoom disabled={disabled} modifierKey={modifierKey} />
    </VisCanvas>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  modifierKey: 'Alt', // Initialize to default value
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  modifierKey: 'Alt', // Initialize to default value
};

export const ModifierKey = Template.bind({});
ModifierKey.args = {
  disabled: false,
  modifierKey: 'Shift',
};

export default {
  ...VisCanvasStoriesConfig,
  title: 'Building Blocks/PanZoom/X Zoom',
  parameters: {
    ...VisCanvasStoriesConfig.parameters,
    controls: {
      include: ['disabled', 'modifierKey'],
    },
  },
  argTypes: {
    modifierKey: {
      control: { type: 'inline-radio' },
      options: ['Alt', 'Control', 'Shift'],
    },
  },
} as Meta;
