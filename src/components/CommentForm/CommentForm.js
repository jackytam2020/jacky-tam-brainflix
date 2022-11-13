import React from 'react';
import './CommentForm.scss';
import Button from '../Button/Button';
import InputForm from '../InputForm/InputForm';
import PostCommentIcon from '../../assets/icons/add_comment.svg';
function CommentForm({ setNewComment, onSubmit, newComment }) {
  const handleCommentInput = (e) => {
    setNewComment(e.target.value);
  };
  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <div className="comment-form__input">
        <InputForm
          placeholder={'Add a new comment'}
          label={'JOIN THE CONVERSATION'}
          onChange={handleCommentInput}
          value={newComment}
          inputClassName={'input-block__input'}
        />
      </div>
      <div className="comment-form__post-button">
        <Button icon={PostCommentIcon} text={'COMMENT'} type={'submit'} />
      </div>
    </form>
  );
}

export default CommentForm;
