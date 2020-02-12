import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';
import Spacer from '../../../components/Spacer';
import Table from '../../../components/Table';
import { Container, TableContainer } from './styles';
import { getPostComments } from '../../../api';

const PostComments = ({ postId }) => {
  // Post comments state
  const [comments, setComments] = useState([]);

  // Get post's comments on change of postId prop
  useEffect(() => {
    if (postId) {
      const getPostCommentsCall = getPostComments(postId);
      getPostCommentsCall
        .then(res => {
          const { data } = res;
          setComments(data || []);
        })
        .catch(err => console.error(err));
    } else {
      setComments([]);
    }
  }, [postId]);

  return (
    <Container>
      <Text type="subtitle">Post {postId} Comments</Text>
      <Spacer height="1rem" />
      {comments && comments.length !== 0 ? (
        <TableContainer>
          <Table
            items={comments}
            headers={[
              {
                id: 'id',
                name: 'Comment ID'
              },
              {
                id: 'name',
                name: 'User Name'
              },
              {
                id: 'email',
                name: 'User Email'
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

PostComments.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PostComments.defaultProps = {
  postId: null
};

export default PostComments;
