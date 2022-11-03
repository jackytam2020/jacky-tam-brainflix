import React from 'react';
import './CommentSection.scss';
import CommentCounter from '../CommentCounter/CommentCounter';
import NewCommentBar from '../NewCommentBar/NewCommentBar';
import CommentRow from '../CommentRow/CommentRow';

function CommentSection(props) {
  const renderedComments = props.comments.map((comments) => {
    return <CommentRow key={comments.id} {...comments} />;
  });
  return (
    <section className="comment-section">
      <CommentCounter numOfComments={props.numOfComments} />
      <NewCommentBar />
      {renderedComments}
    </section>
  );
}

export default CommentSection;
