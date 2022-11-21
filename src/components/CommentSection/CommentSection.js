import React, { useState } from 'react';
import './CommentSection.scss';
import CommentCounter from '../CommentCounter/CommentCounter';
import NewCommentBar from '../NewCommentBar/NewCommentBar';
import CommentRow from '../CommentRow/CommentRow';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentSection(props) {
  const [newComment, setNewComment] = useState('');
  const [validCommentInput, setValidCommentInput] =
    useState('input-block__input');

  const invalidInput = () =>
    toast.error('Please add a comment', {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'colored',
    });

  const submitComment = async (e) => {
    e.preventDefault();

    if (newComment !== '') {
      await axios.post(
        `http://localhost:8080/videos/${props.currentVideoID}/comments`,
        {
          name: 'Jacky',
          comment: newComment,
        }
      );
      props.getSelectedVideo(props.currentVideoID);
    } else {
      invalidInput();
      setValidCommentInput('input-block__input input-block__input--invalid');
    }

    //clear input on submit
    setNewComment('');
  };

  const likeComment = async (commentID) => {
    const response = await axios.patch(
      `http://localhost:8080/videos/${props.currentVideoID}/comments/${commentID}`
    );
    console.log(response);
    props.getSelectedVideo(props.currentVideoID);
  };

  const deleteComment = async (commentID) => {
    const response = await axios.delete(
      `http://localhost:8080/videos/${props.currentVideoID}/comments/${commentID}`
    );
    console.log(response);
    props.getSelectedVideo(props.currentVideoID);
  };

  const sortedComments = props.comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const renderedComments = sortedComments.map((comments) => {
    return (
      <CommentRow
        key={comments.id}
        {...comments}
        onDelete={deleteComment}
        onLike={likeComment}
      />
    );
  });
  return (
    <section className="comment-section">
      <CommentCounter numOfComments={props.numOfComments} />
      <NewCommentBar
        setNewComment={setNewComment}
        onSubmit={submitComment}
        validCommentInput={validCommentInput}
        setValidCommentInput={setValidCommentInput}
        newComment={newComment}
      />
      <ToastContainer />
      {renderedComments}
    </section>
  );
}

export default CommentSection;
