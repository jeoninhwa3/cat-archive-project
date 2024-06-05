import React from 'react';
// import Comments from '../detail-components/Comments';
import PostContents from '../detail-components/PostContents';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StDetail = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 60vw;
  height: 100v;
  margin: 0 auto;

  hr {
    width: 100%; /* 너비를 설정 */
    height: 2px; /* 높이를 설정 */
    background-color: #0000003c;
    border: none; /* 기본 테두리를 제거 */
    margin: 1em 0;
  }
`;

const PostDetailPage = () => {
  const { postId } = useParams(); // 게시글 아이디

  return (
    <>
      <StDetail>
        <PostContents postId={postId} />
        <Comments postId={postId} />
      </StDetail>
    </>
  );
};

export default PostDetailPage;
