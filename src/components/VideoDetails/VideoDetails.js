import React from 'react';
import './VideoDetails.scss';
import ViewsLogo from '../../assets/icons/views.svg';
import LikesLogo from '../../assets/icons/likes.svg';

import CommentSection from '../CommentSection/CommentSection';

function VideoDetails({ selectedVideo, currentVideoID, getSelectedVideo }) {
  const { title, channel, timestamp, views, likes, description, comments } =
    selectedVideo;

  return (
    <section className="video-details">
      <div className="video-details__title-holder">
        <h1 className="video-details__title">{title}</h1>
      </div>
      <div className="video-details__metrics">
        <div className="video-details__metrics-left">
          <p className="video-details__channel">By {channel}</p>
          <p className="video-details__date">
            {new Date(timestamp)
              .toLocaleString('en-CA', {
                timeZone: 'UTC',
                day: '2-digit',
                month: 'numeric',
                year: 'numeric',
              })
              .replace(/-/g, '/')}
          </p>
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
        <CommentSection
          numOfComments={comments.length}
          comments={comments}
          currentVideoID={currentVideoID}
          getSelectedVideo={getSelectedVideo}
        />
      )}
    </section>
  );
}

export default VideoDetails;
