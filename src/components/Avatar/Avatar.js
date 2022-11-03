import React from 'react';
import './Avatar.scss';

function Avatar(props) {
  return (
    <div className="avatar">
      <img
        src={require('../../assets/images/Mohan-muruge.jpg')}
        className="avatar__image"
        alt="user avatar"
      />
    </div>
  );
}

export default Avatar;
