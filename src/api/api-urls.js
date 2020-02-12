// Base APIs URLs
const baseURL = 'https://jsonplaceholder.typicode.com';

// Endpoints
const endPoints = Object.freeze({
  GET_POSTS: '/posts',
  GET_COMMENTS: '/comments'
});

const getAPI = endpoint => {
  return `${baseURL}${endPoints[endpoint]}`;
};

export default getAPI;
