import React from 'react';
import './NextVideoList.scss';
import NextVideoItem from '../NextVideoItem/NextVideoItem';

function NextVideoList({ videos, handleSideBarClick }) {
  const renderedVideoItems = videos.map((video) => {
    return (
      <NextVideoItem
        key={video.id}
        {...video}
        onClick={() => {
          handleSideBarClick(video.id);
        }}
      />
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
