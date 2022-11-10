import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer({ selectedVideo }) {
  const { image } = selectedVideo;
  return (
    <section className="video-section">
      <video
        className="video-section__video-player"
        poster={image}
        controls={true}
        src={''}
      ></video>
    </section>
  );
}

export default VideoPlayer;
