import React from 'react';
import './NextVideoItem.scss';

function NextVideoItem(props) {
  return (
    <div className="next-video-item">
      <img
        className="next-video-item__thumbnail"
        src={props.image}
        alt={props.title}
      />
      <div className="next-video-item__video-info">
        <p className="next-video-item__video-title">{props.title}</p>
        <p className="next-video-item__video-author">{props.channel}</p>
      </div>
    </div>
  );
}

export default NextVideoItem;
