import axios from 'axios';
import FETCH_POSTS from './postsActions';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=AKIGAO';

export default function fetchActions() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
