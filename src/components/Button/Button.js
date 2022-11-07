import React from 'react';
import './Button.scss';
import UploadIcon from '../../assets/icons/upload.svg';
import AddCommentIcon from '../../assets/icons/add_comment.svg';

function Button(props) {
  return (
    <div className="button">
      <img
        src={props.text === 'UPLOAD' ? UploadIcon : AddCommentIcon}
        className="button__icon"
        alt="button icon"
      />
      <p className="button__text">{props.text}</p>
    </div>
  );
}

export default Button;
