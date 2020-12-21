import React, { ReactElement } from 'react';
import type { Story } from '@storybook/react/types-6-0';
import { ScalarVis, ScalarVisProps } from '../packages/lib';

const numberData = 1024;
const stringData = 'This is a scalar';

const Template: Story<ScalarVisProps> = (args): ReactElement => {
  const { value } = args;
  return <ScalarVis value={value} />;
};

export const DisplayNumber = Template.bind({});

DisplayNumber.args = {
  value: numberData,
};

export const DisplayString = Template.bind({});

DisplayString.args = {
  value: stringData,
};

export default {
  title: 'Visualizations/ScalarVis',
  component: ScalarVis,
};