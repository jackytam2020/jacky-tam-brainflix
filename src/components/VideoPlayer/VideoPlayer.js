import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer(props) {
  return (
    <section className="video-section">
      <video
        className="video-section__video-player"
        poster={props.thumbnail}
        controls={true}
        src={''}
      ></video>
    </section>
  );
}

export default VideoPlayer;
