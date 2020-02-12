import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';
import Spacer from '../../../components/Spacer';
import Table from '../../../components/Table';
import { Container, TableContainer } from './styles';
import { getUserPosts } from '../../../api';

const UserPosts = ({ userId }) => {
  // User posts state
  const [posts, setPosts] = useState([]);

  // Get user's posts on change of userId prop
  useEffect(() => {
    if (userId) {
      const getUsersPostsCall = getUserPosts(userId);
      getUsersPostsCall
        .then(res => {
          const { data } = res;
          setPosts(data || []);
        })
        .catch(err => console.error(err));
    } else {
      setPosts([]);
    }
  }, [userId]);

  return (
    <Container>
      <Text type="subtitle">User {userId} Posts</Text>
      <Spacer height="1rem" />
      {posts && posts.length !== 0 ? (
        <TableContainer>
          <Table
            items={posts}
            headers={[
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
          />
        </TableContainer>
      ) : (
        <Text color="grey">No data</Text>
      )}
    </Container>
  );
};

UserPosts.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserPosts.defaultProps = {
  userId: null
};

export default UserPosts;
