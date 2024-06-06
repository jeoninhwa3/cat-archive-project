import Comments from '../components/detail-components/Comments';
import PostContents from '../components/detail-components/PostContents';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

const StDetail = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  width: 55vw;
  margin: 0 auto;
  padding: 50px;
`;

const PostDetailPage = () => {
  //디테일페이지 들어오면 스크롤위치 맨 위로 조정
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { post_id } = useParams(); // 게시글 아이디 변수할당

  return (
    <>
      <StDetail>
        <PostContents postId={post_id} />
        <Comments postId={post_id} />
      </StDetail>
    </>
  );
};

export default PostDetailPage;
