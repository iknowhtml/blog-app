import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './postsReducer';

const reducers = combineReducers({
  posts: PostsReducer,
  form: formReducer,
});

export default reducers;
