import React from 'react';
import './Button.scss';
import AddCommentIcon from '../../assets/icons/add_comment.svg';

function Button(props) {
  return (
    <div className="button" onClick={props.onSubmit}>
      <img src={props.icon} className="button__icon" alt="button icon" />
      <p className="button__text">{props.text}</p>
    </div>
  );
}

export default Button;
