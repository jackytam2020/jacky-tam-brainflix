import React from 'react';
import './VideoDetails.scss';
import ViewsLogo from '../../assets/icons/views.svg';
import LikesLogo from '../../assets/icons/likes.svg';

import CommentSection from '../CommentSection/CommentSection';

function VideoDetails(props) {
  console.log(props);
  return (
    <section className="video-details">
      <div className="video-details__title-holder">
        <h1 className="video-details__title">{props.videoTitle}</h1>
      </div>
      <div className="video-details__metrics">
        <div className="video-details__metrics-left">
          <p className="video-details__channel">By {props.channel}</p>
          <p className="video-details__date">{props.date}</p>
        </div>
        <div className="video-details__metrics-right">
          <div className="video-details__views-holder">
            <img
              className="video-details__views-icon"
              src={ViewsLogo}
              alt="views logo"
            />
            <p className="video-details__views">{props.views}</p>
          </div>
          <div className="video-details__likes-holder">
            <img
              className="video-details__likes-icon"
              src={LikesLogo}
              alt="likes logo"
            />
            <p className="video-details__likes">{props.likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{props.description}</p>
      {/* <CommentSection numOfComments={props.}/> */}
    </section>
  );
}

export default VideoDetails;
