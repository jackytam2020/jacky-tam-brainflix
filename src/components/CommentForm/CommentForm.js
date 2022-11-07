import React from 'react';
import './CommentForm.scss';
import Button from '../Button/Button';

function CommentForm(props) {
  return (
    <form className="comment-form">
      <div className="comment-form__input-block">
        <p className="comment-form__header">JOIN THE CONVERSATION</p>
        <textarea
          className="comment-form__input"
          placeholder="Add a new comment"
        ></textarea>
      </div>
      <Button text={'COMMENT'} />
    </form>
  );
}

export default CommentForm;