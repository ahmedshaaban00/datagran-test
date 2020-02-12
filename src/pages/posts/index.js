import React, { useState } from 'react';
import { Container } from './styles';
import AllPosts from '../../containers/posts/AllPosts';
import UserPosts from '../../containers/posts/UserPosts';
import PostComments from '../../containers/posts/PostComments';

const PostsPage = () => {
  // Active Table Data state
  const [activeTableData, setActiveTable] = useState({
    type: null,
    value: null
  });

  return (
    <Container>
      <AllPosts
        onUserIdClick={userId =>
          setActiveTable({ type: 'userId', value: userId })
        }
        onPostIdClick={postId =>
          setActiveTable({ type: 'postId', value: postId })
        }
      />
      {activeTableData && activeTableData.type === 'userId' ? (
        <UserPosts userId={activeTableData.value} />
      ) : null}
      {activeTableData && activeTableData.type === 'postId' ? (
        <PostComments postId={activeTableData.value} />
      ) : null}
    </Container>
  );
};

export default PostsPage;
