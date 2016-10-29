import { combineReducers } from 'redux';
import PostReducer from './redcuer_posts';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
