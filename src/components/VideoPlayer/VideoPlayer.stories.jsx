import React from 'react';
import { VideoPlayer } from './VideoPlayer';

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
  args: {
    src: 'https://www.youtube-nocookie.com/embed/LCfBYE97rFk?rel=0',
  },
  argTypes: {
    src: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <VideoPlayer {...args} />
    </div>
  );
};
