import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const VideoPlayer = ({ src }) => {
  return (
    <Styled.Container>
      <iframe
        className="video-container"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture; "
        allowFullScreen
      ></iframe>
    </Styled.Container>
  );
};

VideoPlayer.propTypes = {
  src: P.string.isRequired,
};
