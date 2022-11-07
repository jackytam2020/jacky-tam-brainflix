import React from 'react';
import './NewCommentBar.scss';
import Avatar from '../Avatar/Avatar';
import CommentForm from '../CommentForm/CommentForm';

function NewCommentBar(props) {
  return (
    <div className="new-comment-bar">
      <div className="new-comment-bar__avatar">
        <Avatar />
      </div>
      <CommentForm />
    </div>
  );
}

export default NewCommentBar;
