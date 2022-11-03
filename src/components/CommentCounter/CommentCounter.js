import React from 'react';
import './CommentCounter.scss';

function CommentCounter(props) {
  return <p className="comment-counter">{props.numOfComments} comments</p>;
}

export default CommentCounter;
