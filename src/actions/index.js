import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asdfghj';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

//This is where we request the blog data from backend using Axios
