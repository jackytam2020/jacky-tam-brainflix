import React from 'react';
import './NextVideoList.scss';
import NextVideoItem from '../NextVideoItem/NextVideoItem';
import { Link } from 'react-router-dom';

function NextVideoList({ videos, handleSideBarClick }) {
  const renderedVideoItems = videos.map((video) => {
    return (
      <Link
        key={video.id}
        to={`/home/${video.id}`}
        className="next-video-list__link"
      >
        <NextVideoItem
          key={video.id}
          {...video}
          onClick={() => {
            handleSideBarClick(video.id);
          }}
        />
      </Link>
    );
  });

  return (
    <div className="next-video-list">
      <p className="next-video-list__header">NEXT VIDEOS</p>
      {renderedVideoItems}
    </div>
  );
}

export default NextVideoList;
