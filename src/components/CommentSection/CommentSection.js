import React from 'react';
import './CommentSection.scss';
import CommentCounter from '../CommentCounter/CommentCounter';
import NewCommentBar from '../NewCommentBar/NewCommentBar';
import CommentRow from '../CommentRow/CommentRow';
import { useState } from 'react';
import axios from 'axios';

function CommentSection(props) {
  const [newComment, setNewComment] = useState('');

  const submitComment = async () => {
    const response = await axios.post(
      `https://project-2-api.herokuapp.com/videos/${props.currentVideoID}/comments?api_key=1ed048a3-1c44-4c1d-93f6-633b34652602`,
      {
        name: 'Jacky',
        comment: newComment,
      }
    );
    props.getSelectedVideo(props.currentVideoID);
  };

  const deleteComment = async (commentID) => {
    const response = await axios.delete(
      `https://project-2-api.herokuapp.com/videos/${props.currentVideoID}/comments/${commentID}?api_key=1ed048a3-1c44-4c1d-93f6-633b34652602`
    );
    console.log(response);
    props.getSelectedVideo(props.currentVideoID);
  };

  const renderedComments = props.comments.map((comments) => {
    return (
      <CommentRow key={comments.id} {...comments} onDelete={deleteComment} />
    );
  });
  return (
    <section className="comment-section">
      <CommentCounter numOfComments={props.numOfComments} />
      <NewCommentBar setNewComment={setNewComment} onSubmit={submitComment} />
      {renderedComments}
    </section>
  );
}

export default CommentSection;
