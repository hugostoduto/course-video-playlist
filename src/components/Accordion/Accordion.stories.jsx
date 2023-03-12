import React from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    title: 'Module Name',
    subTitle: 'Video Name',
    minutes: '17',
    progress: '0',
    total: '6',
    totalMinutes: '6',
  },
  argTypes: {
    title: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Accordion {...args} />
    </div>
  );
};
