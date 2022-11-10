import React, { useEffect } from 'react';
import './VideoDetails.scss';
import ViewsLogo from '../../assets/icons/views.svg';
import LikesLogo from '../../assets/icons/likes.svg';

import CommentSection from '../CommentSection/CommentSection';

function VideoDetails({ selectedVideo, getDefaultSelectedVideo }) {
  const { title, channel, timestamp, views, likes, description, comments, id } =
    selectedVideo;

  // useEffect(() => {
  //   getDefaultSelectedVideo(id);
  // }, []);

  return (
    <section className="video-details">
      <div className="video-details__title-holder">
        <h1 className="video-details__title">{title}</h1>
      </div>
      <div className="video-details__metrics">
        <div className="video-details__metrics-left">
          <p className="video-details__channel">By {channel}</p>
          <p className="video-details__date">{timestamp}</p>
        </div>
        <div className="video-details__metrics-right">
          <div className="video-details__views-holder">
            <img
              className="video-details__views-icon"
              src={ViewsLogo}
              alt="views logo"
            />
            <p className="video-details__views">{views}</p>
          </div>
          <div className="video-details__likes-holder">
            <img
              className="video-details__likes-icon"
              src={LikesLogo}
              alt="likes logo"
            />
            <p className="video-details__likes">{likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{description}</p>

      {comments && (
        <CommentSection numOfComments={comments.length} comments={comments} />
      )}
    </section>
  );
}

export default VideoDetails;
