import axios from 'axios';
import { FETCH_POST, FETCH_POSTS, CREATE_POST } from './postsActions';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=AKIGAO';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());
  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  };
}
