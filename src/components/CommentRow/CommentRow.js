import React from 'react';
import './CommentRow.scss';

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
      </div>
    </div>
  );
}

export default CommentRow;
