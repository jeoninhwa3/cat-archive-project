import React from 'react';
import Comments from '../detail-components/Comments';
import PostContents from '../detail-components/PostContents';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/temp_logo.png';

const StDetail = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 87vw;
  height: 100vh;
  margin: 0 auto;
`;

const PostDetailPage = () => {
  const { post_id } = useParams(); // 게시글 아이디
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <>
      <StDetail>
        <img src={logo} alt="홈" onClick={handleClick} />
        <PostContents postId={post_id} />
        <Comments postId={post_id} />
      </StDetail>
    </>
  );
};

export default PostDetailPage;
