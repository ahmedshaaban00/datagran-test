import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';
import Spacer from '../../../components/Spacer';
import Table from '../../../components/Table';
import { Container, TableContainer } from './styles';
import { getPosts } from '../../../api';

const AllPosts = ({ onUserIdClick, onPostIdClick }) => {
  // All posts state
  const [posts, setPosts] = useState([]);

  // Get all posts on component's first load
  useEffect(() => {
    const getPostsCall = getPosts();
    getPostsCall
      .then(res => {
        const { data } = res;
        setPosts(data || []);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Text type="subtitle">All Posts</Text>
      <Spacer height="1rem" />
      {posts && posts.length !== 0 ? (
        <TableContainer>
          <Table
            items={posts}
            headers={[
              {
                id: 'userId',
                name: 'User ID'
              },
              {
                id: 'id',
                name: 'Post ID'
              },
              {
                id: 'title',
                name: 'Title'
              },
              {
                id: 'body',
                name: 'Body'
              }
            ]}
            clickableCellTypes={['userId', 'id']}
            onCellClick={(type, value) => {
              if (type === 'userId') onUserIdClick(value);
              else if (type === 'id') onPostIdClick(value);
            }}
          />
        </TableContainer>
      ) : (
        <Text color="grey">No data</Text>
      )}
    </Container>
  );
};

AllPosts.propTypes = {
  onUserIdClick: PropTypes.func,
  onPostIdClick: PropTypes.func
};

AllPosts.defaultProps = {
  onUserIdClick: () => {},
  onPostIdClick: () => {}
};

export default AllPosts;
