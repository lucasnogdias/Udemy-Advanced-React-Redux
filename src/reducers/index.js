import { combineReducers } from "redux";
import { comments } from 'reducers/comments';
import { authReducer } from 'reducers/auth'

export default combineReducers({
  comments: comments,
  auth: authReducer,
})