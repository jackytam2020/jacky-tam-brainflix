import React from 'react';
import './NewCommentBar.scss';
import Avatar from '../Avatar/Avatar';
import CommentForm from '../CommentForm/CommentForm';

function NewCommentBar({
  setNewComment,
  onSubmit,
  newComment,
  validCommentInput,
  setValidCommentInput,
}) {
  return (
    <div className="new-comment-bar">
      <div className="new-comment-bar__avatar">
        <Avatar />
      </div>
      <CommentForm
        setNewComment={setNewComment}
        onSubmit={onSubmit}
        newComment={newComment}
        validCommentInput={validCommentInput}
        setValidCommentInput={setValidCommentInput}
      />
    </div>
  );
}

export default NewCommentBar;
