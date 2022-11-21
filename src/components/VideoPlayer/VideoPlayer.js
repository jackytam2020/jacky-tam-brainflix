import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer({ selectedVideo }) {
  const { id, image, video } = selectedVideo;

  return (
    <section className="video-section">
      <video
        className="video-section__video-player"
        poster={image}
        controls={true}
        src={video}
        preload={'none'}
        key={id}
      ></video>
    </section>
  );
}

export default VideoPlayer;
