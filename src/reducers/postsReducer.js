import _ from 'lodash';
import FETCH_POSTS from '../actions/postsActionCreator';

export default function (state, action) {
  switch (action) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
