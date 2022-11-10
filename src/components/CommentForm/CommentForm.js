import React from 'react';
import './CommentForm.scss';
import Button from '../Button/Button';
import InputForm from '../InputForm/InputForm';
import PostCommentIcon from '../../assets/icons/add_comment.svg';
function CommentForm(props) {
  return (
    <form className="comment-form">
      <div className="comment-form__input">
        <InputForm
          placeholder={'Add a new comment'}
          label={'JOIN THE CONVERSATION'}
        />
      </div>
      <div className="comment-form__post-button">
        <Button icon={PostCommentIcon} text={'COMMENT'} />
      </div>
    </form>
  );
}

export default CommentForm;
