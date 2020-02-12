import axios from './axios';
import getAPI from './api-urls';

export const getPosts = () => {
  return axios.get(getAPI('GET_POSTS'), {
    params: {}
  });
};

export const getUserPosts = userId => {
  return axios.get(getAPI('GET_POSTS'), {
    params: { userId }
  });
};

export const getPostComments = postId => {
  return axios.get(getAPI('GET_COMMENTS'), {
    params: { postId }
  });
};
