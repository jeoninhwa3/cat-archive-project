import React from 'react';

import Comments from '../components/Comments';
import PostContents from '../components/PostContents';

const PostDetailPage = () => {
  return (
    <>
      <PostContents />
      <Comments />
    </>
  );
};

export default PostDetailPage;
