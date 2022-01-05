import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = ({saveComment, fetchComments}) => {
  const [comment, setComment] = useState('');

  const handleChange = (evt) => {
    setComment(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    saveComment(comment);
    
    setComment('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className='fetch-comments' onClick={fetchComments}>Fetch Comments</button>
    </div>
  )
}

export default connect(null, actions)(CommentBox);