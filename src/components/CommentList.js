import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({comments}) => {

  const renderComments = () => (
    comments.map(comment => 
      (<li key={comment}>{comment}</li>)
    )
  );

  return (
    <div>
      {renderComments()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {comments: state.comments}
}

export default connect(mapStateToProps)(CommentList);