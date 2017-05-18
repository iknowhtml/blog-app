import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';

const reducers = combineReducers({
  posts: PostsReducer,
});

export default reducers;
