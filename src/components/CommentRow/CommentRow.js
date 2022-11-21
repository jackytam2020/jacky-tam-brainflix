import React from 'react';
import './CommentRow.scss';
import LikesIcon from '../../assets/icons/likes.svg';
import DeleteIcon from '../../assets/icons/icon-delete.svg';

function CommentRow(props) {
  return (
    <div className="comment-row">
      <div className="comment-row__left">
        <div className="comment-row__avatar"></div>
      </div>
      <div className="comment-row__right">
        <div className="comment-row__user-info">
          <p className="comment-row__user-name">{props.name}</p>
          <p className="comment-row__date">
            {new Date(props.timestamp)
              .toLocaleString('en-CA', {
                formatMatcher: 'best fit',
                timeZone: 'UTC',
                day: '2-digit',
                month: 'numeric',
                year: 'numeric',
              })
              .replace(/-/g, '/')}
          </p>
        </div>
        <p className="comment-row__comment">{props.comment}</p>
        <p className="comment-row__likes">{props.likes} likes</p>
        <div className="comment-row__likes-delete-icon">
          <img
            src={LikesIcon}
            className="comment-row__like-icon"
            alt="like icon"
            onClick={() => {
              props.onLike(props.id);
            }}
          />
          <img
            src={DeleteIcon}
            className="comment-row__delete-icon"
            alt="like icon"
            onClick={() => {
              props.onDelete(props.id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentRow;
